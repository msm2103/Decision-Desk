import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { getAllNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fixed Income Research Notes | Decision Desk",
  description:
    "Research notes on developed-market rates, EUR/GBP relative value, curve strategy, fixed income derivatives, ALM, portfolio construction, and systematic analytics.",
  path: "/notes",
});

export default async function NotesPage() {
  const notes = await getAllNotes();
  const publicationNotes = notes.filter(
    (note) => !note.tags.some((tag) => tag.toLowerCase() === "case studies"),
  );
  return (
    <>
      <Section
        eyebrow="Notes"
        title="Fixed income research notes"
        description="Research and frameworks on developed-market rates, EUR/GBP relative value, portfolio construction, derivatives, ALM, and systematic fixed income process."
      >
        <p className="mb-5" style={{ color: "var(--brand-navy-soft)" }}>
          Notes are longer-form pieces focused on market structure, trade design, regime awareness, and implementation discipline. They are written for thoughtful fixed income readers who care less about market noise and more about how decisions are built.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "Rates Relative Value",
            "Curve Strategy",
            "Portfolio Construction",
            "Derivatives & Convexity",
            "ALM & Structural Hedging",
            "Systematic Analytics",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full px-2.5 py-1 text-xs"
              style={{ border: "1px solid var(--brand-border)", color: "var(--brand-navy-soft)", background: "#f8fbff" }}
            >
              {label}
            </span>
          ))}
        </div>
        {publicationNotes.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {publicationNotes.map((note) => (
              <NoteCard key={note.slug} note={note} />
            ))}
          </div>
        ) : (
          <article className="card max-w-3xl">
            <p style={{ color: "var(--brand-navy-soft)" }}>
              Notes will appear here as the archive develops.
            </p>
          </article>
        )}
      </Section>
    </>
  );
}
