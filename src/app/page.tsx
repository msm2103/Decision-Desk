import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { getAllNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = buildMetadata({
  title: "Mark Martin | Decision Desk | Macro Notes",
  description:
    "Decision Desk is Mark Martin’s personal publication for weekly macro research notes on rates, policy, and market structure.",
  path: "/",
});

export default async function Home() {
  const notes = await getAllNotes();
  const latest = notes[0];
  const recent = notes.slice(1, 4);

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
              Weekly macro notes
            </h1>
            <p className="text-lg" style={{ color: "var(--brand-navy-soft)" }}>
              Decision Desk is the personal publication of Mark Martin. It is the public home for notes on rates, policy, and market structure, written for professional readers and published every week or so.
            </p>
            <p className="text-lg" style={{ color: "var(--brand-navy-soft)" }}>
              The archive is the product. Subscribe if you want an email when a new note is published.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/notes" className="btn-primary">
                Browse notes
              </Link>
              <Link href="/subscribe" className="btn-secondary">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {latest ? (
        <Section
          eyebrow="Latest"
          title="Latest note"
          description="The most recent edition."
        >
          <div className="max-w-3xl">
            <NoteCard note={latest} />
          </div>
        </Section>
      ) : (
        <Section
          eyebrow="Archive"
          title="No notes yet"
          description="The first weekly edition will appear here when it is published."
        >
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Until then, you can subscribe for an email alert.
          </p>
        </Section>
      )}

      {recent.length > 0 ? (
        <Section
          eyebrow="Recent"
          title="Earlier editions"
          description="Previous weekly notes."
        >
          <div className="grid md:grid-cols-3 gap-4">
            {recent.map((note) => (
              <NoteCard key={note.slug} note={note} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section
        eyebrow="Subscribe"
        title="Email alerts for new notes"
        description="A short notice when a new edition is published. Unsubscribe at any time."
      >
        <div className="card max-w-2xl">
          <SubscribeForm />
        </div>
      </Section>
    </>
  );
}
