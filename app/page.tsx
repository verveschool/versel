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
  title: "VerveSchool - Hire sincere talent that can connect and sell",
  description:
    "VerveSchool helps companies hire customer-facing talent through an active scout network. Fast sourcing, role fit matching, and 60-day replacement coverage.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VerveSchool - Hire sincere talent that can connect and sell",
    description:
      "VerveSchool helps companies hire customer-facing talent through an active scout network. Fast sourcing, role fit matching, and 60-day replacement coverage.",
    url: "/",
  },
  twitter: {
    title: "VerveSchool - Hire sincere talent that can connect and sell",
    description:
      "VerveSchool helps companies hire customer-facing talent through an active scout network. Fast sourcing, role fit matching, and 60-day replacement coverage.",
  },
}

const metrics = [
  { value: "10%", label: "Fee on CTC" },
  { value: "60", label: "Days of replacement coverage" },
  { value: "5+", label: "Candidates ready to interview" },
  { value: "₹0", label: "Upfront fees" },
]

const hiringPartners = [
  { name: "Prepca", src: "/logos/prepca.png", className: "h-10 w-auto" },
  { name: "Infinity Learn", src: "/logos/infinity-learn.png", className: "h-10 w-auto" },
  { name: "Vedantu", src: "/logos/vedantu.png", className: "h-10 w-auto" },
  { name: "AlmaBetter", src: "/logos/almabetter.png", className: "h-10 w-auto" },
  { name: "Crio.Do", src: "/logos/crio-do.png", className: "h-10 w-auto" },
  { name: "Scaler", src: "/logos/scaler.png", className: "h-10 w-auto" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0b0f14_54%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container">
        <section className="grid min-h-[74vh] items-center gap-12 py-16 lg:grid-cols-[1.16fr_0.84fr] lg:py-24">
          <div>
            <h1 className="max-w-4xl text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)] font-semibold leading-[1.08] text-white">
              Hire talent that can sell.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl md:leading-9">
              VerveSchool helps companies hire customer-facing talent through an active scout network built for speed and long-term fit.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-black transition hover:opacity-90"
              >
                Hire sincere talent
              </Link>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold tracking-normal text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-transparent p-6 transition-colors hover:border-white/20">
            <div className="space-y-5">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-end justify-between border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="text-3xl font-semibold tracking-[-0.025em] text-white">
                    {metric.value}
                  </span>
                  <span className="max-w-36 text-right text-[12px] leading-5 text-white/52">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-16 md:py-24">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {hiringPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 items-center justify-center border border-white/15 px-4 transition-colors hover:border-white/25"
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
        </section>

        <section className="grid gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="text-white font-semibold">
              How hiring works with VerveSchool
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Partners share role details and hiring constraints. Our team filters and aligns candidates who are serious and ready to join.
            </p>
          </div>

          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[64px_1fr] gap-5 border border-white/10 px-5 py-4 transition-colors hover:border-white/20"
              >
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <p className="leading-8 text-white/75">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24 border-t border-white/10 pt-24">
          <h2 className="mb-12 font-semibold text-white">
            Explore VerveSchool
          </h2>

          <div className="divide-y divide-white/10">
            <Link href="/about" className="group flex items-center justify-between py-10 transition-colors">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-white">Candidates</h3>
                <p className="mt-3 leading-8 text-white/65">
                  Apply for customer-facing roles with companies that value communication, ownership, and long-term growth.
                </p>
              </div>
              <span className="text-sm text-primary transition group-hover:translate-x-1">
                Explore →
              </span>
            </Link>

            <Link href="/partners" className="group flex items-center justify-between py-10 transition-colors">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-white">Hiring partners</h3>
                <p className="mt-3 leading-8 text-white/65">
                  Hire customer-facing talent through an active scout network built for speed, role alignment, and replacement coverage.
                </p>
              </div>
              <span className="text-sm text-primary transition group-hover:translate-x-1">
                Explore →
              </span>
            </Link>

            <Link href="/people" className="group flex items-center justify-between py-10 transition-colors">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-white">People</h3>
                <p className="mt-3 leading-8 text-white/65">
                  Meet the people building VerveSchool and the principles guiding every hiring decision.
                </p>
              </div>
              <span className="text-sm text-primary transition group-hover:translate-x-1">
                Explore →
              </span>
            </Link>

            <Link href="/writing" className="group flex items-center justify-between py-10 transition-colors">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-white">Essays</h3>
                <p className="mt-3 leading-8 text-white/65">
                  Essays on hiring, sales, communication, and building organizations that last.
                </p>
              </div>
              <span className="text-sm text-primary transition group-hover:translate-x-1">
                Read →
              </span>
            </Link>

            <Link href="/book" className="group flex items-center justify-between py-10 transition-colors">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-white">Book</h3>
                <p className="mt-3 leading-8 text-white/65">
                  An ongoing book capturing the philosophy behind communication, sales, hiring, and building exceptional customer-facing teams.
                </p>
              </div>
              <span className="text-sm text-primary transition group-hover:translate-x-1">
                Read →
              </span>
            </Link>

            <a href="https://wa.me/917042873035" className="group flex items-center justify-between py-10 transition-colors">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-white">Talk to us</h3>
                <p className="mt-3 leading-8 text-white/65">
                  Questions about hiring, recruiting, or anything else? Reach out directly on WhatsApp.
                </p>
              </div>
              <span className="text-sm text-primary transition group-hover:translate-x-1">
                Contact →
              </span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
