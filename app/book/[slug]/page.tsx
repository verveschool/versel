import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { BookKeyboardShortcuts, BookProgressBar, BookSidebar } from "@/components/book-reader-controls"
import { getAdjacentBookChapters, getAllBookChapters, getBookChapterBySlug, getBookChapterSlugs } from "@/lib/book"
import { MarkdownRenderer } from "@/lib/markdown"

const siteUrl = "https://www.verveschool.com"
const bookName = "Hope Is the Enemy"

const publisherJsonLd = {
  "@type": "Organization",
  name: "Verveschool",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
}

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
    openGraph: { title: chapter.title, description: chapter.description, type: "article", url: `/book/${chapter.slug}` },
  }
}

export default async function BookChapterPage({ params }: BookChapterPageProps) {
  const { slug } = await params

  if (!getBookChapterSlugs().includes(slug)) notFound()

  const chapter = getBookChapterBySlug(slug)
  const canonicalUrl = `${siteUrl}/book/${chapter.slug}`
  const chapterJsonLd = {
    "@context": "https://schema.org",
    "@type": "Chapter",
    name: chapter.title,
    headline: chapter.title,
    description: chapter.description,
    position: Number(chapter.order),
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    isPartOf: {
      "@type": "Book",
      name: bookName,
    },
    publisher: publisherJsonLd,
  }
  const chapters = getAllBookChapters()
  const { previousChapter, nextChapter } = getAdjacentBookChapters(slug)
  const previousHref = previousChapter ? `/book/${previousChapter.slug}` : "/book"
  const nextHref = nextChapter ? `/book/${nextChapter.slug}` : undefined

  return (
    <div className="book-shell min-h-screen bg-background text-foreground">
      <Script
        id={`book-chapter-jsonld-${chapter.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chapterJsonLd) }}
      />
      <BookProgressBar />
      <BookKeyboardShortcuts previousHref={previousHref} nextHref={nextHref} />
      <BookSidebar chapters={chapters} activeSlug={chapter.slug} />

      <main id="main-content" tabIndex={-1} className="book-reading-main px-5 py-24 md:ml-80 md:px-12 lg:px-16">
        <article className="mx-auto max-w-[72ch]">
          <Link href="/book" className="mb-12 inline-flex text-sm text-white/50 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            ← chapter list
          </Link>
          <header className="mb-16 border-b border-white/10 pb-12">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>Ch {chapter.chapterNumber}</span>
              <span aria-hidden="true">·</span>
              <span>Hope Is the Enemy</span>
              <span aria-hidden="true">·</span>
              <span>{chapter.readingTime.replace(' read', '')}</span>
            </div>
            <h1 className="mb-8 max-w-[12ch] text-balance font-serif text-white">{chapter.title}</h1>
            <p className="max-w-2xl text-xl leading-9 text-white/68">{chapter.description}</p>
          </header>

          <MarkdownRenderer content={chapter.content} className="book-prose" />
        </article>

        <nav className="mx-auto mt-12 grid max-w-[72ch] gap-4 md:grid-cols-2" aria-label="chapter navigation">
          <Link href={previousHref} className="editorial-link group p-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <p className="mb-3 text-sm font-semibold text-primary">← {previousChapter ? "previous" : "overview"}</p>
            <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">{previousChapter?.title ?? "Book landing"}</h2>
          </Link>

          {nextChapter ? (
            <Link href={`/book/${nextChapter.slug}`} className="editorial-link group p-6 text-right transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <p className="mb-3 text-sm font-semibold text-primary">next →</p>
              <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">{nextChapter.title}</h2>
            </Link>
          ) : (
            <Link href="https://wa.me/917042873035" className="editorial-link group p-6 text-right transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <p className="mb-3 text-sm font-semibold text-primary">finished →</p>
              <h2 className="font-serif text-lg text-white transition-colors group-hover:text-primary">Become dangerous</h2>
            </Link>
          )}
        </nav>
      </main>
    </div>
  )
}
