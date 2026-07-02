"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ApplicationForm } from "@/components/application-form"

const sections = [
  {
    id: "why-verveschool",
    label: "Why VerveSchool",
    title: "Why candidates choose VerveSchool",
    body: "We are not a job board. We are a curated process designed for people who want real roles, real growth, and real support. Every candidate we work with is matched based on fit, not just availability.",
  },
  {
    id: "who-we-look-for",
    label: "Who we look for",
    title: "What kind of people thrive here",
    body: "We look for sincere, ambitious people who can talk to customers, handle pressure, and want to grow fast. You should have clear English, serious intent, and willingness to work in-office. Years of experience matter less than mindset.",
  },
  {
    id: "what-we-value",
    label: "What we value",
    title: "Qualities VerveSchool values",
    body: "Communication over credentials. Consistency under pressure. Ownership of outcomes. Coachability. If you can speak clearly, stay composed when things get hard, and keep your word, you have the foundation we care about.",
  },
  {
    id: "hiring-process",
    label: "Hiring process",
    title: "What does the hiring process look like",
    body: "You start with a scout call focused on how you communicate and think. We assess your intent and consistency. If there&apos;s a fit, we match you with the right partner company. Then you interview directly with them. If selected, we stay with you through onboarding.",
  },
  {
    id: "roles",
    label: "Roles",
    title: "What kinds of customer-facing roles are available",
    body: "Sales, business development, customer success, counselling, and support roles across high-growth companies. We work with companies like Scaler, Vedantu, PrepCA, and Infinity Learn. Roles range from entry-level for freshers to experienced positions paying 60K-1L+ per month.",
  },
  {
    id: "after-apply",
    label: "After applying",
    title: "What happens after applying",
    body: "Every application is reviewed within 24 hours. Shortlisted candidates get a call from our talent scout within 2-3 business days. We assess your communication and fit, then match you with relevant partner companies. The entire process from application to first company interview takes 5-7 days.",
  },
]

const faqs = [
  {
    question: "Do I need previous experience?",
    answer: "No. We actively hire freshers. What matters is sincere intent, clear communication, and willingness to learn fast. Freshers usually start between 4-8 LPA, with uncapped incentives.",
  },
  {
    question: "What about remote work?",
    answer: "Most roles are in-office or require regular office presence. Customer-facing roles are typically structured this way. We can discuss flexibility during the process.",
  },
  {
    question: "How long does the hiring process take?",
    answer: "From application to first company interview: 5-7 days. From interview to offer: depends on the company, usually 3-5 days. We keep things moving fast.",
  },
  {
    question: "Do you provide support after I join?",
    answer: "Yes. We stay connected through your first 60 days. Role clarity, interview prep, onboarding support, and early performance alignment are all part of what we do.",
  },
  {
    question: "What if a role doesn't work out?",
    answer: "We provide 60-day replacement coverage. If you're not a fit, we find you something better, at no additional cost to you or the company.",
  },
  {
    question: "How do you select candidates?",
    answer: "We assess communication skills, intent, consistency, and coachability through a scout call. It's not about resume keywords. It's about whether you're serious and ready to grow.",
  },
]

export default function CandidatesPage() {
  const [activeSection, setActiveSection] = useState("why-verveschool")
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let current = "why-verveschool"

      for (const section of document.querySelectorAll<HTMLElement>("[data-section]")) {
        if (section.getBoundingClientRect().top < 220) {
          current = section.dataset.section ?? current
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(219,231,243,0.12),transparent_30%),linear-gradient(180deg,#050608_0%,#0b0f14_54%,#050608_100%)]" />
      <SiteHeader />
      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <div className="flex flex-col md:flex-row">
        <main className="yc-container flex-1 py-16 md:py-24">
          {/* Hero Section */}
          <section className="mb-20 max-w-5xl">
            <h1 className="max-w-4xl font-semibold text-foreground">
              If you can communicate, stay composed under pressure, and keep your word, we would like to meet you.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl md:leading-9">
              VerveSchool connects sincere, ambitious people with high-growth companies looking to build strong customer-facing teams. We handle matching, support, and replacement coverage so you can focus on doing great work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
              >
                Apply now
              </button>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </section>

          {/* How It Works Step Section */}
          <section data-section="how-it-works" className="mb-20 border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
            <div>
              <h2 className="font-semibold text-foreground mb-8">How this actually works</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  "Speak to a Talent Scout",
                  "Get evaluated on communication, intent, and consistency",
                  "Receive partner-role matching based on real fit",
                  "Interview with teams where you actually have upside",
                  "Get post-selection support once you join",
                  "Meet our in-office community that helps you settle in",
                ].map((step, index) => (
                  <div key={step} className="rounded-lg border border-white/10 p-5 hover:border-white/20 transition">
                    <p className="text-sm font-medium text-primary">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-3 text-base text-foreground/75">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Main sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <section key={section.id} data-section={section.id} className="border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
                  <div>
                    <p className="text-4xl font-semibold leading-none tracking-[-0.06em] text-foreground/8 md:text-5xl">
                      {String(index + 2).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="max-w-3xl">
                    <h2 className="font-semibold text-foreground">{section.title}</h2>
                    <p className="mt-4 text-lg leading-8 text-foreground/68">{section.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* FAQ Section */}
          <section data-section="faq" className="border border-white/10 bg-white/[0.02] p-8 mt-20 mb-20 hover:bg-white/[0.04] transition-colors">
            <h2 className="font-semibold text-foreground mb-12">Frequently asked questions</h2>
            <div className="grid gap-6 max-w-3xl">
              {faqs.map((faq, index) => (
                <details key={index} className="border border-white/10 p-5 rounded-lg group hover:border-white/20 transition cursor-pointer">
                  <summary className="flex items-center justify-between font-medium text-foreground list-none">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-primary transition group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-foreground/68 leading-7">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="mb-20 border border-white/10 bg-white/[0.02] px-8 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 hover:bg-white/[0.04] transition-colors">
            <div className="max-w-5xl">
              <h2 className="max-w-2xl font-semibold text-white">
                The world moves for those who do
              </h2>
              <div className="mt-8 max-w-2xl">
                <p className="leading-8 text-white/65">
                  Whether you&apos;re fresh out of college or have years of experience, if you&apos;re sincere and ready to grow, we want to meet you. The companies we work with are hiring now. Apply today and you could be interviewing within days.
                </p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="mt-8 inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
                >
                  Apply now
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar Navigation */}
        <aside className="sticky top-20 hidden h-screen shrink-0 overflow-y-auto border-l border-white/10 px-6 py-20 md:block">
          <ul className="space-y-2">
            {[
              { id: "how-it-works", label: "How it works" },
              ...sections,
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => document.querySelector(`[data-section="${item.id}"]`)?.scrollIntoView({ behavior: "smooth" })}
                  className={`text-left text-[13px] transition-colors hover:text-foreground ${
                    activeSection === item.id ? "text-foreground" : "text-foreground/52"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <SiteFooter />
    </div>
  )
}
