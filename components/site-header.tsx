"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
      <div className="yc-container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[15px] font-medium hover:text-primary transition-colors">
            verveschool
          </Link>
          
          {/* desktop nav */}
          <div className="hidden md:flex gap-6 text-[13px]">
            <Link href="/about" className="text-foreground hover:text-muted-foreground transition-colors">
              about
            </Link>
            <Link href="/partners" className="text-foreground hover:text-muted-foreground transition-colors">
              partners
            </Link>
          </div>

          {/* mobile nav - always show all links */}
          <div className="md:hidden flex gap-4 text-[13px] font-medium">
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              about
            </Link>
            <Link href="/partners" className="text-foreground hover:text-primary transition-colors">
              partners
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}