"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="yc-container flex items-center justify-between py-5">
        <Link 
          href="/" 
          className="text-lg font-bold text-primary hover:text-accent transition-colors"
        >
          verveschool
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link 
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about")
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            about
          </Link>
          <Link 
            href="/partners"
            className={`text-sm font-medium transition-colors ${
              isActive("/partners")
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            partners
          </Link>
        </nav>

        <div className="md:hidden flex gap-4">
          <Link 
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about")
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            about
          </Link>
          <Link 
            href="/partners"
            className={`text-sm font-medium transition-colors ${
              isActive("/partners")
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            partners
          </Link>
        </div>
      </div>
    </header>
  )
}
