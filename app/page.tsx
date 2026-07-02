import type { Metadata } from "next"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
const filterSteps = [
  "Source candidates through active talent scouts",
  "Filter for sincerity, communication, and role fit",
  "Align shortlisted candidates with partner requirements",
  "Provide replacement coverage if a hire does not work out",
]

export const metadata: Metadata = {
  title: "VerveSchool – Hire customer-facing talent with replacement coverage",
  description:
    "VerveSchool connects companies with sincere, ambitious talent through an active scout network. Fast sourcing, role-fit matching, and 60-day replacement coverage.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VerveSchool – Hire customer-facing talent with replacement coverage",
    description:
      "VerveSchool connects companies with sincere, ambitious talent through an active scout network. Fast sourcing, role-fit matching, and 60-day replacement coverage.",
    url: "/",
  },
  twitter: {
    title: "VerveSchool – Hire customer-facing talent with replacement coverage",
    description:
      "VerveSchool connects companies with sincere, ambitious talent through an active scout network. Fast sourcing, role-fit matching, and 60-day replacement coverage.",
  },
}



const metrics = [
  { value: "10%", label: "Fee on CTC" },
  { value: "60", label: "Days replacement coverage" },
  { value: "5+", label: "Candidates, ready to interview" },
  { value: "₹0", label: "Upfront fees" },
]

const hiringPartners = [
  { name: "Prepca", src: "/logos/prepca.png", className: "h-8" },
  { name: "Infinity Learn", src: "/logos/infinity-learn.png", className: "h-11" },
  { name: "Vedantu", src: "/logos/vedantu.png", className: "h-10" },
  { name: "AlmaBetter", src: "/logos/almabetter.png", className: "h-8" },
  { name: "Crio.Do", src: "/logos/crio-do.png", className: "h-10" },
  { name: "Scaler", src: "/logos/scaler.png", className: "h-7" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0b0f14_54%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container">
        <section className="grid min-h-[74vh] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <h1 className="max-w-4xl font-semibold text-white text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)]">
              Hire sincere talent that can connect and sell.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl md:leading-9">
              VerveSchool helps companies hire customer-facing talent through an active scout network built for speed and long-term fit.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
              >
                Hire sincere talent
              </Link>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
            <div className="space-y-5">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-end justify-between border-b border-white/10 pb-5">
                  <span className="text-3xl font-semibold tracking-[-0.025em] text-white">{metric.value}</span>
                  <span className="max-w-36 text-right text-[12px] uppercase leading-5 tracking-[0.18em] text-white/52">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-16 md:py-24">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {hiringPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-20 items-center justify-center border border-white/15 bg-white/[0.02] px-4"
                >
                  <img
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    className={`w-auto max-w-full object-contain opacity-80 grayscale brightness-0 invert ${partner.className}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="font-semibold text-white">
              How hiring works with VerveSchool
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Partners share role details and hiring constraints. Our team filters and aligns candidates who are serious and ready to join.
            </p>
          </div>
          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div key={step} className="grid grid-cols-[64px_1fr] gap-5 border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <p className="leading-8 text-white/75">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24 border-t border-white/10 pt-24">
          <h2 className="font-semibold text-white mb-12">
            Explore VerveSchool
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Candidates Card */}
            <Link href="/about" className="group border border-white/10 p-8 hover:border-white/20 transition">
              <h3 className="font-semibold text-white">For Candidates</h3>
              <p className="mt-4 text-sm text-white/65">Apply for customer-facing roles with companies scaling fast. Transparent process, real support.</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary">Learn more →</p>
            </Link>

            {/* Partners Card */}
            <Link href="/partners" className="group border border-white/10 p-8 hover:border-white/20 transition">
              <h3 className="font-semibold text-white">For Hiring Partners</h3>
              <p className="mt-4 text-sm text-white/65">Access role-aligned candidates for sales and business development. 60-day coverage included.</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary">Learn more →</p>
            </Link>

            {/* People Card */}
            <Link href="/people" className="group border border-white/10 p-8 hover:border-white/20 transition">
              <h3 className="font-semibold text-white">The Team</h3>
              <p className="mt-4 text-sm text-white/65">Meet the VerveSchool unit and alliance of leaders building better hiring outcomes.</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary">Learn more →</p>
            </Link>

            {/* Essays Card */}
            <Link href="/writing" className="group border border-white/10 p-8 hover:border-white/20 transition">
              <h3 className="font-semibold text-white">Essays</h3>
              <p className="mt-4 text-sm text-white/65">Long-form writing on sales hiring, talent development, and operating notes for revenue teams.</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary">Read essays →</p>
            </Link>

            {/* Book Card */}
            <Link href="/book" className="group border border-white/10 p-8 hover:border-white/20 transition">
              <h3 className="font-semibold text-white">Field Guide</h3>
              <p className="mt-4 text-sm text-white/65">A comprehensive guide to selling better. 80 pages structured as a chapter-by-chapter journey.</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary">Start reading →</p>
            </Link>

            {/* Contact Card */}
            <a href="https://wa.me/917042873035" className="group border border-white/10 p-8 hover:border-white/20 transition">
              <h3 className="font-semibold text-white">Talk to Us</h3>
              <p className="mt-4 text-sm text-white/65">Questions about hiring, recruiting, or anything else? Reach out directly on WhatsApp.</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary">Contact →</p>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
