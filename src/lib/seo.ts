import type { Metadata } from "next";

export const siteConfig = {
  name: "Decision Desk",
  domain: "decisiondesk.co.uk",
  url: "https://decisiondesk.co.uk",
  contactEmail: "info@decisiondesk.co.uk",
  social: {
    linkedin: {
      url: "https://www.linkedin.com/in/mark-martin-931911165",
    },
  },
  description:
    "Mark Martin’s personal macro publication: weekly research notes on rates, policy, and market structure.",
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
