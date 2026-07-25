"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

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

const VISIBLE_TAG_LIMIT = 12

export function WritingFilter({
  essays,
  allTags,
}: WritingFilterProps) {
  const [query, setQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [selectedCategories, setSelectedCategories] =
    useState<Set<string>>(new Set())
  const [showAllTags, setShowAllTags] = useState(false)

  const allCategories = Array.from(
    new Set(essays.map((essay) => essay.category))
  ).sort()

  const visibleTags = showAllTags
    ? allTags
    : allTags.slice(0, VISIBLE_TAG_LIMIT)

  const hiddenTagCount = allTags.length - visibleTags.length

  const filteredEssays = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return essays.filter((essay) => {
      const matchesQuery =
        normalizedQuery === "" ||
        essay.title.toLowerCase().includes(normalizedQuery) ||
        essay.description.toLowerCase().includes(normalizedQuery)

      const matchesTags =
        selectedTags.size === 0 ||
        (essay.tags &&
          essay.tags.some((tag) => selectedTags.has(tag)))

      const matchesCategory =
        selectedCategories.size === 0 ||
        selectedCategories.has(essay.category)

      return (
        matchesQuery &&
        matchesTags &&
        matchesCategory
      )
    })
  }, [
    essays,
    query,
    selectedTags,
    selectedCategories,
  ])

  const toggleTag = (tag: string) => {
    const next = new Set(selectedTags)

    if (next.has(tag)) {
      next.delete(tag)
    } else {
      next.add(tag)
    }

    setSelectedTags(next)
  }

  const toggleCategory = (category: string) => {
    const next = new Set(selectedCategories)

    if (next.has(category)) {
      next.delete(category)
    } else {
      next.add(category)
    }

    setSelectedCategories(next)
  }

  const clearFilters = () => {
    setQuery("")
    setSelectedTags(new Set())
    setSelectedCategories(new Set())
  }

  const hasActiveFilters =
    query.trim() !== "" ||
    selectedTags.size > 0 ||
    selectedCategories.size > 0

  return (
    <section className="mt-24">
      {/* Search */}

      <div className="mb-8">
        <label
          htmlFor="essay-search"
          className="sr-only"
        >
          Search essays
        </label>

        <input
          id="essay-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search essays by title or topic"
          className="w-full rounded-lg border border-primary/25 bg-primary/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-primary/60"
        />
      </div>

      {/* Filters */}

      <div className="mb-10 space-y-6">
        {allTags.length > 0 && (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-white/45">
                Filter by topic
              </p>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-primary hover:text-primary/80 transition"
                >
                  Clear filters
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {visibleTags.map((tag) => {
                const isSelected =
                  selectedTags.has(tag)

                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    aria-pressed={isSelected}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-primary-foreground border border-primary"
                        : "border border-primary/30 bg-primary/[0.05] text-white/70 hover:border-primary/60 hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                )
              })}

              {!showAllTags &&
                hiddenTagCount > 0 && (
                  <button
                    onClick={() =>
                      setShowAllTags(true)
                    }
                    className="rounded-full px-4 py-2 text-xs font-medium text-white/50 hover:text-white transition"
                  >
                    +{hiddenTagCount} more
                  </button>
                )}

              {showAllTags &&
                allTags.length >
                  VISIBLE_TAG_LIMIT && (
                  <button
                    onClick={() =>
                      setShowAllTags(false)
                    }
                    className="rounded-full px-4 py-2 text-xs font-medium text-white/50 hover:text-white transition"
                  >
                    Show less
                  </button>
                )}
            </div>
          </div>
        )}

        {allCategories.length > 1 && (
          <div>
            <p className="mb-3 text-xs font-medium text-white/45">
              Filter by category
            </p>

            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => {
                const isSelected =
                  selectedCategories.has(category)

                return (
                  <button
                    key={category}
                    onClick={() =>
                      toggleCategory(category)
                    }
                    aria-pressed={isSelected}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-primary-foreground border border-primary"
                        : "border border-primary/30 bg-primary/[0.05] text-white/70 hover:border-primary/60 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {hasActiveFilters && (
          <p className="text-xs text-white/40">
            Showing {filteredEssays.length} of{" "}
            {essays.length} essays
          </p>
        )}
      </div>

      {/* Essays */}

      {filteredEssays.length > 0 ? (
        <div className="space-y-6">
          {filteredEssays.map((piece) => (
            <Link
              key={piece.slug}
              href={`/essays/${piece.slug}`}
              className="group flex flex-col rounded-lg border border-primary/25 bg-primary/[0.05] p-6 shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all duration-200 hover:border-primary hover:bg-primary/20 hover:shadow-[0_12px_48px_rgba(139,109,255,0.2)] hover:outline hover:outline-2 hover:outline-white/20"
            >
              <h3 className="mb-3 font-serif text-lg text-white transition-colors group-hover:text-primary md:text-xl">
                {piece.title}
              </h3>

              <p className="mb-4 flex-1 leading-7 text-white/70">
                {piece.description}
              </p>

              <div className="space-y-3">
                {piece.tags &&
                  piece.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {piece.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full border border-primary/20 bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">
                    {piece.category} ·{" "}
                    {piece.readingTime}
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
            No essays found with the selected
            filters. Try different options or{" "}
            <button
              onClick={clearFilters}
              className="font-medium text-primary hover:text-primary/80"
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
