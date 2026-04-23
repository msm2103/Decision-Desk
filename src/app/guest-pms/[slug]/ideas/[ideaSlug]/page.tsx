import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import {
  getApprovedGuestPmContributorBySlug,
  getApprovedGuestPmContributors,
  getApprovedGuestPmTradeBySlugs,
  getApprovedGuestPmTradesByContributorSlug,
} from "@/lib/guestPms";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string; ideaSlug: string }>;
};

export async function generateStaticParams() {
  return getApprovedGuestPmContributors().flatMap((contributor) =>
    getApprovedGuestPmTradesByContributorSlug(contributor.slug).map((trade) => ({
      slug: contributor.slug,
      ideaSlug: trade.ideaSlug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, ideaSlug } = await params;
  const trade = getApprovedGuestPmTradeBySlugs(slug, ideaSlug);

  if (!trade) {
    return buildMetadata({
      title: "Trade Submission Not Found",
      description: "Guest PM trade submission not found.",
      path: `/guest-pms/${slug}/ideas/${ideaSlug}`,
    });
  }

  return buildMetadata({
    title: `${trade.title} | Guest PM`,
    description: trade.rationale,
    path: `/guest-pms/${slug}/ideas/${ideaSlug}`,
  });
}

export default async function GuestPmIdeaPage({ params }: PageProps) {
  const { slug, ideaSlug } = await params;
  const contributor = getApprovedGuestPmContributorBySlug(slug);
  const trade = getApprovedGuestPmTradeBySlugs(slug, ideaSlug);

  if (!contributor || !trade) {
    notFound();
  }

  return (
    <>
      <Section
        eyebrow={trade.title}
        title={`${contributor.displayName} | ${trade.assetClass} | ${trade.status}`}
        description={`Trade Date: ${trade.tradeDate} | Review Date: ${trade.reviewDate}`}
      >
        <div className="card space-y-4">
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Market: {trade.market} | Strategy: {trade.strategyType} | Direction: {trade.direction}
          </p>
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Entry: {trade.entryLevel} | Target: {trade.targetLevel} | Stop: {trade.stopLevel}
          </p>
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Risk Capital: {trade.riskCapitalPct}% | Conviction: {trade.convictionScore}/10
          </p>
        </div>
      </Section>

      <Section eyebrow="Rationale" title="Why this trade was submitted">
        <div className="card space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>{trade.rationale}</p>
          <p>
            <strong>Catalysts:</strong> {trade.catalysts}
          </p>
          <p>
            <strong>Invalidation:</strong> {trade.invalidation}
          </p>
          <Link href={`/guest-pms/${contributor.slug}`} className="btn-secondary w-fit">
            Back to contributor profile
          </Link>
        </div>
      </Section>
    </>
  );
}
