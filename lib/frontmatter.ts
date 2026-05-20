export type ParsedFrontmatter<T> = {
  data: T
  content: string
}

type ParseOptions<T extends Record<string, unknown>> = {
  source: string
  requiredFields: readonly (keyof T & string)[]
  missingFrontmatterMessage: string
  fileLabel: string
}

function parseScalar(rawValue: string): string | number | boolean {
  const value = rawValue.trim()

  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1)
  }

  if (value === "true") {
    return true
  }

  if (value === "false") {
    return false
  }

  const numericValue = Number(value)

  if (value.length > 0 && Number.isFinite(numericValue)) {
    return numericValue
  }

  return value
}

function parseFrontmatterBlock(block: string): Record<string, unknown> {
  const data: Record<string, unknown> = {}

  for (const line of block.split(/\r?\n/)) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith("#")) {
      continue
    }

    const separatorIndex = trimmed.indexOf(":")

    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const rawValue = trimmed.slice(separatorIndex + 1)

    data[key] = parseScalar(rawValue)
  }

  return data
}

export function parseMarkdownFrontmatter<T extends Record<string, unknown>>({
  source,
  requiredFields,
  missingFrontmatterMessage,
  fileLabel,
}: ParseOptions<T>): ParsedFrontmatter<T> {
  const normalized = source.replace(/^\uFEFF/, "")

  if (!normalized.startsWith("---\n")) {
    throw new Error(missingFrontmatterMessage)
  }

  const frontmatterStart = 4
  const frontmatterEnd = normalized.indexOf("\n---", frontmatterStart)

  if (frontmatterEnd === -1) {
    throw new Error(missingFrontmatterMessage)
  }

  const frontmatterBlock = normalized.slice(frontmatterStart, frontmatterEnd)
  const bodyStart = normalized.startsWith("\n", frontmatterEnd + 4) ? frontmatterEnd + 5 : frontmatterEnd + 4
  const content = normalized.slice(bodyStart).trim()
  const data = parseFrontmatterBlock(frontmatterBlock)

  for (const field of requiredFields) {
    const value = data[field]

    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(`Missing required frontmatter field: ${field} (${fileLabel})`)
    }
  }

  return {
    data: data as T,
    content,
  }
}
