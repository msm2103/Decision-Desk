import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Notice",
  description:
    "Decision Desk is a personal publication and does not provide advisory or portfolio management services.",
  path: "/work-with-me",
});

export default function WorkWithMePage() {
  return (
    <>
      <Section
        eyebrow="Notice"
        title="Decision Desk is a personal publication site"
        description="This site does not offer advisory, consulting, recruitment, or portfolio management services."
      />

      <Section title="General correspondence">
        <div className="card max-w-2xl space-y-4">
          <p className="text-slate-700">
            For questions about published notes or case studies, please use the contact page.
          </p>
          <Link href="/contact" className="btn-primary w-fit">
            Contact
          </Link>
        </div>
      </Section>
    </>
  );
}
