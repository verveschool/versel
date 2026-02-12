import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="yc-container py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">We train sales talent.</h1>
              <p className="text-base text-muted mb-6">
                Real coaching. Real placements. Real results.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/hero-about.jpg" 
                alt="Sales coaching" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">How it works</h2>
          <div className="space-y-8 max-w-2xl">
            <div>
              <h3 className="font-semibold mb-3">Step 1: Assessment</h3>
              <p className="text-sm text-foreground">
                We screen for learning ability, resilience, and communication skills. Not credentials.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Step 2: Training</h3>
              <p className="text-sm text-foreground">
                90 days of coaching on how buyers decide, how to ask the right questions, and how to close.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Step 3: Placement</h3>
              <p className="text-sm text-foreground">
                We place you with a company hiring. We align on salary, role, and fit before you start.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Step 4: Ongoing support</h3>
              <p className="text-sm text-foreground">
                Monthly check-ins during your first 90 days. We make sure you hit your targets.
              </p>
            </div>
          </div>
        </section>

        {/* Why Sales */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">Why sales</h2>
          <div className="max-w-2xl">
            <p className="text-base text-foreground mb-4">
              Sales is where a fresh grad proves themselves fastest. You get feedback daily, not quarterly. You know exactly what you're good at in weeks, not years.
            </p>
            <p className="text-base text-foreground">
              And for companies: sales-trained talent transitions to other roles easily. You learn how people think. Everything else becomes simpler.
            </p>
          </div>
        </section>

        {/* What We Teach */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">What we teach</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            <div>
              <h3 className="font-semibold mb-2">How buyers decide</h3>
              <p className="text-sm text-muted">Understanding decision frameworks and who actually has power.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How to ask questions</h3>
              <p className="text-sm text-muted">Getting real answers instead of sales-speak. Building trust.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How to close deals</h3>
              <p className="text-sm text-muted">Recognizing buying signals and moving conversations forward.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How to handle objections</h3>
              <p className="text-sm text-muted">Turning "no" into "let's talk about this differently."</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="yc-container py-16 border-t border-border">
          <div className="flex gap-3">
            <a
              href="mailto:ayush@verveschool.com"
              className="px-6 py-2 bg-accent text-accent-foreground font-medium rounded text-sm"
            >
              Apply now
            </a>
            <a
              href="https://wa.me/917065314693"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-primary text-primary font-medium rounded text-sm"
            >
              Questions?
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
