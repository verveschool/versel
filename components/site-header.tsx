"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"

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

          {/* mobile nav */}
          <div className="md:hidden text-[13px] font-medium">
             {!isHome && (
               <Link href={pathname} className="capitalize">
                 {pathname.replace('/', '')}
               </Link>
             )}
             {isHome && (
               <div className="flex gap-4">
                 <Link href="/about">about</Link>
                 <Link href="/partners">partners</Link>
               </div>
             )}
          </div>
        </div>
      </div>
    </nav>
  )
}
