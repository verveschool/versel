"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]")
      let current = ""
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < 200) {
          current = section.getAttribute("data-section")
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    "the-problem",
    "the-solution",
    "the-process",
    "what-you-get",
    "the-guarantee",
    "focus-areas",
    "next-steps",
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="yc-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[15px] font-medium">
              verveschool
            </Link>
            <Link href="/partners" className="text-[13px] font-medium md:hidden">
              partners
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <main className="yc-container py-20 flex-1 md:py-20 md:pt-20 pt-8">
          {/* Header */}
          <div className="mb-24">
            <h1 className="mb-4">hire the best salespeople</h1>
            <p className="text-[14px]">verveschool.com/partners</p>
          </div>

          {/* The Problem */}
          <section data-section="the-problem" className="yc-section">
            <h2>the hiring crisis in edtech</h2>
            <div className="grid grid-cols-2 gap-16 mb-12">
              <div className="yc-text-block">
                <p className="mb-6">8 out of 10 salespeople miss targets.</p>
                <p>
                  the interview goes well. they are confident. articulate. likeable. you make the offer. three months
                  later they are gone. or worse they stay and keep missing.
                </p>
              </div>
              <div className="relative w-full h-[400px] mb-8">
                <Image src="/hiring-challenge-illustration.jpg" alt="hiring challenge" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* The Signal Gap */}
          <section data-section="the-solution" className="yc-section">
            <h2>the signal gap</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">interviews show presentation skills. they cannot show hunger.</p>
              <p className="mb-6">
                they show confidence. they cannot show what happens after the 47th rejection in a week.
              </p>
              <p className="mb-6">
                traditional hiring relies on history and pedigree. but past performance in a different culture rarely
                predicts future success in yours.
              </p>
              <p>that gap is where the cost lies. it is a system failure not a people failure.</p>
            </div>
            <div className="relative w-full h-[400px] mb-8">
              <Image src="/signal-gap-illustration.jpg" alt="signal gap problem" fill className="object-cover" />
            </div>
          </section>

          {/* The Solution */}
          <section data-section="the-process" className="yc-section">
            <h2>our approach</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">we operate on definite optimism.</p>
              <p className="mb-6">
                we believe the future can be designed. we believe that if you vet for the right traits and train for the
                specific role the result is deterministic.
              </p>
              <p className="mb-6">we do not roll dice. we build a machine.</p>
              <p>we do not hope for retention. we engineer it.</p>
            </div>
            <div className="relative w-full h-[400px] mb-8">
              <Image src="/approach-illustration.jpg" alt="our approach" fill className="object-cover" />
            </div>
          </section>

          {/* The Process */}
          <section data-section="what-you-get" className="yc-section">
            <h2>the process</h2>
            <div className="yc-text-block mb-8">
              <h3 className="mb-8">1. scouting</h3>
              <p className="mb-12">
                we source english fluent gen z talent. we ignore resumes and filter for drive, focus, and feedback
                absorption.
              </p>

              <h3 className="mb-8">2. the pressure test</h3>
              <p className="mb-12">
                faraz arif (co-founder, 9+ years exp) personally screens every candidate. we do not look for polish. we
                look for wreckage and recovery.
              </p>

              <h3 className="mb-8">3. pre-joining prep</h3>
              <p className="mb-12">
                before day 1 they learn core buyer psychology, decision patterns, and objection logic. they do not enter
                your building blank.
              </p>

              <h3 className="mb-8">4. live integration</h3>
              <p className="mb-12">
                during your product training (typically 7-10 days) we work parallel. we take your product knowledge and
                build their scripts with them. they do not memorize. they internalize.
              </p>

              <h3 className="mb-8">5. the 90 day warrant</h3>
              <p>
                once they start calling they send us recordings daily. we critique tone, pacing, and questions. we stay
                involved until they hit the level you want.
              </p>
            </div>
            <div className="relative w-full h-[400px] mb-8">
              <Image src="/process-illustration.jpg" alt="our process" fill className="object-cover" />
            </div>
          </section>

          {/* What You Get */}
          <section data-section="the-guarantee" className="yc-section">
            <h2>what you get</h2>
            <div className="grid grid-cols-2 gap-16 mb-12">
              <div className="yc-text-block">
                <h3>90 day replacement guarantee</h3>
                <p className="mt-4">if they do not perform, we replace them. no questions asked.</p>
              </div>
              <div>
                <h3>net 30 payment terms</h3>
                <p className="mt-4">pay only after they deliver. aligned incentives. aligned timeline.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-16 mb-12">
              <div className="yc-text-block">
                <h3>custom playbooks</h3>
                <p className="mt-4">scripts, follow up systems, prospecting guides built for your specific product.</p>
              </div>
              <div>
                <h3>daily coaching</h3>
                <p className="mt-4">
                  we review call recordings, coach tone and pacing, and iterate until they hit your target performance
                  level.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[400px] mb-8">
              <Image src="/guarantee-illustration.jpg" alt="what you get" fill className="object-cover" />
            </div>
          </section>

          {/* Focus Areas */}
          <section data-section="focus-areas" className="yc-section">
            <h2>where we focus</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">we focus exclusively on tier 1 cities where our model has proven roi.</p>
              <p className="mb-6">we do not keep a bench. we hunt for your specific mandate.</p>
              <p>the world moves for those who do.</p>
            </div>
            <div className="relative w-full h-[400px] mb-8">
              <Image src="/focus-illustration.jpg" alt="our focus areas" fill className="object-cover" />
            </div>
          </section>

          {/* Next Steps */}
          <section data-section="next-steps" className="yc-section">
            <h2>let's talk</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">if you are ready to end the hire hope fire cycle let's talk.</p>
              <ul className="space-y-4">
                <li className="font-medium">phone: +91 81304 30683</li>
                <li className="font-medium">email: ayush@verveschool.com</li>
                <li className="font-medium">address: 20 h 1a, sector 63, noida 201301</li>
              </ul>
            </div>
          </section>

          <div className="mt-20 pt-12 border-t border-border text-[13px]">
            <p>© 2025 verveschool 🧡</p>
          </div>
        </main>

        {/* Table of Contents */}
        <aside className="hidden md:block sticky top-20 pt-20 pb-20 px-6 h-screen overflow-y-auto flex-shrink-0 border-l border-border">
          <div className="text-[12px] font-medium text-muted-foreground mb-4">on this page</div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    const element = document.querySelector(`[data-section="${section}"]`)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`text-[13px] text-left hover:text-primary transition-colors ${
                    activeSection === section ? "font-bold text-primary" : "text-foreground"
                  }`}
                >
                  {section.replace(/-/g, " ")}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Common Footer */}
      <footer className="border-t border-border mt-16">
        <div className="yc-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[13px] text-foreground">
            <p>© 2025 verveschool</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-muted-foreground">
                about
              </Link>
              <Link href="/partners" className="hover:text-muted-foreground">
                partners
              </Link>
              <a href="mailto:ayush@verveschool.com" className="hover:text-muted-foreground">
                contact
              </a>
              <a href="https://wa.me/917065314693" className="hover:text-muted-foreground">
                whatsapp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
