import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import type { Note } from "@/lib/types";

const notesDirectory = path.join(process.cwd(), "content", "notes");

type NoteFrontMatter = {
  title: string;
  subtitle: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
};

function estimateReadingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export async function getAllNotes(): Promise<Note[]> {
  const filenames = await fs.readdir(notesDirectory);
  const notes = await Promise.all(
    filenames
      .filter((file) => file.endsWith(".md"))
      .map(async (filename) => getNoteBySlug(filename.replace(".md", ""))),
  );

  return notes.sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
}

export async function getNoteBySlug(slug: string): Promise<Note> {
  const fullPath = path.join(notesDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);
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
