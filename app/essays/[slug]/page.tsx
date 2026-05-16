import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatEssayDate, getAllEssays, getEssayBySlug, getEssaySlugs } from "@/lib/essays"
import { MarkdownContent } from "@/lib/markdown"
import { SiteHeader } from "@/components/site-header"

type EssayPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: EssayPageProps): Promise<Metadata> {
  const { slug } = await params

  if (!getEssaySlugs().includes(slug)) {
    return {}
  }

  const essay = getEssayBySlug(slug)

  return {
    title: `${essay.title} | verveschool`,
    description: essay.description,
    authors: [{ name: essay.author }],
    alternates: {
      canonical: `/essays/${essay.slug}`,
    },
    openGraph: {
      title: essay.title,
      description: essay.description,
      type: "article",
      publishedTime: essay.date,
      authors: [essay.author],
    },
  }
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params

  if (!getEssaySlugs().includes(slug)) {
    notFound()
  }

  const essay = getEssayBySlug(slug)
  const relatedEssays = getAllEssays().filter((relatedEssay) => relatedEssay.slug !== essay.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,_rgba(215,178,103,0.16),_transparent_30%),linear-gradient(180deg,_#070707_0%,_#0d0b08_48%,_#050505_100%)]" />

      <SiteHeader />

      <main className="yc-container py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <Link href="/essays" className="mb-10 inline-flex text-sm text-white/55 transition-colors hover:text-primary">
            ← all essays
          </Link>
          <header className="mb-14 border-b border-white/10 pb-10">
            <p className="section-kicker mb-6">{essay.category}</p>
            <h1 className="mb-8 font-serif text-5xl leading-[1.04] tracking-[-0.045em] text-white md:text-7xl">{essay.title}</h1>
            <p className="mb-8 text-xl leading-8 text-white/70">{essay.description}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/45">
              <span>{formatEssayDate(essay.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{essay.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>by {essay.author}</span>
            </div>
          </header>

          <MarkdownContent content={essay.content} />
        </article>

        {relatedEssays.length ? (
          <section className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
            <p className="section-kicker mb-6">keep reading</p>
            <div className="grid gap-4">
              {relatedEssays.map((relatedEssay) => (
                <Link key={relatedEssay.slug} href={`/essays/${relatedEssay.slug}`} className="group border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/60">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/45">{relatedEssay.category}</p>
                  <h2 className="font-serif text-2xl tracking-[-0.02em] text-white transition-colors group-hover:text-primary">{relatedEssay.title}</h2>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
