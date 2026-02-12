import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24 bg-background">
      <div className="yc-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-base font-bold text-primary mb-4">verveschool</h3>
            <p className="text-sm text-muted leading-relaxed">
              We scout, train, and place ambitious early-career talent into growth-stage startups.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">For Candidates</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
                  about us
                </Link>
              </li>
              <li>
                <a href="mailto:ayush@verveschool.com" className="text-sm text-foreground hover:text-accent transition-colors">
                  contact
                </a>
              </li>
              <li>
                <a href="https://wa.me/917065314693" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent transition-colors">
                  whatsapp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">For Partners</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/partners" className="text-sm text-foreground hover:text-accent transition-colors">
                  hire with us
                </Link>
              </li>
              <li>
                <a href="mailto:ayush@verveschool.com" className="text-sm text-foreground hover:text-accent transition-colors">
                  partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted">© 2025 verveschool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
