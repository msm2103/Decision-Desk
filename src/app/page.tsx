import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { getFeaturedNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Decision Desk",
  description:
    "Personal fixed income research notes, market frameworks, and illustrative educational trade case studies.",
  path: "/",
});

export default async function Home() {
  const featuredNotes = await getFeaturedNotes();

  return (
    <>
      <section className="section-space">
        <div className="container-width">
          <div className="max-w-4xl space-y-6">
            <BrandLogo large />
            <h1 className="heading-serif text-4xl md:text-6xl leading-tight">
              Fixed income research notes, market frameworks, and illustrative trade case studies
            </h1>
            <p className="text-lg" style={{ color: "var(--brand-navy-soft)" }}>
              Decision Desk is a personal publication by Mark Martin. It shares
              fixed income research notes, market frameworks, and educational case
              studies intended to clarify thinking around rates, risk, and implementation.
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
            <p>15+ years across hedge funds, insurance asset management, treasury risk, and banking.</p>
            <p>Macro-aware developed-market rates relative value, derivatives, overlays, convexity, and ALM.</p>
            <p>Python, SQL, AI and Bloomberg-driven analytics for repeatable decision process and governance.</p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Featured Notes"
        title="Recent research and frameworks"
        description="Selected notes on macro rates, relative value, and practical implementation ideas."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {featuredNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </Section>

    </>
  );
}
