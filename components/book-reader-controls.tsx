"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type ChapterLink = {
  slug: string
  title: string
  chapterNumber: string
  readingTime: string
}

type BookReaderControlsProps = {
  chapters: ChapterLink[]
  activeSlug?: string
  previousHref?: string
  nextHref?: string
}

export function BookProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable <= 0 ? 0 : Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)))
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-px bg-white/10" aria-hidden="true">
      <div className="h-full bg-primary transition-[width] duration-200 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

export function BookKeyboardShortcuts({ previousHref, nextHref }: Pick<BookReaderControlsProps, "previousHref" | "nextHref">) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const isTyping = target?.matches("input, textarea, select, [contenteditable='true']")
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || isTyping) return

      if (event.key === "ArrowLeft" && previousHref) window.location.href = previousHref
      if (event.key === "ArrowRight" && nextHref) window.location.href = nextHref
      if (event.key === "Home") {
        event.preventDefault()
        window.location.href = "/book"
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [previousHref, nextHref])

  return null
}

export function BookSidebar({ chapters, activeSlug }: Pick<BookReaderControlsProps, "chapters" | "activeSlug">) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-40 inline-flex items-center gap-2 border border-white/15 bg-black/90 px-3 py-2 text-sm text-white/85 backdrop-blur md:hidden"
        aria-expanded={open}
        aria-controls="book-sidebar"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
        Chapters
      </button>
      <aside
        id="book-sidebar"
        className={`book-sidebar fixed bottom-0 left-0 top-0 z-30 w-[min(20rem,86vw)] border-r border-white/10 bg-black px-5 py-24 transition-transform duration-200 ease-out md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Book chapters"
      >
        <Link href="/book" className="mb-8 block text-xs uppercase tracking-[0.24em] text-white/45 hover:text-primary">
          Book overview
        </Link>
        <nav className="space-y-2">
          {chapters.map((chapter) => {
            const active = chapter.slug === activeSlug
            return (
              <Link
                key={chapter.slug}
                href={`/book/${chapter.slug}`}
                aria-current={active ? "page" : undefined}
                className={`group relative block border-l px-4 py-3 transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  active
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 text-white/58 hover:border-primary/70 hover:bg-white/[0.035] hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                <span className="mb-1 block text-xs text-primary">{chapter.chapterNumber}</span>
                <span className="block text-sm leading-5">{chapter.title}</span>
                <span className="mt-1 block text-xs text-white/35">{chapter.readingTime}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
      {open ? <button className="fixed inset-0 z-20 bg-black/70 md:hidden" aria-label="Close chapters" onClick={() => setOpen(false)} /> : null}
    </>
  )
}
