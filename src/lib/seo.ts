import type { Metadata } from "next";

export const siteConfig = {
  name: "The Decision Room",
  domain: "the-decision-room.com",
  url: "https://the-decision-room.com",
  contactEmail: "info@the-decision-room.com",
  social: {
    x: {
      handle: "@decisionroomX",
      url: "https://x.com/decisionroomX",
    },
    instagram: {
      handle: "decisionroomig",
      url: "https://instagram.com/decisionroomig",
    },
    linkedin: {
      handle: "decision-room-4a3839403",
      url: "https://www.linkedin.com/in/decision-room-4a3839403",
    },
  },
  description:
    "Fixed income notes, frameworks, and decision support for serious market participants.",
};

export const defaultOpenGraphImage = {
  url: `${siteConfig.url}/images/brand/logo-trimmed.png`,
  width: 1024,
  height: 576,
  alt: "The Decision Room",
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
