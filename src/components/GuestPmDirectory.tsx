"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { GuestPmContributor, GuestPmTradeIdea } from "@/lib/types";

type GuestPmDirectoryProps = {
  contributors: GuestPmContributor[];
  trades: GuestPmTradeIdea[];
};

export function GuestPmDirectory({ contributors, trades }: GuestPmDirectoryProps) {
  const [viewMode, setViewMode] = useState<"pm" | "tradeDate">("pm");

  const tradesByContributor = useMemo(() => {
    return contributors.map((contributor) => {
      const submissions = trades.filter(
        (trade) => trade.contributorSlug === contributor.slug,
      );
      return { contributor, submissions };
    });
  }, [contributors, trades]);

  return (
    <div className="space-y-6">
      <div className="card flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
          Toggle directory view
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md px-3 py-1.5 text-sm font-medium"
            onClick={() => setViewMode("pm")}
            style={{
              background: viewMode === "pm" ? "var(--brand-navy)" : "transparent",
              color: viewMode === "pm" ? "#FFFFFF" : "var(--brand-navy-soft)",
              border:
                viewMode === "pm"
                  ? "1px solid var(--brand-navy)"
                  : "1px solid var(--brand-border)",
            }}
          >
            View by PM
          </button>
          <button
            type="button"
            className="rounded-md px-3 py-1.5 text-sm font-medium"
            onClick={() => setViewMode("tradeDate")}
            style={{
              background:
                viewMode === "tradeDate" ? "var(--brand-navy)" : "transparent",
              color: viewMode === "tradeDate" ? "#FFFFFF" : "var(--brand-navy-soft)",
              border:
                viewMode === "tradeDate"
                  ? "1px solid var(--brand-navy)"
                  : "1px solid var(--brand-border)",
            }}
          >
            View by trade date
          </button>
        </div>
      </div>

      {viewMode === "pm" ? (
        <div className="grid gap-4 md:grid-cols-2">
          {tradesByContributor.map(({ contributor, submissions }) => (
            <article key={contributor.id} className="card space-y-4">
              <div>
                <h3 className="heading-serif text-xl">{contributor.displayName}</h3>
                <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
                  {contributor.headline}
                </p>
              </div>
              <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
                {contributor.yearsExperience} years | {contributor.strategyStyle}
              </p>
              <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
                {submissions.length} approved submission{submissions.length === 1 ? "" : "s"}
              </p>
              <div className="flex flex-wrap gap-2">
                {contributor.focusAreas.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-full border px-2 py-1 text-xs"
                    style={{ borderColor: "var(--brand-border)", color: "var(--brand-navy-soft)" }}
                  >
                    {focus}
                  </span>
                ))}
              </div>
              <Link href={`/guest-pms/${contributor.slug}`} className="btn-secondary w-fit">
                View profile
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {trades.map((trade) => (
            <article key={trade.id} className="card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="heading-serif text-xl">{trade.title}</h3>
                <span className="text-xs uppercase tracking-[0.12em]" style={{ color: "var(--brand-navy-soft)" }}>
                  Trade date {trade.tradeDate}
                </span>
              </div>
              <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
                {trade.assetClass} | {trade.market} | {trade.strategyType} | {trade.direction}
              </p>
              <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
                Review Date: {trade.reviewDate} | Status: {trade.status}
              </p>
              <Link
                href={`/guest-pms/${trade.contributorSlug}/ideas/${trade.ideaSlug}`}
                className="btn-secondary w-fit"
              >
                View trade
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
