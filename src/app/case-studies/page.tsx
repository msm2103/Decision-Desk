import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Illustrative educational trade case studies covering context, thesis, structure, risk, and lessons.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <Section
      eyebrow="Case Studies"
      title="Illustrative educational trade reviews"
      description="Published case studies will appear here. Examples are educational and illustrative only."
    >
      <article className="card max-w-3xl">
        <p style={{ color: "var(--brand-navy-soft)" }}>
          No case studies are published yet.
        </p>
      </article>
    </Section>
  );
}
