import Link from "next/link"
import type { ReactNode } from "react"

type MarkdownRendererProps = {
  content: string
  className?: string
}

type InlineToken =
  | { type: "text"; value: string }
  | { type: "strong"; children: InlineToken[] }
  | { type: "code"; value: string }
  | { type: "link"; href: string; children: InlineToken[] }

function parseLink(input: string, start: number): { token: InlineToken; next: number } | null {
  if (input[start] !== "[") {
    return null
  }

  const labelEnd = input.indexOf("]", start + 1)

  if (labelEnd === -1 || input[labelEnd + 1] !== "(") {
    return null
  }

  let index = labelEnd + 2
  let depth = 1

  while (index < input.length && depth > 0) {
    const char = input[index]

    if (char === "(") depth += 1
    if (char === ")") depth -= 1

    index += 1
  }

  if (depth !== 0) {
    return null
  }

  const label = input.slice(start + 1, labelEnd)
  const href = input.slice(labelEnd + 2, index - 1)

  return {
    token: { type: "link", href, children: parseInlineTokens(label) },
    next: index,
  }
}

function parseInlineTokens(input: string): InlineToken[] {
  const tokens: InlineToken[] = []
  let i = 0
  let textBuffer = ""

  const flushText = () => {
    if (textBuffer) {
      tokens.push({ type: "text", value: textBuffer })
      textBuffer = ""
    }
  }

  while (i < input.length) {
    if (input[i] === "`") {
      const end = input.indexOf("`", i + 1)
      if (end !== -1) {
        flushText()
        tokens.push({ type: "code", value: input.slice(i + 1, end) })
        i = end + 1
        continue
      }
    }

    if (input[i] === "*" && input[i + 1] === "*") {
      const end = input.indexOf("**", i + 2)
      if (end !== -1) {
        flushText()
        tokens.push({ type: "strong", children: parseInlineTokens(input.slice(i + 2, end)) })
        i = end + 2
        continue
      }
    }

    const link = parseLink(input, i)
    if (link) {
      flushText()
      tokens.push(link.token)
      i = link.next
      continue
    }

    textBuffer += input[i]
    i += 1
  }

  flushText()
  return tokens
}

function renderInlineTokens(tokens: InlineToken[]): ReactNode[] {
  return tokens.map((token, index) => {
    if (token.type === "text") {
      return token.value
    }

    if (token.type === "strong") {
      return <strong key={`strong-${index}`}>{renderInlineTokens(token.children)}</strong>
    }

    if (token.type === "code") {
      return (
        <code key={`code-${index}`} className="border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[0.9em] text-white">
          {token.value}
        </code>
      )
    }

    const className = "text-primary underline underline-offset-4 transition-colors hover:text-white"

    if (token.href.startsWith("/")) {
      return (
        <Link key={`link-${index}`} href={token.href} className={className}>
          {renderInlineTokens(token.children)}
        </Link>
      )
    }

    return (
      <a key={`link-${index}`} href={token.href} className={className} rel="noreferrer" target="_blank">
        {renderInlineTokens(token.children)}
      </a>
    )
  })
}

function renderInline(content: string) {
  return renderInlineTokens(parseInlineTokens(content))
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const blocks = content.trim().split(/\n{2,}/)

  return (
    <div className={["essay-prose", className].filter(Boolean).join(" ")}>
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return <h2 key={index}>{renderInline(block.replace(/^## /, ""))}</h2>
        }

        if (block.startsWith("### ")) {
          return <h3 key={index}>{renderInline(block.replace(/^### /, ""))}</h3>
        }

        if (block.startsWith("> ")) {
          return <blockquote key={index}>{renderInline(block.replace(/^> /, ""))}</blockquote>
        }

        if (block.split("\n").every((line) => line.startsWith("- "))) {
          return (
            <ul key={index}>
              {block.split("\n").map((line) => (
                <li key={line}>{renderInline(line.replace(/^- /, ""))}</li>
              ))}
            </ul>
          )
        }

        return <p key={index}>{renderInline(block.replace(/\n/g, " "))}</p>
      })}
    </div>
  )
}

export function MarkdownContent({ content, className = "" }: MarkdownRendererProps) {
  return <MarkdownRenderer content={content} className={className} />
}
