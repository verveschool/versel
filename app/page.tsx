import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="yc-container py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="mb-6">
              We train early-career sales talent and place them in startups.
            </h1>
            <p className="text-base text-muted mb-8">
              No upfront fees. We get paid only when they perform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="px-6 py-2 bg-accent text-accent-foreground font-medium rounded text-center text-sm"
              >
                How it works
              </Link>
              <Link
                href="/partners"
                className="px-6 py-2 border border-primary text-primary font-medium rounded text-center text-sm"
              >
                Hire with us
              </Link>
            </div>
          </div>
        </section>

        {/* The Model */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">The model</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <h3 className="font-semibold mb-3">For candidates</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>No upfront cost</li>
                <li>90 days of coaching</li>
                <li>Placed in growth companies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">For partners</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>Pre-trained talent</li>
                <li>90-day guarantee</li>
                <li>Pay only on success</li>
              </ul>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <p className="text-3xl font-bold text-accent mb-2">₹4-6L</p>
              <p className="text-xs text-muted">Starting salary</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">90d</p>
              <p className="text-xs text-muted">Coaching</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">10-14d</p>
              <p className="text-xs text-muted">To offer</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">Top 20%</p>
              <p className="text-xs text-muted">Performance</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="yc-container py-16 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:ayush@verveschool.com"
              className="px-6 py-2 bg-accent text-accent-foreground font-medium rounded text-sm"
            >
              Get in touch
            </a>
            <a
              href="https://wa.me/917065314693"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-primary text-primary font-medium rounded text-sm"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
