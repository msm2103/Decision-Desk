import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Decision Desk website and forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section eyebrow="Legal" title="Privacy Policy">
      <div className="card text-slate-700 space-y-4">
        <p>
          We collect personal data that you voluntarily provide through contact forms,
          primarily name, email, organisation, and message details.
        </p>
        <p>
          Contact enquiry data is retained only as needed to respond to requests and
          maintain a basic interaction record.
        </p>
        <p>
          Contact enquiries are used solely to respond to your request and to maintain a
          basic interaction record.
        </p>
        <p>
          We may use lightweight analytics to understand page usage and content engagement.
        </p>
        <p>
          You may request deletion or correction of your personal data by emailing
          info@decisiondesk.co.uk.
        </p>
      </div>
    </Section>
  );
}
