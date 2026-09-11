import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Decision Desk about published macro notes or professional correspondence.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Correspondence"
      description="For correspondence related to published notes or professional background."
    >
      <p className="mb-4 max-w-3xl" style={{ color: "var(--brand-navy-soft)" }}>
        Decision Desk is a personal publication, not an advisory business or investment service.
      </p>
      <p className="mb-4 max-w-3xl" style={{ color: "var(--brand-navy-soft)" }}>
        You can use the form below or email {siteConfig.contactEmail}.
      </p>
      <ContactForm />
    </Section>
  );
}
