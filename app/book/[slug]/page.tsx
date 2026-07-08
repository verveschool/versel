import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BookKeyboardShortcuts, BookProgressBar, BookSidebar } from "@/components/book-reader-controls"
import { getAdjacentBookChapters, getAllBookChapters, getBookChapterBySlug, getBookChapterSlugs } from "@/lib/book"
import { MarkdownRenderer } from "@/lib/markdown"

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

  if (!getBookChapterSlugs().includes(slug)) return {}

  const chapter = getBookChapterBySlug(slug)

  return {
    title: `${chapter.title} | The Selling Better Field Guide`,
    description: chapter.description,
    alternates: { canonical: `/book/${chapter.slug}` },
    openGraph: { title: chapter.title, description: chapter.description, type: "article" },
  }
}

export default async function BookChapterPage({ params }: BookChapterPageProps) {
  const { slug } = await params

  if (!getBookChapterSlugs().includes(slug)) notFound()

  const chapter = getBookChapterBySlug(slug)
  const chapters = getAllBookChapters()
  const { previousChapter, nextChapter } = getAdjacentBookChapters(slug)
  const previousHref = previousChapter ? `/book/${previousChapter.slug}` : "/book"
  const nextHref = nextChapter ? `/book/${nextChapter.slug}` : undefined

  return (
    <div className="book-shell min-h-screen bg-black text-white">
      <BookProgressBar />
      <BookKeyboardShortcuts previousHref={previousHref} nextHref={nextHref} />
      <BookSidebar chapters={chapters} activeSlug={chapter.slug} />

      <main className="book-reading-main px-5 py-24 md:ml-80 md:px-12 lg:px-16">
        <article className="mx-auto max-w-[72ch] animate-in fade-in slide-in-from-bottom-3 duration-300">
          <Link href="/book" className="mb-12 inline-flex text-sm text-white/50 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            ← chapter list
          </Link>
          <header className="mb-16 border-b border-white/10 pb-12">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/45">
              <span>chapter {chapter.chapterNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{chapter.part}</span>
              <span aria-hidden="true">·</span>
              <span>{chapter.readingTime}</span>
            </div>
            <h1 className="mb-8 max-w-[12ch] text-balance font-serif text-white">{chapter.title}</h1>
            <p className="max-w-2xl text-xl leading-9 text-white/68">{chapter.description}</p>
          </header>

          <MarkdownRenderer content={chapter.content} className="book-prose" />

          <section className="mt-20 border border-primary/30 bg-primary/[0.07] p-8">
            <h2 className="mb-4 font-serif text-2xl text-white">Use this chapter inside a real sales conversation.</h2>
            <p className="mb-6 text-white/68">
              Bring the ideas into a buyer conversation, coaching session, pipeline review, or contact conversation with VerveSchool.
            </p>
            <Link href={chapter.ctaHref} className="text-sm font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              {chapter.ctaLabel} →
            </Link>
          </section>
        </article>

        <nav className="mx-auto mt-12 grid max-w-[72ch] gap-4 md:grid-cols-2" aria-label="chapter navigation">
          <Link href={previousHref} className="group border border-white/10 bg-white/[0.025] p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <p className="mb-3 text-sm text-white/45">← {previousChapter ? "previous" : "overview"}</p>
            <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">{previousChapter?.title ?? "Book landing"}</h2>
          </Link>

          {nextChapter ? (
            <Link href={`/book/${nextChapter.slug}`} className="group border border-white/10 bg-white/[0.025] p-6 text-right transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <p className="mb-3 text-sm text-white/45">next →</p>
              <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">{nextChapter.title}</h2>
            </Link>
          ) : (
            <Link href="/partners" className="group border border-white/10 bg-white/[0.025] p-6 text-right transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <p className="mb-3 text-sm text-white/45">finished →</p>
              <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">Keep selling better</h2>
            </Link>
          )}
        </nav>
      </main>
    </div>
  )
}
