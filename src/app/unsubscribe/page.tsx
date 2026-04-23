import { Section } from "@/components/Section";
import { UnsubscribeForm } from "@/components/UnsubscribeForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Unsubscribe",
  description: "Unsubscribe from The Decision Room updates.",
  path: "/unsubscribe",
});

export default function UnsubscribePage() {
  return (
    <Section
      eyebrow="Unsubscribe"
      title="Manage your email preference"
      description="Enter your email to unsubscribe from site updates."
    >
      <div className="card max-w-2xl">
        <UnsubscribeForm />
      </div>
    </Section>
  );
}
