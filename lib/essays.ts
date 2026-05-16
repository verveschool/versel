import fs from "node:fs"
import path from "node:path"

export type EssayFrontmatter = {
  title: string
  description: string
  date: string
  category: string
  author: string
}

export type Essay = EssayFrontmatter & {
  slug: string
  content: string
  readingTime: string
}

const essaysDirectory = path.join(process.cwd(), "content", "essays")

function parseFrontmatter(source: string): { frontmatter: EssayFrontmatter; content: string } {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    throw new Error("Essay files must begin with frontmatter.")
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
      .replace(/^['\"]|['\"]$/g, "")

    fields[key] = value
    return fields
  }, {})

  const requiredFields = ["title", "description", "date", "category", "author"] as const

  for (const field of requiredFields) {
    if (!frontmatter[field]) {
      throw new Error(`Missing required frontmatter field: ${field}`)
    }
  }

  return {
    frontmatter: frontmatter as EssayFrontmatter,
    content: match[2].trim(),
  }
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 220))

  return `${minutes} min read`
}

export function getEssaySlugs(): string[] {
  if (!fs.existsSync(essaysDirectory)) {
    return []
  }

  return fs
    .readdirSync(essaysDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""))
}

export function getEssayBySlug(slug: string): Essay {
  const fullPath = path.join(essaysDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { frontmatter, content } = parseFrontmatter(fileContents)

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: calculateReadingTime(content),
  }
}

export function getAllEssays(): Essay[] {
  return getEssaySlugs()
    .map((slug) => getEssayBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function formatEssayDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date))
}
