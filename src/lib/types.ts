export type Note = {
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  contentHtml: string;
  pdfUrl?: string;
  ttsEnabled?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  tableOfContents: Array<{ id: string; title: string; level: 2 | 3 }>;
};
