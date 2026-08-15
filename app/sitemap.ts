import type { MetadataRoute } from "next"

import { getBookChapterSlugs } from "@/lib/book"
import { getWritingSlugs } from "@/lib/writing"

const baseUrl = "https://www.verveschool.com"

function absoluteUrl(pathname: string): string {
  return new URL(pathname, baseUrl).toString()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/partners"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/people"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/essays"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/book"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const essayRoutes: MetadataRoute.Sitemap = getWritingSlugs().map((slug) => ({
    url: absoluteUrl(`/essays/${slug}`),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const bookChapterRoutes: MetadataRoute.Sitemap = getBookChapterSlugs().map((slug) => ({
    url: absoluteUrl(`/book/${slug}`),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...essayRoutes, ...bookChapterRoutes]
}
