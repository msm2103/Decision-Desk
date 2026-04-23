import contributorsData from "@/data/guest-pms/contributors.json";
import tradesData from "@/data/guest-pms/trades.json";
import type { GuestPmContributor, GuestPmTradeIdea } from "@/lib/types";

function isApproved(status: string): boolean {
  return status === "approved";
}

export function getAllGuestPmContributors(): GuestPmContributor[] {
  return contributorsData as GuestPmContributor[];
}

export function getAllGuestPmTrades(): GuestPmTradeIdea[] {
  return tradesData as GuestPmTradeIdea[];
}

export function getApprovedGuestPmContributors(): GuestPmContributor[] {
  return getAllGuestPmContributors().filter((contributor) =>
    isApproved(contributor.moderationStatus),
  );
}

export function getApprovedGuestPmTrades(): GuestPmTradeIdea[] {
  return getAllGuestPmTrades()
    .filter((trade) => isApproved(trade.moderationStatus))
    .sort((a, b) => (a.tradeDate < b.tradeDate ? 1 : -1));
}

export function getApprovedGuestPmContributorBySlug(
  slug: string,
): GuestPmContributor | undefined {
  return getApprovedGuestPmContributors().find((contributor) => contributor.slug === slug);
}

export function getApprovedGuestPmTradesByContributorSlug(
  contributorSlug: string,
): GuestPmTradeIdea[] {
  return getApprovedGuestPmTrades().filter(
    (trade) => trade.contributorSlug === contributorSlug,
  );
}

export function getApprovedGuestPmTradeBySlugs(
  contributorSlug: string,
  ideaSlug: string,
): GuestPmTradeIdea | undefined {
  return getApprovedGuestPmTrades().find(
    (trade) =>
      trade.contributorSlug === contributorSlug && trade.ideaSlug === ideaSlug,
  );
}
