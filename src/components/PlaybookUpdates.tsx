"use client";

import { useState } from "react";

type PlaybookUpdate = {
  date: string;
  title: string;
  summary: string;
  positions: string[];
  performance: string;
  notes: string;
};

const updates: PlaybookUpdate[] = [
  {
    date: "2026-04-21",
    title: "Duration Re-risking, Selective Curve Steepener",
    summary:
      "Risk was added gradually in the intermediate sector after a sharp rates backup, while keeping optionality through modest steepener exposure.",
    positions: [
      "Added selective long duration in intermediate maturities",
      "Maintained small 2s10s steepener bias",
      "Kept tactical hedges against policy surprise risk",
    ],
    performance: "+0.42% month-to-date (illustrative placeholder)",
    notes:
      "Replace this entry with your latest live update. Keep the structure so readers can scan positioning, performance, and rationale quickly.",
  },
  {
    date: "2026-04-08",
    title: "Carry-Focused Neutral Stance",
    summary:
      "Portfolio stayed close to neutral duration while emphasizing carry and roll opportunities in liquid curve segments.",
    positions: [
      "Reduced directional duration to near neutral",
      "Rotated into higher carry relative value expressions",
      "Limited gross risk ahead of event-heavy calendar",
    ],
    performance: "+0.18% for period (illustrative placeholder)",
    notes: "Use this section for brief market context and key decision drivers.",
  },
  {
    date: "2026-03-27",
    title: "Defensive Convexity Overlay",
    summary:
      "Introduced downside convexity to protect against repricing risk while preserving upside from core relative value positions.",
    positions: [
      "Added convexity through options overlay",
      "Trimmed crowded directional risk",
      "Retained preferred cross-market relative value sleeves",
    ],
    performance: "-0.07% for period (illustrative placeholder)",
    notes: "Add attribution detail here if you want readers to track process consistency.",
  },
];

function UpdateContent({ update }: { update: PlaybookUpdate }) {
  return (
    <div className="space-y-4">
      <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
        {update.summary}
      </p>
      <div>
        <p className="text-xs uppercase tracking-[0.12em]" style={{ color: "var(--brand-navy-soft)" }}>
          Positions
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--brand-navy-soft)" }}>
          {update.positions.map((position) => (
            <li key={position}>{position}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm font-medium" style={{ color: "var(--brand-navy-strong)" }}>
        Performance: {update.performance}
      </p>
      <p className="text-sm" style={{ color: "var(--brand-navy-soft)" }}>
        {update.notes}
      </p>
    </div>
  );
}

export function PlaybookUpdates() {
  const [expandAll, setExpandAll] = useState(false);

  const latest = updates[0];
  const history = updates.slice(1);

  return (
    <div className="space-y-5">
      <article className="card space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-xs uppercase tracking-[0.14em]" style={{ color: "var(--brand-navy-soft)" }}>
            Latest update
          </p>
          <time className="text-xs uppercase tracking-[0.12em]" style={{ color: "var(--brand-navy-soft)" }}>
            {latest.date}
          </time>
        </div>
        <h3 className="heading-serif text-2xl">{latest.title}</h3>
        <UpdateContent update={latest} />
      </article>

      <div className="flex items-center justify-between">
        <h3 className="heading-serif text-2xl">Previous updates</h3>
        <button
          type="button"
          onClick={() => setExpandAll((current) => !current)}
          className="rounded-md border px-3 py-1 text-sm"
          style={{ borderColor: "var(--brand-border)", color: "var(--brand-navy-strong)" }}
        >
          {expandAll ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-3">
        {history.map((update) => (
          <details key={update.date} open={expandAll} className="card">
            <summary className="cursor-pointer list-none select-none">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="heading-serif text-xl">{update.title}</h4>
                <time className="text-xs uppercase tracking-[0.12em]" style={{ color: "var(--brand-navy-soft)" }}>
                  {update.date}
                </time>
              </div>
            </summary>
            <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--brand-border)" }}>
              <UpdateContent update={update} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
