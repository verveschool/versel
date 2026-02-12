import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-16 bg-background">
      <div className="yc-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-8">
          <div>
            <h3 className="font-bold text-primary mb-2">verveschool</h3>
            <p className="text-sm text-muted max-w-xs">
              Train and place early-career sales talent.
            </p>
          </div>
          
          <div className="flex gap-8">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-3 uppercase">Candidates</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-xs text-foreground hover:text-accent">
                    about
                  </Link>
                </li>
                <li>
                  <a href="mailto:ayush@verveschool.com" className="text-xs text-foreground hover:text-accent">
                    contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-primary mb-3 uppercase">Partners</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/partners" className="text-xs text-foreground hover:text-accent">
                    hire
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/917065314693" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground hover:text-accent">
                    whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted">© 2025 verveschool</p>
        </div>
      </div>
    </footer>
  )
}
