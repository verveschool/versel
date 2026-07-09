import fs from "node:fs"
import path from "node:path"

import { parseMarkdownFrontmatter } from "@/lib/frontmatter"
import type { WritingFrontmatter, Writing } from "@/lib/writing-types"

export type { WritingFrontmatter, Writing }

const writingDirectory = path.join(process.cwd(), "content", "essays")

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 220))

  return `${minutes} min read`
}

export function getWritingSlugs(): string[] {
  if (!fs.existsSync(writingDirectory)) {
    return []
  }

  return fs
    .readdirSync(writingDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""))
}

export function getWritingBySlug(slug: string): Writing {
  const fullPath = path.join(writingDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = parseMarkdownFrontmatter<WritingFrontmatter>({
    source: fileContents,
    requiredFields: ["title", "description", "date", "category", "author"],
    missingFrontmatterMessage: "Writing files must begin with frontmatter.",
    fileLabel: slug,
  })

  const parsedDate = new Date(data.date)

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid date value in writing frontmatter: date (${slug})`)
  }

  return {
    ...data,
    slug,
    content,
    readingTime: calculateReadingTime(content),
  }
}

export function getAllWriting(): Writing[] {
  return getWritingSlugs()
    .map((slug) => getWritingBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function formatWritingDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date))
}

export function getAllTags(): string[] {
  const allWriting = getAllWriting()
  const tagsSet = new Set<string>()

  allWriting.forEach((piece) => {
    if (piece.tags && Array.isArray(piece.tags)) {
      piece.tags.forEach((tag) => tagsSet.add(tag))
    }
  })

  return Array.from(tagsSet).sort()
}

export function getWritingByTag(tag: string): Writing[] {
  return getAllWriting().filter((piece) => piece.tags?.includes(tag) ?? false)
}
