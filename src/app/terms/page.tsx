import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for Decision Desk website and digital tools.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section eyebrow="Legal" title="Terms">
      <div className="card text-slate-700 space-y-4">
        <p>
          By using this website, you agree to these terms and to applicable laws in your
          jurisdiction.
        </p>
        <p>
          Paid tools and digital products are licensed for personal or internal
          organisational use only unless otherwise agreed.
        </p>
        <p>
          Redistribution, resale, repackaging, or public sharing of paid tool content is
          prohibited without written consent.
        </p>
        <p>
          Because products are digital and immediately accessible, refunds are generally not
          offered except where required by law.
        </p>
        <p>
          We may update these terms from time to time. Continued use of the site constitutes
          acceptance of the latest version.
        </p>
      </div>
    </Section>
  );
}
