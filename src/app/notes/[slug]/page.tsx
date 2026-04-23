import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { NoteCard } from "@/components/NoteCard";
import { SubscribeForm } from "@/components/SubscribeForm";
import { getAllNotes, getNoteBySlug, getRelatedNotes } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      title: note.title,
      description: note.excerpt,
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
      <div className="container-width max-w-4xl space-y-8">
        <div className="space-y-4">
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

        <Image
          src={note.coverImage}
          alt={note.title}
          width={1200}
          height={675}
          className="rounded-xl border border-slate-200"
        />

        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: note.contentHtml }}
        />

        <div className="card">
          <h2 className="heading-serif text-2xl mb-2">Subscribe for future notes</h2>
          <SubscribeForm compact />
          <p className="text-xs text-slate-500 mt-2">
            Prefer to unsubscribe? Use the{" "}
            <Link href="/unsubscribe" className="underline">
              unsubscribe page
            </Link>
            .
          </p>
        </div>

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
    </article>
  );
}
