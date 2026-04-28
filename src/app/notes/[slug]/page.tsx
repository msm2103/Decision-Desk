import type { Metadata } from "next";
import { NoteContentsBox } from "@/components/NoteContentsBox";
import { NoteCard } from "@/components/NoteCard";
import { NoteTtsPlayer } from "@/components/NoteTtsPlayer";
import { getAllNotes, getNoteBySlug, getRelatedNotes } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  return {
    title: note.metaTitle ?? note.title,
    description: note.metaDescription ?? note.excerpt,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      title: note.metaTitle ?? note.title,
      description: note.metaDescription ?? note.excerpt,
      type: "article",
      url: `${siteConfig.url}/notes/${note.slug}`,
      images: [
        {
          url: `${siteConfig.url}${note.coverImage}`,
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
    },
  };
}

export default async function NoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  const relatedNotes = await getRelatedNotes(note);

  return (
    <article className="section-space">
      <div className="container-width max-w-7xl">
        <div className="flex items-start gap-8">
          <div className="flex-1 space-y-8 max-w-4xl">
            <div className="card space-y-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                {formatDate(note.publishedAt)} · {note.readingTime}
              </p>
              <h1 className="heading-serif text-4xl md:text-5xl text-slate-900">{note.title}</h1>
              <p className="text-xl text-slate-700">{note.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-300 px-2.5 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {(note.ttsEnabled || note.pdfUrl) ? (
              <div className="grid gap-4 md:grid-cols-2">
                {note.ttsEnabled ? <NoteTtsPlayer title={note.title} text={note.contentHtml.replace(/<[^>]+>/g, " ")} /> : null}
                {note.pdfUrl ? (
                  <div className="card">
                    <h2 className="heading-serif text-2xl mb-2">Download PDF</h2>
                    <p className="text-sm text-slate-600 mb-4">
                      Prefer an offline read? Download the fully formatted PDF version with charts.
                    </p>
                    <a
                      href={note.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-700 transition"
                    >
                      Open PDF
                    </a>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div
              className="card markdown-content"
              dangerouslySetInnerHTML={{ __html: note.contentHtml }}
            />

            {relatedNotes.length > 0 ? (
              <section className="space-y-4">
                <h2 className="heading-serif text-2xl">Related notes</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedNotes.map((entry) => (
                    <NoteCard key={entry.slug} note={entry} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>
          <div className="relative">
            <NoteContentsBox items={note.tableOfContents} />
          </div>
        </div>
      </div>
    </article>
  );
}
