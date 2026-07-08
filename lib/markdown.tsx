import Link from "next/link"
import type { ReactNode } from "react"

type MarkdownRendererProps = {
  content: string
  className?: string
}

type InlineToken =
  | { type: "text"; value: string }
  | { type: "strong"; children: InlineToken[] }
  | { type: "em"; children: InlineToken[] }
  | { type: "code"; value: string }
  | { type: "link"; href: string; children: InlineToken[] }
  | { type: "image"; src: string; alt: string }

function parseInlineTokens(input: string): InlineToken[] {
  const tokens: InlineToken[] = []
  let i = 0
  let textBuffer = ""
  const flushText = () => {
    if (textBuffer) tokens.push({ type: "text", value: textBuffer })
    textBuffer = ""
  }

  while (i < input.length) {
    if (input[i] === "!" && input[i + 1] === "[") {
      const labelEnd = input.indexOf("]", i + 2)
      if (labelEnd !== -1 && input[labelEnd + 1] === "(") {
        const hrefEnd = input.indexOf(")", labelEnd + 2)
        if (hrefEnd !== -1) {
          flushText()
          tokens.push({ type: "image", alt: input.slice(i + 2, labelEnd), src: input.slice(labelEnd + 2, hrefEnd) })
          i = hrefEnd + 1
          continue
        }
      }
    }

    if (input[i] === "[") {
      const labelEnd = input.indexOf("]", i + 1)
      if (labelEnd !== -1 && input[labelEnd + 1] === "(") {
        const hrefEnd = input.indexOf(")", labelEnd + 2)
        if (hrefEnd !== -1) {
          flushText()
          tokens.push({ type: "link", href: input.slice(labelEnd + 2, hrefEnd), children: parseInlineTokens(input.slice(i + 1, labelEnd)) })
          i = hrefEnd + 1
          continue
        }
      }
    }

    if (input[i] === "`") {
      const end = input.indexOf("`", i + 1)
      if (end !== -1) {
        flushText()
        tokens.push({ type: "code", value: input.slice(i + 1, end) })
        i = end + 1
        continue
      }
    }

    if (input.startsWith("**", i)) {
      const end = input.indexOf("**", i + 2)
      if (end !== -1) {
        flushText()
        tokens.push({ type: "strong", children: parseInlineTokens(input.slice(i + 2, end)) })
        i = end + 2
        continue
      }
    }

    if (input[i] === "*" && input[i + 1] !== " ") {
      const end = input.indexOf("*", i + 1)
      if (end !== -1) {
        flushText()
        tokens.push({ type: "em", children: parseInlineTokens(input.slice(i + 1, end)) })
        i = end + 1
        continue
      }
    }

    textBuffer += input[i]
    i += 1
  }

  flushText()
  return tokens
}

function renderInlineTokens(tokens: InlineToken[]): ReactNode[] {
  return tokens.map((token, index) => {
    if (token.type === "text") return token.value
    if (token.type === "strong") return <strong key={index}>{renderInlineTokens(token.children)}</strong>
    if (token.type === "em") return <em key={index}>{renderInlineTokens(token.children)}</em>
    if (token.type === "code") return <code key={index}>{token.value}</code>
    if (token.type === "image") {
      return <img key={index} src={token.src} alt={token.alt} className="my-10 h-auto w-full border border-white/10 object-cover" loading="lazy" decoding="async" />
    }

    const className = "text-primary underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    return token.href.startsWith("/") ? (
      <Link key={index} href={token.href} className={className}>{renderInlineTokens(token.children)}</Link>
    ) : (
      <a key={index} href={token.href} className={className} rel="noreferrer" target="_blank">{renderInlineTokens(token.children)}</a>
    )
  })
}

function renderInline(content: string) {
  return renderInlineTokens(parseInlineTokens(content))
}

function renderTable(block: string, key: number) {
  const rows = block.trim().split("\n").map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()))
  const [head, , ...body] = rows
  return (
    <div key={key} className="my-10 overflow-x-auto border border-white/10">
      <table>
        <thead><tr>{head.map((cell) => <th key={cell}>{renderInline(cell)}</th>)}</tr></thead>
        <tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{renderInline(cell)}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const blocks = content.trim().split(/\n{2,}/)

  return (
    <div className={["essay-prose", className].filter(Boolean).join(" ")}>
      {blocks.map((block, index) => {
        if (/^```/.test(block)) {
          const lines = block.split("\n")
          const language = lines[0].replace("```", "").trim()
          const code = lines.slice(1).join("\n").replace(/```$/, "")
          return <pre key={index} data-language={language || undefined}><code>{code}</code></pre>
        }
        if (/^\|.+\|\n\|[\s:-|]+\|/.test(block)) return renderTable(block, index)
        if (/^---+$/.test(block.trim())) return <hr key={index} />
        if (block.startsWith("# ")) return <h1 key={index}>{renderInline(block.replace(/^# /, ""))}</h1>
        if (block.startsWith("## ")) return <h2 key={index}>{renderInline(block.replace(/^## /, ""))}</h2>
        if (block.startsWith("### ")) return <h3 key={index}>{renderInline(block.replace(/^### /, ""))}</h3>
        if (block.startsWith("> ")) return <blockquote key={index}>{renderInline(block.split("\n").map((line) => line.replace(/^> ?/, "")).join(" "))}</blockquote>
        if (block.split("\n").every((line) => /^[-*] /.test(line))) return <ul key={index}>{block.split("\n").map((line) => <li key={line}>{renderInline(line.replace(/^[-*] /, ""))}</li>)}</ul>
        if (block.split("\n").every((line) => /^\d+\. /.test(line))) return <ol key={index}>{block.split("\n").map((line) => <li key={line}>{renderInline(line.replace(/^\d+\. /, ""))}</li>)}</ol>
        return <p key={index}>{renderInline(block.replace(/\n/g, " "))}</p>
      })}
    </div>
  )
}

export function MarkdownContent({ content, className = "" }: MarkdownRendererProps) {
  return <MarkdownRenderer content={content} className={className} />
}
