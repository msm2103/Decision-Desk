import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { getFeaturedNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The Decision Room",
  description:
    "Fixed income notes, frameworks, and decision support for serious market participants.",
  path: "/",
});

export default async function Home() {
  const featuredNotes = await getFeaturedNotes();

  return (
    <>
      <section className="section-space">
        <div className="container-width">
          <div className="max-w-4xl space-y-6">
            <BrandLogo />
            <h1 className="heading-serif text-4xl md:text-6xl leading-tight">
              Fixed income notes, frameworks, and decision support for serious market participants
            </h1>
            <p className="text-lg" style={{ color: "var(--brand-navy-soft)" }}>
              The Decision Room is a practitioner-led platform focused on macro fixed
              income, relative value, and market process. It brings together experience
              across hedge funds, insurance ALM, treasury risk, banking, structured
              products, exotics, and developed-market rates to publish thoughtful notes,
              share practical frameworks, and help investors and institutions think more
              clearly about complex fixed income questions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/notes" className="btn-primary">
                Read Field Notes
              </Link>
              <Link href="/work-with-me" className="btn-secondary">
                Work with TDR
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
        eyebrow="Featured practitioner's notes"
        title="Thoughtful notes and market process"
        description="A publication stream focused on macro rates, relative value, ALM, and practical implementation."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {featuredNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Work with TDR"
        title="A second pair of eyes for complex fixed income decisions"
      >
        <div className="card space-y-4 max-w-4xl">
          <ul className="space-y-2 list-disc pl-5" style={{ color: "var(--brand-navy-soft)" }}>
            <li>Where on the curve should you express your duration view?</li>
            <li>Should we extend, reduce, or redesign a structural hedge?</li>
            <li>How should rate exposure be positioned across G4 curves?</li>
            <li>How do we systemise bond RV and build a regime-robust rates portfolio?</li>
          </ul>
          <Link href="/work-with-me" className="btn-secondary w-fit">
            Explore collaboration formats
          </Link>
        </div>
      </Section>

      <Section eyebrow="Stay updated" title="Subscribe for new notes">
        <div className="card max-w-2xl">
          <SubscribeForm compact />
        </div>
      </Section>
    </>
  );
}
