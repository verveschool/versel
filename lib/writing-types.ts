export type WritingFrontmatter = {
  title: string
  description: string
  date: string
  category: string
  author: string
  tags?: string[]
}

export type Writing = WritingFrontmatter & {
  slug: string
  content: string
  readingTime: string
}
