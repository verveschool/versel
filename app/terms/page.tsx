import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Review the terms that govern use of VerveSchool's website, hiring partner conversations, and candidate support resources.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms",
    description:
      "Review the terms that govern use of VerveSchool's website, hiring partner conversations, and candidate support resources.",
    url: "/terms",
  },
  twitter: {
    title: "Terms",
    description:
      "Review the terms that govern use of VerveSchool's website, hiring partner conversations, and candidate support resources.",
  },
}

const sections = [
  {
    title: "Use of this website",
    body: "The VerveSchool website shares information about our talent scouting, hiring partner support, essays, and related resources. You agree to use the website only for lawful purposes and not to interfere with its operation, security, or availability.",
  },
  {
    title: "Candidate and partner conversations",
    body: "Submitting an inquiry, sending an email, or starting a WhatsApp conversation does not guarantee placement, hiring outcomes, interview access, or a commercial relationship. Any specific recruiting or placement terms must be agreed separately in writing.",
  },
  {
    title: "Information you provide",
    body: "You are responsible for ensuring that information you share with us is accurate, current, and yours to provide. We may use the information you submit to respond to you, assess fit, coordinate opportunities, and improve our services.",
  },
  {
    title: "Content and intellectual property",
    body: "Website copy, essays, design, logos, and other materials are owned by VerveSchool or used with permission. You may not copy, republish, or commercially exploit our content without prior written consent, except where permitted by law.",
  },
  {
    title: "No professional advice",
    body: "Our website content is provided for general informational purposes. It should not be treated as legal, financial, employment, or professional advice. You should make independent decisions based on your circumstances.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms as our website and services evolve. The version posted on this page applies when you use the website after the update is published.",
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.18),_transparent_32%),linear-gradient(180deg,_#050608_0%,_#0b0f14_52%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container py-16 md:py-24">
        <section className="max-w-4xl">
          <p className="section-kicker mb-4">Legal</p>
          <h1 className="max-w-3xl font-semibold text-white">Terms</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            These terms explain the basic rules for using VerveSchool's website and starting conversations with us.
          </p>
          <p className="mt-4 text-sm text-white/45">Last updated: May 31, 2026</p>
        </section>

        <div className="mt-16 max-w-4xl space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-16 max-w-4xl border border-primary/30 bg-primary/10 p-8">
          <h2 className="text-2xl font-semibold text-white">Questions</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            If you have questions about these terms, contact us at{" "}
            <a href="mailto:talent@verveschool.com" className="text-primary transition-colors hover:text-white">
              talent@verveschool.com
            </a>
            .
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
