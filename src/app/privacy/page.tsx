import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Decision Desk website, subscriptions, and forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section eyebrow="Legal" title="Privacy Policy">
      <div className="card text-slate-700 space-y-4">
        <p>
          Decision Desk collects personal data that you voluntarily provide through contact
          forms, email correspondence, or the subscription form. This may include your name,
          email address, organisation, and message details.
        </p>
        <p>
          Contact enquiry data is used only to respond to your message, maintain a basic
          correspondence record, and operate the site responsibly.
        </p>
        <p>
          Subscription data is processed through a third-party email provider so that we can
          send alerts when a new note is published. You can remove that data via the unsubscribe
          page, an unsubscribe link in any email, or a direct request to info@decisiondesk.co.uk.
        </p>
        <p>
          Decision Desk does not sell personal data and does not use contact details for
          unrelated marketing campaigns.
        </p>
        <p>
          The site may use lightweight analytics to understand page usage, content engagement,
          and technical performance.
        </p>
        <p>
          Please do not submit confidential, proprietary, market-sensitive, or personal
          financial information through the contact form.
        </p>
        <p>
          You may request deletion or correction of your personal data by emailing
          info@decisiondesk.co.uk.
        </p>
      </div>
    </Section>
  );
}
