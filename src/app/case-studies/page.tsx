import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { getAllNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Illustrative educational trade case studies covering context, thesis, structure, risk, and lessons.",
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
      title="Illustrative educational trade reviews"
      description="Published case studies will appear here. Examples are educational and illustrative only."
    >
      {caseStudies.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudies.map((study) => (
            <NoteCard key={study.slug} note={study} />
          ))}
        </div>
      ) : (
        <article className="card max-w-3xl">
          <p style={{ color: "var(--brand-navy-soft)" }}>
            No case studies are published yet.
          </p>
        </article>
      )}
    </Section>
  );
}
