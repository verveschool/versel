import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="yc-container py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Hire trained sales talent.</h1>
              <p className="text-base text-muted mb-6">
                Pre-vetted. Pre-trained. Ready to close.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/hero-partners.jpg" 
                alt="Team collaboration" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">The problem</h2>
          <div className="max-w-2xl">
            <p className="text-base text-foreground mb-4">
              Most salespeople hired from the market fail in the first 90 days. Cost: ₹3-5L per wrong hire.
            </p>
            <p className="text-base text-foreground">
              Interviews don't show hunger. They show confidence. You need someone who's already proven they can learn and perform under pressure.
            </p>
          </div>
        </section>

        {/* What You Get */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">What you get</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            <div>
              <h3 className="font-semibold mb-3">Pre-trained talent</h3>
              <p className="text-sm text-foreground">
                They already know how to ask questions, handle objections, and close.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">90-day guarantee</h3>
              <p className="text-sm text-foreground">
                We stay involved during ramp-up. You get a trained salesperson, not a raw hire.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Faster productivity</h3>
              <p className="text-sm text-foreground">
                Instead of 6 months, they're closing deals in weeks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Better retention</h3>
              <p className="text-sm text-foreground">
                They succeeded early and stay committed to their first win.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">How it works</h2>
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="font-semibold mb-2">1. Alignment</h3>
              <p className="text-sm text-muted">You tell us about the role and culture.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Screening</h3>
              <p className="text-sm text-muted">We vet and pressure-test candidates over 2-4 weeks.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Your interview</h3>
              <p className="text-sm text-muted">You interview pre-screened candidates. You decide.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Training</h3>
              <p className="text-sm text-muted">Before day 1, we run intensive preparation.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">5. 90-day support</h3>
              <p className="text-sm text-muted">We review calls and guide them to top 20% performance.</p>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="yc-container py-16 border-t border-border">
          <h2 className="mb-8">Our partners</h2>
          <p className="text-base text-foreground">
            Crio.do, Skill Lync, BrightChamps, Upgrad, AlmaBetter, Academically.
          </p>
        </section>

        {/* CTA */}
        <section className="yc-container py-16 border-t border-border">
          <div className="flex gap-3">
            <a
              href="mailto:ayush@verveschool.com"
              className="px-6 py-2 bg-accent text-accent-foreground font-medium rounded text-sm"
            >
              Get started
            </a>
            <a
              href="https://wa.me/917065314693"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-primary text-primary font-medium rounded text-sm"
            >
              Talk to us
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
