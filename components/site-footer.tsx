import Link from "next/link"

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/people", label: "People" },
  { href: "/writing", label: "Essays" },
  { href: "/book", label: "Book" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="yc-container py-8">
        <div className="flex flex-col gap-5 text-[13px] text-foreground/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 VerveSchool</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-foreground/65">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <a href="mailto:talent@verveschool.com" className="transition-colors hover:text-foreground">
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
