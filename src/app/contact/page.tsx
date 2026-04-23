import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact The Decision Room for mentoring, market problem-solving, idea review, or collaboration enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Enquiries and collaboration"
      description={`For mentoring, market problem-solving, idea review, tool support, or general enquiries, complete the form below or email ${siteConfig.contactEmail}.`}
    >
      <ContactForm />
    </Section>
  );
}
