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
            className="public-control w-full rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
          />

          <label className="sr-only" htmlFor="essay-category">
            Filter by category
          </label>
          <select
            id="essay-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="public-control px-4 py-3 text-sm text-foreground"
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
              className="editorial-link group flex flex-col p-6"
            >
              <h2 className="mb-3 font-serif text-lg text-white transition-colors group-hover:text-primary md:text-xl">
                {piece.title}
              </h2>

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
        <div className="rounded-lg border border-border bg-card px-6 py-12 text-center">
          <p className="text-muted-foreground">No essays match these filters.</p>
          <button className="upgrade-text-link mt-2" type="button" onClick={() => { setQuery(""); setCategory(""); document.getElementById("essay-search")?.focus(); }}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
