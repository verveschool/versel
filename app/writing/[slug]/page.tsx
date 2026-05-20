import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatWritingDate, getAllWriting, getWritingBySlug, getWritingSlugs } from "@/lib/writing"
import { MarkdownRenderer } from "@/lib/markdown"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
type WritingPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getWritingSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params

  if (!getWritingSlugs().includes(slug)) {
    return {}
  }

  const piece = getWritingBySlug(slug)

  return {
    title: `${piece.title} | verveschool`,
    description: piece.description,
    authors: [{ name: piece.author }],
    alternates: {
      canonical: `/writing/${piece.slug}`,
    },
    openGraph: {
      title: piece.title,
      description: piece.description,
      type: "article",
      publishedTime: piece.date,
      authors: [piece.author],
    },
  }
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params

  if (!getWritingSlugs().includes(slug)) {
    notFound()
  }

  const piece = getWritingBySlug(slug)
  const relatedPieces = getAllWriting().filter((relatedPiece) => relatedPiece.slug !== piece.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,_rgba(127,139,153,0.16),_transparent_30%),linear-gradient(180deg,_#050608_0%,_#0b0f14_48%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <Link href="/writing" className="mb-10 inline-flex text-sm text-white/55 transition-colors hover:text-primary">
            ← all writing
          </Link>
          <header className="mb-14 border-b border-white/10 pb-10">
            <p className="section-kicker mb-6">{piece.category}</p>
            <h1 className="mb-8 font-serif text-5xl leading-[1.04] tracking-[-0.045em] text-white md:text-7xl">{piece.title}</h1>
            <p className="mb-8 text-xl leading-8 text-white/70">{piece.description}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/45">
              <span>{formatWritingDate(piece.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{piece.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>by {piece.author}</span>
            </div>
          </header>

          <MarkdownRenderer content={piece.content} />
        </article>

        {relatedPieces.length ? (
          <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
            <p className="section-kicker mb-6">keep reading</p>
            <div className="grid gap-4">
              {relatedPieces.map((relatedPiece) => (
                <Link key={relatedPiece.slug} href={`/writing/${relatedPiece.slug}`} className="group border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/60">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/45">{relatedPiece.category}</p>
                  <h2 className="font-serif text-2xl tracking-[-0.02em] text-white transition-colors group-hover:text-primary">{relatedPiece.title}</h2>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  )
}
