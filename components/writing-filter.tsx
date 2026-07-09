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

  const filteredEssays = useMemo(() => {
    if (selectedTags.size === 0) {
      return essays
    }

    return essays.filter((essay) => {
      if (!Array.isArray(essay.tags)) return false
      return essay.tags.some((tag) => selectedTags.has(tag))
    })
  }, [essays, selectedTags])

  const toggleTag = (tag: string) => {
    const newTags = new Set(selectedTags)
    if (newTags.has(tag)) {
      newTags.delete(tag)
    } else {
      newTags.add(tag)
    }
    setSelectedTags(newTags)
  }

  const clearFilters = () => {
    setSelectedTags(new Set())
  }

  return (
    <section className="mx-auto mt-24 max-w-[760px] md:mt-32">
      {/* Tag Filter */}
      <div className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Filter by topic
          </p>
          {selectedTags.size > 0 && (
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
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
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

      {/* Essays Grid */}
      {filteredEssays.length > 0 ? (
        <div className="grid gap-4 border-t border-primary/20">
          {filteredEssays.map((piece) => (
            <Link
              key={piece.slug}
              href={`/writing/${piece.slug}`}
              className="group rounded-lg border border-primary/25 bg-primary/[0.05] px-6 py-8 shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all hover:border-primary/50 hover:bg-primary/[0.1] hover:shadow-[0_8px_24px_rgba(139,109,255,0.12)]"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex-1">
                  <h3 className="mb-3 font-serif text-xl text-white transition-colors group-hover:text-primary">
                    {piece.title}
                  </h3>
                  <p className="mb-4 leading-7 text-white/70">
                    {piece.description}
                  </p>
                  {(Array.isArray(piece.tags) && piece.tags.length > 0) && (
                    <div className="mb-4 flex flex-wrap gap-2">
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
                  <p className="text-xs text-white/50">
                    {formatWritingDate(piece.date)} · {piece.category} · {piece.readingTime}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-primary transition group-hover:translate-x-1">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-primary/20 bg-primary/[0.03] px-6 py-12 text-center">
          <p className="text-white/60">
            No essays found with the selected tags. Try different filters or{" "}
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
