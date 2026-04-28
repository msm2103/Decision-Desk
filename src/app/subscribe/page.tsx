import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Subscribe",
  description: "Subscribe to Decision Desk updates and notes.",
  path: "/subscribe",
});

export default function SubscribePage() {
  return (
    <Section
      eyebrow="Subscribe"
      title="Subscribe for research note updates"
      description="Email-only signup with unsubscribe support."
    >
      <div className="card max-w-2xl">
        <SubscribeForm />
      </div>
    </Section>
  );
}
