import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how VerveSchool collects, uses, and protects information shared by candidates, hiring partners, and website visitors.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn how VerveSchool collects, uses, and protects information shared by candidates, hiring partners, and website visitors.",
    url: "/privacy",
  },
  twitter: {
    title: "Privacy Policy",
    description:
      "Learn how VerveSchool collects, uses, and protects information shared by candidates, hiring partners, and website visitors.",
  },
}

const sections = [
  {
    title: "Information we collect",
    body: "We may collect information you share directly with us, such as your name, contact details, professional background, hiring requirements, messages, and any other information included in email, forms, or WhatsApp conversations.",
  },
  {
    title: "How we use information",
    body: "We use information to respond to inquiries, evaluate candidate fit, coordinate partner opportunities, operate hiring support, improve our website, and communicate updates related to VerveSchool's services.",
  },
  {
    title: "Sharing information",
    body: "We may share relevant candidate or partner information with the people and organizations involved in a hiring process, with service providers that help us operate, or when required by law. We do not sell personal information.",
  },
  {
    title: "Retention and security",
    body: "We keep information for as long as needed for the purposes described in this policy, unless a longer period is required or permitted by law. We use reasonable safeguards, but no internet or communications system is completely secure.",
  },
  {
    title: "Your choices",
    body: "You can ask us to update, correct, or delete information you have shared with us, subject to legal, operational, and legitimate business requirements. You can also opt out of non-essential communications.",
  },
  {
    title: "Policy updates",
    body: "We may update this policy when our website, communications, or services change. The latest version will be posted on this page with the updated date.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(127,139,153,0.16),_transparent_30%),linear-gradient(180deg,_#050608_0%,_#0b0f14_52%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container py-16 md:py-24">
        <section className="max-w-4xl">
          <p className="section-kicker mb-4">Legal</p>
          <h1 className="max-w-3xl font-semibold text-white">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            This policy explains how VerveSchool handles information from candidates, hiring partners, and website visitors.
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
          <h2 className="text-2xl font-semibold text-white">Contact us</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            For privacy questions or requests, contact us at{" "}
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
