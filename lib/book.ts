import fs from "node:fs"
import path from "node:path"

import { parseMarkdownFrontmatter } from "@/lib/frontmatter"

export type BookLanding = {
  title: string
  subtitle: string
  description: string
  author: string
  introduction: string
}

export type BookChapterFrontmatter = {
  title: string
  description: string
  order: string
  part: string
}

export type BookChapter = BookChapterFrontmatter & {
  slug: string
  content: string
  readingTime: string
  chapterNumber: string
}

const bookDirectory = path.join(process.cwd(), "content", "book")
const chapterDirectory = path.join(bookDirectory, "chapters")

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 220))

  return `${minutes} min read`
}

export function getBookLanding(): BookLanding {
  const fullPath = path.join(bookDirectory, "landing.md")
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = parseMarkdownFrontmatter<Omit<BookLanding, "introduction">>({
    source: fileContents,
    requiredFields: ["title", "subtitle", "description", "author"],
    missingFrontmatterMessage: "Book content files must begin with frontmatter.",
    fileLabel: fullPath,
  })

  return {
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    author: data.author,
    introduction: content,
  }
}

export function getBookChapterSlugs(): string[] {
  if (!fs.existsSync(chapterDirectory)) {
    return []
  }

  return fs
    .readdirSync(chapterDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""))
}

export function getBookChapterBySlug(slug: string): BookChapter {
  const fullPath = path.join(chapterDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = parseMarkdownFrontmatter<BookChapterFrontmatter>({
    source: fileContents,
    requiredFields: ["title", "description", "order", "part"],
    missingFrontmatterMessage: "Book content files must begin with frontmatter.",
    fileLabel: slug,
  })

  const chapterOrder = Number(data.order)

  if (!Number.isFinite(chapterOrder)) {
    throw new Error(`Invalid numeric order in book chapter frontmatter: order (${slug})`)
  }

  return {
    title: data.title,
    description: data.description,
    order: data.order,
    part: data.part,
    slug,
    content,
    readingTime: calculateReadingTime(content),
    chapterNumber: String(chapterOrder).padStart(2, "0"),
  }
}

export function getAllBookChapters(): BookChapter[] {
  return getBookChapterSlugs()
    .map((slug) => getBookChapterBySlug(slug))
    .sort((a, b) => Number(a.order) - Number(b.order))
}

export function getAdjacentBookChapters(slug: string): { previousChapter?: BookChapter; nextChapter?: BookChapter } {
  const chapters = getAllBookChapters()
  const currentIndex = chapters.findIndex((chapter) => chapter.slug === slug)

  return {
    previousChapter: currentIndex > 0 ? chapters[currentIndex - 1] : undefined,
    nextChapter: currentIndex >= 0 && currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : undefined,
  }
}
