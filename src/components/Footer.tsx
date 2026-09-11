import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--brand-border)", background: "#EBEEF6E6" }}>
      <div className="container-width py-10 space-y-6">
        <BrandLogo small />
        <p className="text-sm max-w-2xl" style={{ color: "var(--brand-navy-soft)" }}>
          Decision Desk is Mark Martin&apos;s personal macro publication. Notes are for general information only. They are not investment advice and not a commercial service.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--brand-navy)" }}>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          <a href={siteConfig.social.linkedin.url} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link href="/subscribe" prefetch={false}>Subscribe</Link>
          <Link href="/unsubscribe" prefetch={false}>Unsubscribe</Link>
          <Link href="/disclaimer" prefetch={false}>Disclaimer</Link>
          <Link href="/privacy" prefetch={false}>Privacy Policy</Link>
          <Link href="/terms" prefetch={false}>Terms</Link>
        </div>
      </div>
    </footer>
  );
}
