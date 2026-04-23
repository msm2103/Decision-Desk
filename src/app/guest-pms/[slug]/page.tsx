import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import {
  getApprovedGuestPmContributorBySlug,
  getApprovedGuestPmContributors,
  getApprovedGuestPmTradesByContributorSlug,
} from "@/lib/guestPms";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getApprovedGuestPmContributors().map((contributor) => ({
    slug: contributor.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const contributor = getApprovedGuestPmContributorBySlug(slug);

  if (!contributor) {
    return buildMetadata({
      title: "Guest PM Not Found",
      description: "Contributor profile not found.",
      path: `/guest-pms/${slug}`,
    });
  }

  return buildMetadata({
    title: `${contributor.displayName} | Guest PM`,
    description: contributor.headline,
    path: `/guest-pms/${slug}`,
  });
}

export default async function GuestPmProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const contributor = getApprovedGuestPmContributorBySlug(slug);

  if (!contributor) {
    notFound();
  }

  const submissions = getApprovedGuestPmTradesByContributorSlug(slug);

  return (
    <>
      <Section
        eyebrow={contributor.displayName}
        title={contributor.headline}
        description={contributor.shortBio}
      >
        <div className="card space-y-4">
          <p style={{ color: "var(--brand-navy-soft)" }}>
            {contributor.yearsExperience} years experience | {contributor.strategyStyle}
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
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Recruiter contact: {contributor.recruiterContactEnabled ? "Enabled" : "Disabled"}
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Published submissions"
        title={`${contributor.displayName} trade ideas`}
      >
        <div className="space-y-4">
          {submissions.map((trade) => (
            <article key={trade.id} className="card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="heading-serif text-xl">{trade.title}</h3>
                <span className="text-xs uppercase tracking-[0.12em]" style={{ color: "var(--brand-navy-soft)" }}>
                  {trade.tradeDate}
                </span>
              </div>
              <p style={{ color: "var(--brand-navy-soft)" }}>
                {trade.assetClass} | {trade.market} | Review Date: {trade.reviewDate}
              </p>
              <Link
                href={`/guest-pms/${trade.contributorSlug}/ideas/${trade.ideaSlug}`}
                className="btn-secondary w-fit"
              >
                Open submission
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
