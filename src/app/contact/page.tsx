import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Decision Desk for correspondence related to Mark Martin’s fixed income research notes, case studies, market frameworks, and professional background.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Professional correspondence"
      description="For correspondence related to Decision Desk notes, case studies, market frameworks, or Mark Martin’s professional background."
    >
      <p className="mb-4 max-w-3xl" style={{ color: "var(--brand-navy-soft)" }}>
        Decision Desk is a personal publication, not an advisory business or investment service. Messages are welcome where they relate to published research, fixed income markets, professional background, or general editorial correspondence.
      </p>
      <p className="mb-4 max-w-3xl" style={{ color: "var(--brand-navy-soft)" }}>
        You can use the form below or email {siteConfig.contactEmail}.
      </p>
      <ContactForm />
    </Section>
  );
}
