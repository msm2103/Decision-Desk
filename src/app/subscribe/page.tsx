import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Subscribe",
  description: "Subscribe for an email when Decision Desk publishes a new macro note.",
  path: "/subscribe",
});

export default function SubscribePage() {
  return (
    <Section
      eyebrow="Subscribe"
      title="Email alerts for new notes"
      description="Email-only signup. You will be notified when a new edition is published."
    >
      <div className="card max-w-2xl">
        <SubscribeForm />
      </div>
    </Section>
  );
}
