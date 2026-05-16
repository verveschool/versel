import Link from "next/link"
import type { ReactNode } from "react"

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g)

  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)

    if (linkMatch) {
      const [, label, href] = linkMatch
      const className = "text-primary underline underline-offset-4 transition-colors hover:text-white"

      if (href.startsWith("/")) {
        return (
          <Link key={index} href={href} className={className}>
            {label}
          </Link>
        )
      }

      return (
        <a key={index} href={href} className={className} rel="noreferrer" target="_blank">
          {label}
        </a>
      )
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[0.9em] text-white">
          {part.slice(1, -1)}
        </code>
      )
    }

    return part
  })
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/)

  return (
    <div className="essay-prose">
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
