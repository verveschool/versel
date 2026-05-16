import Link from "next/link"

const footerLinks = [
  { href: "/partners", label: "Partners" },
  { href: "/people", label: "People" },
  { href: "/writing", label: "Writing" },
  { href: "/book", label: "Book" },
  { href: "/about", label: "About" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="yc-container py-8">
        <div className="flex flex-col gap-5 text-[13px] text-foreground/62 md:flex-row md:items-center md:justify-between">
          <p>© 2025 verveschool</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <a href="mailto:ayush@verveschool.com" className="transition-colors hover:text-foreground">
              Contact
            </a>
            <a
              href="https://wa.me/917065314693"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
