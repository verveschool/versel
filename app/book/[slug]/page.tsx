\import type { Metadata } from "next"
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
    title: `${chapter.title} | Hope Is the Enemy`,
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
        </article>

        <nav className="mx-auto mt-12 grid max-w-[72ch] gap-4 md:grid-cols-2" aria-label="chapter navigation">
          <Link href={previousHref} className="group rounded-lg border border-primary/25 bg-primary/[0.05] p-6 shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.1] hover:shadow-[0_8px_24px_rgba(139,109,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <p className="mb-3 text-sm font-semibold text-primary">← {previousChapter ? "previous" : "overview"}</p>
            <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">{previousChapter?.title ?? "Book landing"}</h2>
          </Link>

          {nextChapter ? (
            <Link href={`/book/${nextChapter.slug}`} className="group rounded-lg border border-primary/25 bg-primary/[0.05] p-6 text-right shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.1] hover:shadow-[0_8px_24px_rgba(139,109,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <p className="mb-3 text-sm font-semibold text-primary">next →</p>
              <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">{nextChapter.title}</h2>
            </Link>
          ) : (
            <Link href="/about#contact" className="group rounded-lg border border-primary/25 bg-primary/[0.05] p-6 text-right shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.1] hover:shadow-[0_8px_24px_rgba(139,109,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <p className="mb-3 text-sm font-semibold text-primary">finished →</p>
              <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">Become dangerous</h2>
            </Link>
          )}
        </nav>
      </main>
    </div>
  )
}
