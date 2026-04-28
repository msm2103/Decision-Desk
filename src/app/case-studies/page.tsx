import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { getAllNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = buildMetadata({
  title: "Fixed Income Case Studies | Decision Desk",
  description:
    "Delayed educational case studies on fixed income trade structure, rates relative value, portfolio construction, hedging, implementation, and lessons learned.",
  path: "/case-studies",
});

export default async function CaseStudiesPage() {
  const notes = await getAllNotes();
  const caseStudies = notes.filter((note) =>
    note.tags.some((tag) => tag.toLowerCase() === "case studies"),
  );

  return (
    <Section
      eyebrow="Case Studies"
      title="Illustrative fixed income case studies"
      description="Delayed educational reviews of selected market ideas, focused on thesis, structure, risk, implementation, and lessons learned."
    >
      <div className="max-w-4xl space-y-3 mb-5" style={{ color: "var(--brand-navy-soft)" }}>
        <p>
          These case studies are not live trade calls or portfolio updates. They are retrospective and illustrative pieces designed to examine how a fixed income idea was framed, why a particular structure may have been chosen, what risks mattered, and what the outcome suggests about process.
        </p>
        <p>
          Each case study is organised around context, thesis, structure, risk factors, what changed, and lessons learned. The aim is to improve decision quality, not to provide instructions to transact.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Curve Expression",
          "Rates Relative Value",
          "Asset Swaps",
          "Swaps & Swaptions",
          "Portfolio Hedging",
          "ALM",
          "Implementation Review",
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
      {caseStudies.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudies.map((study) => (
            <NoteCard key={study.slug} note={study} />
          ))}
        </div>
      ) : (
        <article className="card max-w-3xl">
          <p style={{ color: "var(--brand-navy-soft)" }}>
            Case studies will appear here as delayed educational reviews are added to the archive.
          </p>
        </article>
      )}
    </Section>
  );
}
