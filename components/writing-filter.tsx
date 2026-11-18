"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

interface EssayData {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  tags?: string[];
  readingTime: string;
}

interface WritingFilterProps {
  essays: EssayData[];
}

export function WritingFilter({ essays }: WritingFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const categories = useMemo(
    () => [...new Set(essays.map((essay) => essay.category))].sort(),
    [essays],
  );

  const filteredEssays = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return essays.filter((essay) => {
      return (
        (!category || essay.category === category) &&
        (essay.title.toLowerCase().includes(normalizedQuery) ||
          essay.description.toLowerCase().includes(normalizedQuery) ||
          essay.category.toLowerCase().includes(normalizedQuery) ||
          essay.author.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [essays, query, category]);

  return (
    <section className="mt-12">
      <div className="mb-10">
        <label htmlFor="essay-search" className="sr-only">
          Search essays
        </label>

        <div className="essay-search-controls">
          <input
            id="essay-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search essays..."
            className="w-full rounded-lg border border-primary/25 bg-primary/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/60"
          />

          <label className="sr-only" htmlFor="essay-category">
            Filter by category
          </label>
          <select
            id="essay-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border border-primary/25 bg-background px-4 py-3 text-sm text-white"
          >
            <option value="">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p
          role="status"
          aria-live="polite"
          className="mt-3 text-sm text-muted-foreground"
        >
          Showing {filteredEssays.length} of {essays.length} essays
        </p>
      </div>

      {filteredEssays.length > 0 ? (
        <div className="space-y-6">
          {filteredEssays.map((piece) => (
            <Link
              key={piece.slug}
              href={`/essays/${piece.slug}`}
              className="group flex flex-col rounded border border-primary/25 p-6 transition-all duration-200 hover:border-primary hover:bg-primary/20 hover:shadow-[0_12px_48px_rgba(139,109,255,0.2)] hover:outline hover:outline-2 hover:outline-white/20"
            >
              <h3 className="mb-3 font-serif text-lg text-white transition-colors group-hover:text-primary md:text-xl">
                {piece.title}
              </h3>

              <p className="mb-4 flex-1 leading-7 text-white/70">
                {piece.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {piece.category} · {piece.readingTime}
                </span>

                <span className="text-sm text-primary transition group-hover:translate-x-1">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-primary/20 bg-primary/[0.03] px-6 py-12 text-center">
          <p className="text-white/60">No essays found matching your search.</p>
        </div>
      )}
    </section>
  );
}
