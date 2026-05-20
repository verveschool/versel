import fs from "node:fs"
import path from "node:path"

import { parseMarkdownFrontmatter } from "@/lib/frontmatter"

export type WritingFrontmatter = {
  title: string
  description: string
  date: string
  category: string
  author: string
}

export type Writing = WritingFrontmatter & {
  slug: string
  content: string
  readingTime: string
}

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
