import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { getAllNotes, getFeaturedNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mark Martin | Decision Desk | Fixed Income Research",
  description:
    "Decision Desk is Mark Martin’s personal fixed income publication, focused on developed-market rates, EUR/GBP relative value, curve strategy, derivatives, ALM, portfolio construction, and systematic investment process.",
  path: "/",
});

export default async function Home() {
  const featuredNotes = await getFeaturedNotes();
  const allNotes = await getAllNotes();
  const featuredCaseStudies = allNotes
    .filter((note) => note.tags.some((tag) => tag.toLowerCase() === "case studies"))
    .slice(0, 2);

  return (
    <>
      <section className="section-space">
        <div className="container-width">
          <div className="max-w-4xl space-y-6">
            <BrandLogo large />
            <p className="text-xs uppercase tracking-[0.14em]" style={{ color: "var(--brand-navy-soft)" }}>
              Mark Martin | Decision Desk
            </p>
            <h1 className="heading-serif text-4xl md:text-6xl leading-tight">
              Fixed income research from a London-based rates portfolio manager
            </h1>
            <p className="text-lg" style={{ color: "var(--brand-navy-soft)" }}>
              Decision Desk is the personal publication of Mark Martin, a senior fixed income portfolio manager focused on developed-market rates, EUR/GBP relative value, curve strategy, derivatives, ALM, and systematic investment process.
            </p>
            <p className="text-lg" style={{ color: "var(--brand-navy-soft)" }}>
              The site publishes research notes, market frameworks, and delayed illustrative case studies on rates, risk, portfolio construction, and implementation. The emphasis is not market noise or live trade calls, but disciplined thinking: how ideas are framed, tested, expressed, risk-managed, and reviewed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/notes" className="btn-primary">
                Read Notes
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-width">
          <div className="card grid md:grid-cols-3 gap-6 text-sm">
            <p>15+ years across hedge funds, insurance asset management, treasury risk, banking, and rates derivatives.</p>
            <p>Developed-market rates focus across EUR and GBP relative value, curves, swaps, swaptions, asset swaps, overlays, convexity, and ALM.</p>
            <p>Python, SQL, AI, spreadsheets, and Bloomberg-led analytics for repeatable research, portfolio diagnostics, and risk communication.</p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Featured Notes"
        title="Featured Notes"
        description="Research notes and frameworks on macro rates, relative value, portfolio construction, and implementation."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {featuredNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Case Studies"
        title="Illustrative Case Studies"
        description="Delayed educational reviews of selected fixed income ideas, focused on thesis, structure, risk, what changed, and lessons learned."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {featuredCaseStudies.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </Section>

      <Section eyebrow="About" title="Research with implementation discipline">
        <div className="card max-w-4xl space-y-4">
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Decision Desk is built around the part of fixed income that sits between macro narrative and actual portfolio construction. The focus is on structure, path dependency, carry, convexity, liquidity, balance-sheet constraints, and the trade-offs that determine whether a market view can be expressed cleanly.
          </p>
        </div>
      </Section>

      <Section eyebrow="Archive" title="A public research archive">
        <div className="card max-w-4xl space-y-4">
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Decision Desk is a place to make market thinking visible: not as advice, not as a product, and not as a live portfolio record, but as a disciplined archive of fixed income research, frameworks, and reflective case studies.
          </p>
          <Link href="/about" className="btn-secondary w-fit">
            About Mark Martin
          </Link>
        </div>
      </Section>
    </>
  );
}
