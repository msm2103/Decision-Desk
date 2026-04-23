export type Note = {
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  contentHtml: string;
};

export type ModerationStatus = "pending" | "approved" | "rejected";

export type GuestPmContributor = {
  id: string;
  slug: string;
  displayName: string;
  headline: string;
  shortBio: string;
  yearsExperience: number;
  focusAreas: string[];
  strategyStyle: string;
  recruiterContactEnabled: boolean;
  moderationStatus: ModerationStatus;
};

export type GuestPmTradeStatus =
  | "active"
  | "exited"
  | "invalidated"
  | "archived";

export type GuestPmTradeIdea = {
  id: string;
  ideaSlug: string;
  contributorSlug: string;
  title: string;
  assetClass: string;
  market: string;
  strategyType: string;
  direction: string;
  entryLevel: string;
  targetLevel: string;
  stopLevel: string;
  riskCapitalPct: number;
  convictionScore: number;
  tradeDate: string;
  reviewDate: string;
  rationale: string;
  catalysts: string;
  invalidation: string;
  status: GuestPmTradeStatus;
  moderationStatus: ModerationStatus;
};
