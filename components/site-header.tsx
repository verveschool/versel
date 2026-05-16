"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/partners", label: "partners" },
  { href: "/people", label: "people" },
  { href: "/essays", label: "essays" },
  { href: "/book", label: "book" },
  { href: "/about", label: "about" },
]

function isActiveLink(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="yc-container py-5">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-80" aria-label="verveschool home">
            <img src="/verveschool-logo.svg" alt="verveschool" className="h-6 w-auto" />
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[13px] text-white/70 md:gap-6">
            {navLinks.map((link) => {
              const isActive = isActiveLink(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors ${isActive ? "text-white" : "hover:text-white"}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
