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
};

type NoteSource = {
  slug: string;
  source: string;
};

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
  const contentHtml = processed.toString();

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
