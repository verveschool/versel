import fs from "node:fs"
import path from "node:path"

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
  ctaLabel: string
  ctaHref: string
}

export type BookChapter = BookChapterFrontmatter & {
  slug: string
  content: string
  readingTime: string
  chapterNumber: string
}

const bookDirectory = path.join(process.cwd(), "content", "book")
const chapterDirectory = path.join(bookDirectory, "chapters")

function parseFrontmatter(source: string): { frontmatter: Record<string, string>; content: string } {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    throw new Error("Book content files must begin with frontmatter.")
  }

  const frontmatter = match[1].split("\n").reduce<Record<string, string>>((fields, line) => {
    const separatorIndex = line.indexOf(":")

    if (separatorIndex === -1) {
      return fields
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^[\'"]|[\'"]$/g, "")

    fields[key] = value
    return fields
  }, {})

  return {
    frontmatter,
    content: match[2].trim(),
  }
}

function requireFields(frontmatter: Record<string, string>, fields: readonly string[]) {
  for (const field of fields) {
    if (!frontmatter[field]) {
      throw new Error(`Missing required book frontmatter field: ${field}`)
    }
  }
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 220))

  return `${minutes} min read`
}

export function getBookLanding(): BookLanding {
  const fullPath = path.join(bookDirectory, "landing.md")
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { frontmatter, content } = parseFrontmatter(fileContents)
  const requiredFields = ["title", "subtitle", "description", "author"] as const

  requireFields(frontmatter, requiredFields)

  return {
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    description: frontmatter.description,
    author: frontmatter.author,
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
  const { frontmatter, content } = parseFrontmatter(fileContents)
  const requiredFields = ["title", "description", "order", "part", "ctaLabel", "ctaHref"] as const

  requireFields(frontmatter, requiredFields)

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    order: frontmatter.order,
    part: frontmatter.part,
    ctaLabel: frontmatter.ctaLabel,
    ctaHref: frontmatter.ctaHref,
    slug,
    content,
    readingTime: calculateReadingTime(content),
    chapterNumber: String(Number(frontmatter.order)).padStart(2, "0"),
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
