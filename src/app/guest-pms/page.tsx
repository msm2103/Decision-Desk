import { GuestPmDirectory } from "@/components/GuestPmDirectory";
import { Section } from "@/components/Section";
import {
  getApprovedGuestPmContributors,
  getApprovedGuestPmTrades,
} from "@/lib/guestPms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Guest PMs",
  description:
    "Curated external Guest PM profiles and structured trade contributions with review-date tracking and moderated approval workflow.",
  path: "/guest-pms",
});

export default function GuestPmsPage() {
  const contributors = getApprovedGuestPmContributors();
  const trades = getApprovedGuestPmTrades();

  return (
    <>
      <Section
        eyebrow="Guest PMs"
        title="Curated contributor profiles and structured trade submissions"
        description="All contributions are moderated before publication. Add or update submissions in content files, then change moderationStatus to approved to take them live. Every trade includes a review date for follow-up."
      >
        <GuestPmDirectory contributors={contributors} trades={trades} />
      </Section>
    </>
  );
}
