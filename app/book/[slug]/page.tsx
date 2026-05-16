import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAdjacentBookChapters, getAllBookChapters, getBookChapterBySlug, getBookChapterSlugs } from "@/lib/book"
import { MarkdownContent } from "@/lib/markdown"

type BookChapterPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getBookChapterSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BookChapterPageProps): Promise<Metadata> {
  const { slug } = await params

  if (!getBookChapterSlugs().includes(slug)) {
    return {}
  }

  const chapter = getBookChapterBySlug(slug)

  return {
    title: `${chapter.title} | The Sales Talent Operating System`,
    description: chapter.description,
    alternates: {
      canonical: `/book/${chapter.slug}`,
    },
    openGraph: {
      title: chapter.title,
      description: chapter.description,
      type: "article",
    },
  }
}

export default async function BookChapterPage({ params }: BookChapterPageProps) {
  const { slug } = await params

  if (!getBookChapterSlugs().includes(slug)) {
    notFound()
  }

  const chapter = getBookChapterBySlug(slug)
  const chapters = getAllBookChapters()
  const { previousChapter, nextChapter } = getAdjacentBookChapters(slug)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,_rgba(215,178,103,0.16),_transparent_30%),linear-gradient(180deg,_#070707_0%,_#0d0b08_48%,_#050505_100%)]" />

      <SiteHeader />

      <main className="yc-container py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <Link href="/book" className="mb-10 inline-flex text-sm text-white/55 transition-colors hover:text-primary">
            ← book landing
          </Link>
          <header className="mb-14 border-b border-white/10 pb-10">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/45">
              <span className="section-kicker">chapter {chapter.chapterNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{chapter.part}</span>
              <span aria-hidden="true">·</span>
              <span>{chapter.readingTime}</span>
            </div>
            <h1 className="mb-8 font-serif text-5xl leading-[1.04] tracking-[-0.045em] text-white md:text-7xl">{chapter.title}</h1>
            <p className="text-xl leading-8 text-white/70">{chapter.description}</p>
          </header>

          <MarkdownContent content={chapter.content} className="book-prose" />

          <section className="mt-16 border border-primary/30 bg-primary/10 p-8">
            <p className="section-kicker mb-4">put it to work</p>
            <h2 className="mb-4 font-serif text-3xl tracking-[-0.02em] text-white">Use this chapter inside a real hiring loop.</h2>
            <p className="mb-6 text-white/70">
              Bring the ideas into a partner calibration, candidate application, or contact conversation with verveschool.
            </p>
            <Link href={chapter.ctaHref} className="text-sm font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:text-white">
              {chapter.ctaLabel} →
            </Link>
          </section>
        </article>

        <nav className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2" aria-label="chapter navigation">
          {previousChapter ? (
            <Link href={`/book/${previousChapter.slug}`} className="group border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/60">
              <p className="mb-3 text-sm text-white/45">← previous</p>
              <h2 className="font-serif text-2xl tracking-[-0.02em] text-white transition-colors group-hover:text-primary">{previousChapter.title}</h2>
            </Link>
          ) : (
            <Link href="/book" className="group border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/60">
              <p className="mb-3 text-sm text-white/45">← overview</p>
              <h2 className="font-serif text-2xl tracking-[-0.02em] text-white transition-colors group-hover:text-primary">Book landing</h2>
            </Link>
          )}

          {nextChapter ? (
            <Link href={`/book/${nextChapter.slug}`} className="group border border-white/10 bg-white/[0.03] p-6 text-right transition-colors hover:border-primary/60">
              <p className="mb-3 text-sm text-white/45">next →</p>
              <h2 className="font-serif text-2xl tracking-[-0.02em] text-white transition-colors group-hover:text-primary">{nextChapter.title}</h2>
            </Link>
          ) : (
            <Link href="/partners" className="group border border-white/10 bg-white/[0.03] p-6 text-right transition-colors hover:border-primary/60">
              <p className="mb-3 text-sm text-white/45">finished →</p>
              <h2 className="font-serif text-2xl tracking-[-0.02em] text-white transition-colors group-hover:text-primary">Partner with verveschool</h2>
            </Link>
          )}
        </nav>

        <section className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-10">
          <p className="section-kicker mb-6">all chapters</p>
          <div className="grid gap-3">
            {chapters.map((bookChapter) => (
              <Link
                key={bookChapter.slug}
                href={`/book/${bookChapter.slug}`}
                className={`flex items-center justify-between gap-4 border p-4 transition-colors hover:border-primary/60 ${
                  bookChapter.slug === chapter.slug ? "border-primary/50 bg-primary/10" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <span className="text-sm text-primary">{bookChapter.chapterNumber}</span>
                <span className="flex-1 text-white/80">{bookChapter.title}</span>
                <span className="text-sm text-white/40">{bookChapter.readingTime}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
