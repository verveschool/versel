import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="yc-container py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mb-12">
            <h1 className="mb-8">
              Pick ambitious grads. Train them. Back them for 90 days. Get paid only when they outperform.
            </h1>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              We've built a machine for talent that works. We find early-career sales talent with drive, teach them buyer psychology, and place them in growth-stage startups with aligned incentives. No upfront fees. Just pure results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity text-center"
              >
                Learn more
              </Link>
              <Link
                href="/partners"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors text-center"
              >
                For hiring partners
              </Link>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="yc-container py-20 border-t border-border">
          <div className="mb-16">
            <h2 className="mb-12">The problem</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>For candidates:</strong> You graduated. You send resumes into the void. You interview and feel like begging. The whole experience feels broken.
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>For companies:</strong> You cannot find grads who understand how people think. You hire wrong. You burn cash. You waste time. The cost per wrong hire reaches ₹3-5L.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Model */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">The model: aligned incentives</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">For candidates</h3>
              <ul className="space-y-3 text-foreground">
                <li>No upfront fees</li>
                <li>Training fully sponsored by hiring partner</li>
                <li>90 days of hands-on coaching</li>
                <li>Personal bet from us on your success</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">For partners</h3>
              <ul className="space-y-3 text-foreground">
                <li>Pre-vetted, trained talent</li>
                <li>90-day performance guarantee</li>
                <li>Ongoing support during ramp-up</li>
                <li>Pay only when they perform</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Why we win</h3>
              <p className="text-foreground leading-relaxed">
                Our incentives are perfectly aligned. We only win when you win. We don't take upfront fees. We take payment only when you survive and perform.
              </p>
            </div>
          </div>
        </section>

        {/* Why Sales */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Why sales matters</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <p className="text-lg leading-relaxed">
                Sales is the only performance arena where a recent grad can test their actual ceiling within months.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                In most jobs you get feedback quarterly. In sales you get feedback daily. You know exactly where you stand.
              </p>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">By the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-accent mb-3">₹4-6L</p>
              <p className="text-sm text-muted">Starting salary</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-3">90</p>
              <p className="text-sm text-muted">Days of coaching</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-3">20%</p>
              <p className="text-sm text-muted">Target performance tier</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-3">10-14</p>
              <p className="text-sm text-muted">Days to offer</p>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Our partners</h2>
          <p className="text-lg text-foreground mb-6 max-w-3xl">
            Crio.do, Skill Lync, BrightChamps, Upgrad, AlmaBetter, and Academically trust our model because our people close faster, stay longer, and are driven by their first win.
          </p>
        </section>

        {/* CTA Section */}
        <section className="yc-container py-20 border-t border-border">
          <div className="bg-secondary rounded-lg p-12 md:p-16 text-center">
            <h2 className="mb-6">Ready to get started?</h2>
            <p className="text-lg text-foreground mb-10 max-w-2xl mx-auto">
              Whether you're an ambitious grad or a hiring partner, we'd love to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ayush@verveschool.com"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
              <a
                href="https://wa.me/917065314693"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
