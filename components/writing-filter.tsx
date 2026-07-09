"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { formatWritingDate } from "@/lib/writing-utils"

interface EssayData {
  slug: string
  title: string
  description: string
  date: string
  category: string
  author: string
  tags?: string[]
  readingTime: string
}

interface WritingFilterProps {
  essays: EssayData[]
  allTags: string[]
}

export function WritingFilter({ essays, allTags }: WritingFilterProps) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [selectedAuthors, setSelectedAuthors] = useState<Set<string>>(new Set())

  // Extract unique authors
  const authorsSet = new Set(essays.map((essay) => essay.author))
  const allAuthors = Array.from(authorsSet).sort()

  const filteredEssays = useMemo(() => {
    return essays.filter((essay) => {
      const matchesTags = selectedTags.size === 0 || (Array.isArray(essay.tags) && essay.tags.some((tag) => selectedTags.has(tag)))
      const matchesAuthor = selectedAuthors.size === 0 || selectedAuthors.has(essay.author)
      return matchesTags && matchesAuthor
    })
  }, [essays, selectedTags, selectedAuthors])

  const toggleTag = (tag: string) => {
    const newTags = new Set(selectedTags)
    if (newTags.has(tag)) {
      newTags.delete(tag)
    } else {
      newTags.add(tag)
    }
    setSelectedTags(newTags)
  }

  const toggleAuthor = (author: string) => {
    const newAuthors = new Set(selectedAuthors)
    if (newAuthors.has(author)) {
      newAuthors.delete(author)
    } else {
      newAuthors.add(author)
    }
    setSelectedAuthors(newAuthors)
  }

  const clearFilters = () => {
    setSelectedTags(new Set())
    setSelectedAuthors(new Set())
  }

  const hasActiveFilters = selectedTags.size > 0 || selectedAuthors.size > 0

  return (
    <section className="mx-auto mt-24 max-w-7xl md:mt-32">
      {/* Filters */}
      <div className="mb-16 space-y-8">
        {/* Tag Filter */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Filter by topic
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-white/50 hover:text-white transition"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const isSelected = selectedTags.has(tag)
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary text-primary-foreground border border-primary"
                      : "border border-primary/30 text-white/70 hover:border-primary/60 hover:text-white bg-primary/[0.05]"
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </div>

        {/* Author Filter */}
        {allAuthors.length > 1 && (
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Filter by author
            </p>
            <div className="flex flex-wrap gap-2">
              {allAuthors.map((author) => {
                const isSelected = selectedAuthors.has(author)
                return (
                  <button
                    key={author}
                    onClick={() => toggleAuthor(author)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-primary-foreground border border-primary"
                        : "border border-primary/30 text-white/70 hover:border-primary/60 hover:text-white bg-primary/[0.05]"
                    }`}
                  >
                    {author}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Essays Grid */}
      {filteredEssays.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredEssays.map((piece) => (
            <Link
              key={piece.slug}
              href={`/writing/${piece.slug}`}
              className="group flex flex-col rounded-lg border border-primary/25 bg-primary/[0.05] p-6 shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all duration-200 hover:border-primary hover:bg-primary/20 hover:shadow-[0_12px_48px_rgba(139,109,255,0.2)] hover:outline hover:outline-2 hover:outline-white/20 cursor-pointer"
            >
              <h3 className="mb-3 font-serif text-lg md:text-xl text-white transition-colors group-hover:text-primary">
                {piece.title}
              </h3>
              <p className="mb-4 flex-1 leading-7 text-white/70">
                {piece.description}
              </p>
              <div className="space-y-3">
                {(Array.isArray(piece.tags) && piece.tags.length > 0) && (
                  <div className="flex flex-wrap gap-2">
                    {piece.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary/80 border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">
                    {piece.category} · {piece.readingTime}
                  </span>
                  <span className="text-sm text-primary transition group-hover:translate-x-1">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-primary/20 bg-primary/[0.03] px-6 py-12 text-center">
          <p className="text-white/60">
            No essays found with the selected filters. Try different options or{" "}
            <button
              onClick={clearFilters}
              className="text-primary hover:text-primary/80 transition font-medium"
            >
              clear all filters
            </button>
            .
          </p>
        </div>
      )}
    </section>
  )
}
