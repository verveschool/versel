"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  const sections = [
    "the-challenge",
    "our-approach",
    "selection-process",
    "the-journey",
    "what-we-teach",
    "success-stories",
    "why-it-works",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="yc-container py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="mb-8">How we build sales talent</h1>
              <p className="text-lg text-muted leading-relaxed">
                We've built a system for identifying, training, and launching early-career sales talent into growth-stage companies. No lectures. No certificates. Just real coaching from people who've built sales orgs from zero.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/hero-about.jpg" 
                alt="Sales coaching session" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section data-section="the-challenge" className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">The challenge</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-accent mb-6">For fresh grads</h3>
              <p className="text-foreground leading-relaxed">
                You graduate. You send resumes into the void. You interview and it feels like begging for a chance. The whole process is random, slow, and soul-crushing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-6">For growing companies</h3>
              <p className="text-foreground leading-relaxed">
                You need salespeople, but talent pipelines are broken. You hire someone confident in interviews, and 3 months later they're gone or still missing target. The cost per wrong hire: ₹3-5L per person.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section data-section="our-approach" className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Our approach: aligned incentives</h2>
          <p className="text-lg text-foreground mb-12 max-w-3xl leading-relaxed">
            We operate on a single principle: we only win when you win. Companies pay us. You pay nothing. We take payment only when you survive and perform. This changes everything about how we operate.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-6">Scout, train, place</h3>
              <p className="text-foreground leading-relaxed mb-6">
                We find high-potential early-career talent, teach them how buyers actually decide, then place them with companies paying performance-based fees.
              </p>
            </div>
            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-6">90-day intensive</h3>
              <p className="text-foreground leading-relaxed mb-6">
                You get 90 days of hands-on coaching from experienced sales leaders. Not recorded videos. Real feedback on real calls.
              </p>
            </div>
            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-6">Lifetime support</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Even after 90 days, you're not alone. You stay connected to our alumni network and have access to mentors forever.
              </p>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section data-section="selection-process" className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Selection process: 4 steps to placement</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-accent text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-4">Scout call (15 min)</h3>
                    <p className="text-foreground leading-relaxed">
                      Our team calls you directly. We listen for speed, clarity, and hunger. We're checking if you have a point to prove—not to the world, but to yourself.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-accent text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-4">Pressure test (30 min)</h3>
                    <p className="text-foreground leading-relaxed">
                      We run a live mock. This isn't coaching—it's selection. We're looking for what happens after rejection, how you recover, your ability to think on your feet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-accent text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-4">CEO review (48 hours)</h3>
                    <p className="text-foreground leading-relaxed">
                      Ayush reviews your profile, sharpens your story, and gives you specific advice for company interviews. This is about clarity, not hand-holding.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-accent text-white flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-4">Company interviews</h3>
                    <p className="text-foreground leading-relaxed">
                      Your profile goes to the hiring partner. No one from verveschool speaks for you. If you clear, you know you earned it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section data-section="the-journey" className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">The 90-day journey</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Week 1: Foundations</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Before day one at the company, we run live sessions. You learn the structure of a good call: how to open, how to ask discovery questions, how to handle basic objections without sounding robotic. By the end of this week, you're not blank. You have your first script, tailored to the product you're about to sell.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Weeks 2-4: Integration</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Your company is running product training. Meanwhile, we're building your weapon. You learn product details, then we turn that into simple conversation flows. By the time your first call starts, you're not guessing—you have a script you helped build, tuned to your voice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Weeks 5-12: Daily execution</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Every single day you send your best call recording. We break it down: Where did you lose control? Where did you ask the wrong question? Where could you have gone deeper? You get specific feedback, not vague motivation. Change this line. Pause here. Ask this instead. Each loop moves you up one notch. Within a month, you stop sounding like a fresher and start sounding like someone who knows what they're doing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Beyond 90 days</h3>
              <p className="text-foreground leading-relaxed mb-6">
                The formal coaching ends. But you never lose access. You're in the alumni group forever. You can call any time. Most people don't need to—they're moving, building, dangerous now. But the safety net is there.
              </p>
            </div>
          </div>
        </section>

        {/* What We Teach */}
        <section data-section="what-we-teach" className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">What you'll learn</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-6">Consultative selling</h3>
              <p className="text-foreground leading-relaxed">
                Selling isn't talking fast. It's seeing the world from the other side of the table. Once you understand why people stall, what makes them say yes, and how to guide a conversation authentically, interviews stop feeling like exams. They become conversations you steer.
              </p>
            </div>

            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-6">Frame control</h3>
              <p className="text-foreground leading-relaxed">
                Most candidates interview like beggars. We teach you to interview like a doctor. A doctor doesn't beg you to take medicine. A doctor diagnoses the pain, prescribes the solution, and moves next. When you shift from begging to consulting, the dynamic flips—you become the prize.
              </p>
            </div>

            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-6">The pendulum framework</h3>
              <p className="text-foreground leading-relaxed">
                Most people pitch in straight lines. Buyers decide in stories. We teach you to move conversations across past (where they're coming from), present (what's actually hurting), and future (what they want). Then you show them the ideal path. You're not pushing—you're holding up a mirror.
              </p>
            </div>

            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-6">Objection mastery</h3>
              <p className="text-foreground leading-relaxed">
                Every objection is a hidden question. When someone says "I need to think about it," they're not asking for time. They're asking "Do I really need this?" Your job is to answer that hidden question so clearly they stop stalling.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section data-section="success-stories" className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Stories from our people</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-3">Lalit Yadav</h3>
              <p className="text-sm text-muted mb-4">Skillovilla</p>
              <p className="text-foreground leading-relaxed">
                Stuck in CS limbo for 2 years. Sending resumes. Getting ghosted. Felt like nothing was moving. Learned how to run calls instead of just answering questions. Now a steady performer, closing deals instead of sending random resumes.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-3">Vansh Negi</h3>
              <p className="text-sm text-muted mb-4">Growth-stage EdTech</p>
              <p className="text-foreground leading-relaxed">
                Political science grad who thought sales was only for loud people. Loud rooms scared him. Discovered sales is psychology, not volume. Now walks into rooms that used to intimidate him and leads conversations with quiet control.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-3">Jyotsna Raj</h3>
              <p className="text-sm text-muted mb-4">EdTech</p>
              <p className="text-foreground leading-relaxed">
                Wanted stability but thought it was luck or contacts. Reached stability through calls, closures, and action. Now earns more every month than her parents expected her to earn in 5 years.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-lg font-bold text-primary mb-3">Bobby K J</h3>
              <p className="text-sm text-muted mb-4">Crio.do</p>
              <p className="text-foreground leading-relaxed">
                Engineering grad with a 1-year gap. Joined verveschool. Cleared Crio training in 30 days. Hit ₹89,000 in month 1 and reached top 3 in the team.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section data-section="why-it-works" className="yc-container py-20 border-t border-border">
          <h2 className="mb-12">Why this actually works</h2>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Most career programs are scams dressed in certificates. You pay upfront, they give you recorded videos, you finish and still have no job, no skill, no momentum.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Verveschool is built differently. Companies pay us, not you. This changes everything. We only get paid if you survive and perform. That forces us to be honest, selective, and invested in outcomes—not enrollment numbers.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We care about your success because our revenue depends on it. That's the cleanest incentive alignment you'll find.
            </p>
          </div>

          <div className="mt-16 bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to prove something?</h3>
            <p className="text-lg mb-8 opacity-90">
              We're looking for ambitious people with something to prove. If that's you, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ayush@verveschool.com"
                className="px-6 py-3 bg-white text-accent font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Email us
              </a>
              <a
                href="https://wa.me/917065314693"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-accent transition-colors"
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
