import type { Metadata } from "next";

export const siteConfig = {
  name: "Decision Desk",
  domain: "decisiondesk.co.uk",
  url: "https://decisiondesk.co.uk",
  contactEmail: "info@decisiondesk.co.uk",
  social: {
    x: {
      handle: "@decisiondeskx",
      url: "https://x.com/decisiondeskx",
    },
    instagram: {
      handle: "decisiondeskig",
      url: "https://instagram.com/decisiondeskig",
    },
    linkedin: {
      handle: "decision-desk-4a3839403",
      url: "https://www.linkedin.com/in/decision-desk-4a3839403",
    },
  },
  description:
    "Personal fixed income research notes, market frameworks, and illustrative educational trade case studies.",
};

export const defaultOpenGraphImage = {
  url: `${siteConfig.url}/images/brand/logo-trimmed.png`,
  width: 1024,
  height: 576,
  alt: "Decision Desk",
};

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOpenGraphImage.url],
    },
  };
}
