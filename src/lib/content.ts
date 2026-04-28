import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import notesManifest from "@/generated/notes-manifest.json";
import type { Note } from "@/lib/types";

type NoteFrontMatter = {
  title: string;
  subtitle: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  pdfUrl?: string;
  ttsEnabled?: boolean;
  metaTitle?: string;
  metaDescription?: string;
};

type NoteSource = {
  slug: string;
  source: string;
};

function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function buildTableOfContents(markdown: string): Array<{ id: string; title: string; level: 2 | 3 }> {
  const headings: Array<{ id: string; title: string; level: 2 | 3 }> = [];
  const lines = markdown.split("\n");
  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)/);
    if (h2Match) {
      const title = h2Match[1].trim();
      headings.push({ id: slugifyHeading(title), title, level: 2 });
      continue;
    }
    const h3Match = line.match(/^###\s+(.+)/);
    if (h3Match) {
      const title = h3Match[1].trim();
      headings.push({ id: slugifyHeading(title), title, level: 3 });
    }
  }
  return headings;
}

function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(/<h([23])>(.*?)<\/h\1>/g, (_match, level, innerText) => {
    const plainText = innerText.replace(/<[^>]+>/g, "");
    const id = slugifyHeading(plainText);
    return `<h${level} id="${id}">${innerText}</h${level}>`;
  });
}

function estimateReadingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export async function getAllNotes(): Promise<Note[]> {
  const sources = notesManifest as NoteSource[];
  const notes = await Promise.all(sources.map((entry) => getNoteFromSource(entry.slug, entry.source)));

  return notes.sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
}

export async function getNoteBySlug(slug: string): Promise<Note> {
  const sources = notesManifest as NoteSource[];
  const source = sources.find((entry) => entry.slug === slug);

  if (!source) {
    throw new Error(`Note not found for slug: ${slug}`);
  }

  return getNoteFromSource(source.slug, source.source);
}

async function getNoteFromSource(slug: string, source: string): Promise<Note> {
  const { data, content } = matter(source);
  const frontMatter = data as NoteFrontMatter;

  const processed = await remark().use(gfm).use(html).process(content);
  const contentHtml = addHeadingIds(processed.toString());
  const tableOfContents = buildTableOfContents(content);

  return {
    slug,
    title: frontMatter.title,
    subtitle: frontMatter.subtitle,
    publishedAt: frontMatter.publishedAt,
    coverImage: frontMatter.coverImage,
    tags: frontMatter.tags ?? [],
    excerpt: frontMatter.excerpt,
    readingTime: estimateReadingTime(content),
    contentHtml,
    pdfUrl: frontMatter.pdfUrl,
    ttsEnabled: frontMatter.ttsEnabled ?? false,
    metaTitle: frontMatter.metaTitle,
    metaDescription: frontMatter.metaDescription,
    tableOfContents,
  };
}

export async function getRelatedNotes(
  note: Note,
  limit = 2,
): Promise<Note[]> {
  const allNotes = await getAllNotes();
  return allNotes
    .filter((candidate) => candidate.slug !== note.slug)
    .sort((a, b) => {
      const scoreA = a.tags.filter((tag) => note.tags.includes(tag)).length;
      const scoreB = b.tags.filter((tag) => note.tags.includes(tag)).length;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

export async function getFeaturedNotes(limit = 3): Promise<Note[]> {
  const notes = await getAllNotes();
  return notes.slice(0, limit);
}
