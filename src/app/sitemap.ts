import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notes = await getAllNotes();

  const staticRoutes = [
    "",
    "/about",
    "/notes",
    "/case-studies",
    "/contact",
    "/disclaimer",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const noteRoutes = notes.map((note) => ({
    url: `${siteConfig.url}/notes/${note.slug}`,
    lastModified: new Date(note.publishedAt),
  }));

  return [...staticRoutes, ...noteRoutes];
}
