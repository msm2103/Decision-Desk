import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/content";
import {
  getApprovedGuestPmContributors,
  getApprovedGuestPmTrades,
} from "@/lib/guestPms";
import { siteConfig } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notes = await getAllNotes();
  const contributors = getApprovedGuestPmContributors();
  const trades = getApprovedGuestPmTrades();

  const staticRoutes = [
    "",
    "/profile",
    "/notes",
    "/guest-pms",
    "/playbook",
    "/work-with-me",
    "/contact",
    "/subscribe",
    "/unsubscribe",
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

  const contributorRoutes = contributors.map((contributor) => ({
    url: `${siteConfig.url}/guest-pms/${contributor.slug}`,
    lastModified: new Date(),
  }));

  const tradeRoutes = trades.map((trade) => ({
    url: `${siteConfig.url}/guest-pms/${trade.contributorSlug}/ideas/${trade.ideaSlug}`,
    lastModified: new Date(trade.tradeDate),
  }));

  return [...staticRoutes, ...noteRoutes, ...contributorRoutes, ...tradeRoutes];
}
