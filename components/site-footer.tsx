import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="yc-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[13px] text-foreground">
          <p>© 2025 verveschool</p>
          <div className="flex gap-6 flex-wrap">
            <Link href="/about" className="hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="/partners" className="hover:text-muted-foreground transition-colors">
              Partners
            </Link>
            <a href="mailto:ayush@verveschool.com" className="hover:text-muted-foreground transition-colors">
              contact
            </a>
            <a href="https://wa.me/917065314693" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
              whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
