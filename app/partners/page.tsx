"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"))
    if (!elements.length) return

    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.getAttribute("data-section")
          if (!id) continue
          setActiveSection(prev => (prev === id ? prev : id))
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.01 }
    )

    elements.forEach(el => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const sections = [
    "the-problem",
    "the-signal",
    "philosophy",
    "process",
    "guarantee",
    "focus",
    "closing",
  ]

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return
    const el = document.querySelector(`[data-section="${id}"]`)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="yc-container py-4 flex justify-between">
          <Link href="/" className="text-[15px] font-medium">verveschool</Link>
          <Link href="/partners" className="text-[13px] font-medium md:hidden">partners</Link>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        <main className="yc-container py-20 flex-1 md:pt-20 pt-8">

          <div className="mb-24">
            <h1 className="mb-4">8 out of 10 sales hires miss target within 90 days.</h1>
            <p className="text-[14px]">you’ve seen how it happens. the interview works. the numbers don’t.</p>
          </div>

          <section data-section="the-problem" className="yc-section">
            <h2>the hiring problem</h2>
            <div className="grid grid-cols-2 gap-16 mb-12">
              <div className="yc-text-block">
                <p className="mb-6">interviews measure presentation.</p>
                <p>they don’t measure endurance. they don’t measure learning speed. they don’t measure behavior after repeated rejection.</p>
              </div>
              <div className="relative w-full h-[400px]">
                <Image src="/hiring-challenge-illustration.jpg" alt="" fill className="object-cover"/>
              </div>
            </div>
          </section>

          <section data-section="the-signal" className="yc-section">
            <h2>the signal gap</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">companies don’t hire wrong people. they use the wrong signal.</p>
              <p className="mb-6">interviews show confidence. they cannot show behavior after repeated rejection.</p>
              <p>past performance elsewhere rarely predicts performance in your environment.</p>
            </div>
          </section>

          <section data-section="philosophy" className="yc-section">
            <h2>designed performance</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">performance is designed.</p>
              <p className="mb-6">when selection measures behavior and training targets the role output becomes predictable.</p>
              <p>retention is a side effect of capability.</p>
            </div>
          </section>

          <section data-section="process" className="yc-section">
            <h2>operating model</h2>
            <div className="yc-text-block mb-8">
              <h3 className="mb-4">1 scouting</h3>
              <p className="mb-10">we source early career sales talent. resumes are not the filter. drive and feedback absorption are.</p>

              <h3 className="mb-4">2 field test</h3>
              <p className="mb-10">we hire off output not conversation. talkers keep talking. doers submit usable work.</p>

              <h3 className="mb-4">3 pre joining prep</h3>
              <p className="mb-10">before day 1 they understand buyer motivation and decision patterns.</p>

              <h3 className="mb-4">4 live integration</h3>
              <p className="mb-10">during training we build scripts with them. they internalize not memorize.</p>

              <h3 className="mb-4">5 daily calibration</h3>
              <p>recordings reviewed continuously until performance level is reached.</p>
            </div>
          </section>

          <section data-section="guarantee" className="yc-section">
            <h2>90 day performance window</h2>
            <div className="yc-text-block mb-12">
              <p>if performance is not reached within 90 days we replace the hire.</p>
              <p>not as a promise. as a property of the system.</p>
            </div>
          </section>

          <section data-section="focus" className="yc-section">
            <h2>constraints</h2>
            <div className="yc-text-block mb-12">
              <p>we work only with teams where sales performance is operationally critical.</p>
              <p>no bench staffing. no volume hiring. role specific search only.</p>
            </div>
          </section>

          <section data-section="closing" className="yc-section">
            <h2>alignment</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">one wrong hire costs salary. the larger cost is stalled momentum.</p>
              <p className="mb-6">teams that treat sales as a performance function build compounding revenue.</p>
              <p>if that matches how you run your company we should speak.</p>
            </div>
          </section>

          <div className="mt-20 pt-12 border-t border-border text-[13px]">
            <p>© 2026 verveschool 🧡</p>
          </div>

        </main>

        <aside className="hidden md:block sticky top-20 pt-20 pb-20 px-6 h-screen overflow-y-auto flex-shrink-0 border-l border-border">
          <div className="text-[12px] font-medium mb-4">on this page</div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-[13px] text-left ${activeSection===section?"font-bold":"opacity-70"}`}
                >
                  {section.replace(/-/g," ")}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <footer className="border-t border-border mt-16">
        <div className="yc-container py-8 flex justify-between text-[13px]">
          <p>© 2026 verveschool</p>
          <div className="flex gap-6">
            <Link href="/about">about</Link>
            <Link href="/partners">partners</Link>
            <a href="mailto:careers@verveschool.com">contact</a>
            <a href="https://wa.me/917042873035">whatsapp</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
