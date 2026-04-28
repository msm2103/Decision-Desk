import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "General correspondence for Decision Desk notes and case studies.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="General correspondence"
      description={`For general correspondence, complete the form below or email ${siteConfig.contactEmail}.`}
    >
      <ContactForm />
    </Section>
  );
}
