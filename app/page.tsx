import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
const metrics = [
  { value: "10%", label: "Placement fee on fixed CTC" },
  { value: "60", label: "Day replacement coverage" },
  { value: "5+", label: "Role-aligned candidates from Day 1" },
  { value: "₹0", label: "Upfront hiring fees" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0b0f14_54%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container">
        <section className="grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Hire sincere sales talent for edtech teams.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">
              VerveSchool helps edtech companies hire sincere candidates for sales and counselling roles through an active talent scout network.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#c5d3e0]"
              >
                Hire sincere sales talent
              </Link>
              <a
                href="mailto:talent@verveschool.com"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="border border-white/10 bg-black/45 p-6">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/45">partner terms</p>
              <div className="mt-8 space-y-5">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-end justify-between border-b border-white/10 pb-5">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-white">{metric.value}</span>
                    <span className="max-w-36 text-right text-[12px] uppercase leading-5 tracking-[0.18em] text-white/52">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>








      </main>
      <SiteFooter />
    </div>
  )
}
