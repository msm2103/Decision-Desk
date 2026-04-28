import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for Decision Desk publication content.",
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
          Content is published for general information and educational reading.
          It is not investment advice or a personalised recommendation.
        </p>
        <p>
          Redistribution, resale, or repackaging of site content is prohibited
          without written permission.
        </p>
        <p>
          No warranty is provided regarding completeness, timeliness, or fitness
          for any specific objective.
        </p>
        <p>
          We may update these terms from time to time. Continued use of the site constitutes
          acceptance of the latest version.
        </p>
      </div>
    </Section>
  );
}
