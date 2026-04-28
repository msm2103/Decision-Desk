import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--brand-border)", background: "#EBEEF6E6" }}>
      <div className="container-width py-10 space-y-6">
        <BrandLogo small />
        <p className="text-sm max-w-2xl" style={{ color: "var(--brand-navy-soft)" }}>
          Personal fixed income research notes, market frameworks, and illustrative case studies.
          Views are personal and for general information only.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--brand-navy)" }}>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          <a href={siteConfig.social.x.url} target="_blank" rel="noreferrer">
            X ({siteConfig.social.x.handle})
          </a>
          <a href={siteConfig.social.instagram.url} target="_blank" rel="noreferrer">
            Instagram ({siteConfig.social.instagram.handle})
          </a>
          <a href={siteConfig.social.linkedin.url} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
