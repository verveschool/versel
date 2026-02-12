"use client"

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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="mb-8">Hire the best sales talent</h1>
              <p className="text-lg text-muted leading-relaxed">
                Stop hiring salespeople who miss targets. We scout, train, and place pre-vetted talent who close faster, stay longer, and are driven by their first win.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/hero-partners.jpg" 
                alt="Team collaboration and recruitment" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">The hiring crisis</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl font-bold text-accent mb-6">8 out of 10</p>
              <p className="text-lg text-foreground leading-relaxed">
                Salespeople miss targets. The interview goes well. They're confident, articulate, likeable. You make the offer. Three months later they're gone. Or worse—they stay and keep missing.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent mb-6">₹3-5L</p>
              <p className="text-lg text-foreground leading-relaxed">
                Cost per wrong hire. That's the hidden cost of traditional hiring. Bad judgment calls add up fast.
              </p>
            </div>
          </div>
        </section>

        {/* The Root Problem */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">The signal gap</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong>Interviews show presentation skills.</strong> They cannot show hunger.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong>They show confidence.</strong> They cannot show what happens after the 47th rejection in a week.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong>Traditional hiring relies on history and pedigree.</strong> But past performance in a different culture rarely predicts future success in yours.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              This gap between signal and reality is where the cost lies. It's a system failure, not a people failure.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Our approach: the machine</h2>
          <p className="text-lg text-foreground leading-relaxed mb-12 max-w-3xl">
            We operate on definite optimism. We believe that if you vet for the right traits and train for the specific role, the result is deterministic. We don't roll dice. We build a machine. We don't hope for retention. We engineer it.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-secondary rounded-lg p-8">
              <div className="text-4xl font-bold text-accent mb-6">1</div>
              <h3 className="text-lg font-bold text-primary mb-4">Predictable pipeline</h3>
              <p className="text-foreground leading-relaxed">
                We source English-fluent Gen Z talent. We ignore resumes and filter for drive, focus, and feedback absorption. Quality over quantity.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <div className="text-4xl font-bold text-accent mb-6">2</div>
              <h3 className="text-lg font-bold text-primary mb-4">Pressure testing</h3>
              <p className="text-foreground leading-relaxed">
                Our co-founder personally screens every candidate. We don't look for polish. We look for wreckage and recovery. That predicts performance better than any resume.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <div className="text-4xl font-bold text-accent mb-6">3</div>
              <h3 className="text-lg font-bold text-primary mb-4">Pre-joining prep</h3>
              <p className="text-foreground leading-relaxed">
                Before day 1, candidates learn buyer psychology, decision patterns, and objection logic. They don't enter your building blank.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <div className="text-4xl font-bold text-accent mb-6">4</div>
              <h3 className="text-lg font-bold text-primary mb-4">Live integration</h3>
              <p className="text-foreground leading-relaxed">
                During product training, we work in parallel. We take your product knowledge and build scripts with them. They internalize, not memorize.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <div className="text-4xl font-bold text-accent mb-6">5</div>
              <h3 className="text-lg font-bold text-primary mb-4">The 90-day warrant</h3>
              <p className="text-foreground leading-relaxed">
                Once they start calling, they send us recordings daily. We critique tone, pacing, and questions. We stay involved until they hit top 20%.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <div className="text-4xl font-bold text-accent mb-6">6</div>
              <h3 className="text-lg font-bold text-primary mb-4">Lifetime alumni</h3>
              <p className="text-foreground leading-relaxed">
                After 90 days, they're part of the network forever. We continue to support and move top performers between partners.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">What you get</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-3">Pre-vetted talent</h3>
                <p className="text-foreground leading-relaxed">
                  Only candidates who pass our pressure test get placed. You're not sorting through hundreds of applications.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-3">90-day ramp-up guarantee</h3>
                <p className="text-foreground leading-relaxed">
                  We don't disappear after day 1. We stay involved for 90 days, reviewing calls and giving specific feedback. You get a trained salesperson, not a raw hire.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-3">Predictable retention</h3>
                <p className="text-foreground leading-relaxed">
                  People who go through our selection and training are driven, hungry, and invested in their first win. They stay longer and perform better.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-3">Performance-based pricing</h3>
                <p className="text-foreground leading-relaxed">
                  You only pay when they perform. No upfront fees. We're as invested in their success as you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Examples */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Our current partners</h2>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            Crio.do, Skill Lync, BrightChamps, Upgrad, AlmaBetter, and Academically trust our model. Their people close faster, stay longer, and are driven by their first win.
          </p>
        </section>

        {/* Typical Workflow */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">How it works: the process</h2>
          
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold text-primary">Initial alignment call</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                We understand your role, team, and culture. We align on the profile you need and the timeline. 15 minutes to get clear.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold text-primary">Candidate pipeline</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Over the next 2-4 weeks, we source, vet, and pressure-test candidates. You get 2-3 pre-screened candidates to interview.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold text-primary">Your interviews</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                You run interviews. We're not in the room. If you like them, they move forward. If not, we source more candidates.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold text-primary">Pre-joining prep</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                They're hired, you set a start date. Before day 1, we run intensive training on buyer psychology and foundational sales skills.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">5</div>
                <h3 className="text-xl font-bold text-primary">90-day coaching</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                They send us daily call recordings. We provide specific feedback. We stay involved until they hit top 20% performance in your team.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">6</div>
                <h3 className="text-xl font-bold text-primary">Ongoing support</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                After 90 days, they're part of our alumni network. They have access to mentors and community forever. We also help you bring more talent if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Transparent pricing</h2>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mb-12">
            We're flexible. We work on performance-based models where you pay based on outcomes, or retainer models. Let's talk about what makes sense for you.
          </p>
        </section>

        {/* CTA */}
        <section className="yc-container py-20 border-t border-border">
          <div className="bg-accent text-accent-foreground rounded-lg p-12 md:p-16 text-center">
            <h2 className="mb-6">Ready to hire better?</h2>
            <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Let's talk about your hiring challenges. We'll show you how our model works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ayush@verveschool.com"
                className="px-8 py-3 bg-white text-accent font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Email us
              </a>
              <a
                href="https://wa.me/917065314693"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-accent transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
