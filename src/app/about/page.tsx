import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = buildMetadata({
  title: "About Mark Martin",
  description:
    "Mark Martin writes Decision Desk as a personal macro publication on rates, policy, and market structure.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Mark Martin"
        description="Author of Decision Desk, a personal macro publication."
      >
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Mark Martin is a London-based fixed income portfolio manager. Decision Desk is his personal publication for weekly notes on rates, policy, and market structure.
          </p>
          <p>
            The writing is for professional readers who want a clear argument, sourced evidence, and an honest statement of what would change the view. It is not a live commentary feed, not investment advice, and not a commercial service.
          </p>
          <p>
            Experience spans hedge funds, insurance asset management, treasury risk, banking, and rates derivatives, with a particular focus on developed-market rates and EUR/GBP relative value.
          </p>
        </div>
      </Section>

      <Section eyebrow="Correspondence" title="Contact">
        <div className="card max-w-3xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            For correspondence related to published notes, write to {siteConfig.contactEmail} or use the contact form.
          </p>
          <Link href="/contact" className="btn-secondary w-fit">
            Contact
          </Link>
        </div>
      </Section>
    </>
  );
}
