import Link from "next/link"

const filterSteps = [
  "source ambitious early-career operators before the market can price them",
  "pressure-test voice, follow-through, coachability, and speed to clarity",
  "put only the sharpest through partner-specific sales simulations",
  "keep post-start signal flowing so hiring teams know who is compounding",
]

const selectedPeople = [
  {
    label: "01",
    title: "the closer",
    copy: "calm under pressure, direct on money, and able to move a stranger from doubt to decision without sounding rehearsed.",
  },
  {
    label: "02",
    title: "the prospector",
    copy: "high-activity, low-ego, and comfortable turning cold lists into booked conversations with daily consistency.",
  },
  {
    label: "03",
    title: "the account builder",
    copy: "patient enough to listen, commercial enough to qualify, and disciplined enough to protect pipeline quality.",
  },
]

const metrics = [
  { value: "10-14", label: "days to shortlist" },
  { value: "90", label: "day replacement window" },
  { value: "0", label: "upfront candidate fees" },
  { value: "1", label: "standard: hire for outcomes" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(215,178,103,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#070707_0%,_#0d0b08_54%,_#050505_100%)]" />

      <nav className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="yc-container py-5">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="text-[15px] font-semibold tracking-[0.22em] text-white uppercase">
              verveschool
            </Link>
            <div className="flex items-center gap-6 text-[13px] text-white/70">
              <Link href="/about" className="transition-colors hover:text-white">
                about
              </Link>
              <Link href="/partners" className="transition-colors hover:text-white">
                partners
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="yc-container">
        <section className="grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div>
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.36em] text-primary">
              sales talent filtering system
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.075em] text-white md:text-8xl lg:text-9xl">
              the world moves for those who do
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">
              verveschool finds, tests, and backs early-career sales talent for hiring partners who cannot afford another
              charming interview that turns into a weak pipeline.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#f4d18a]"
              >
                hire through the filter
              </Link>
              <a
                href="mailto:ayush@verveschool.com"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
              >
                talk to us
              </a>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="border border-white/10 bg-black/45 p-6">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/45">partner signal</p>
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

        <section className="border-y border-white/10 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="section-kicker">the hiring problem</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                sales hiring is noisy when everyone can perform confidence for forty minutes.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                "resumes reward polish, not conversion instinct.",
                "interviews select talkers before they reveal builders.",
                "bad entry sales hires cost managers time before revenue ever appears.",
              ].map((copy) => (
                <div key={copy} className="border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-base leading-7 text-white/70">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="section-kicker">the filter</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              we are not a classroom. we are a sorting mechanism.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Partners bring the role, market, and revenue motion. We return people who have already been tested for the
              behaviors that make junior sales hires worth a manager&apos;s time.
            </p>
          </div>
          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div key={step} className="grid grid-cols-[64px_1fr] gap-5 border border-white/10 bg-white/[0.03] p-5">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <p className="text-lg leading-8 text-white/78">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <p className="section-kicker">replacement guarantee</p>
              <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] text-white md:text-7xl">
                if the person does not perform, we replace them.
              </h2>
            </div>
            <div className="border border-primary/40 bg-primary/10 p-7">
              <p className="text-xl leading-9 text-white/78">
                The guarantee keeps the incentive structure clean: partners pay for durable sales capacity, not promises,
                certificates, or attendance. The filter is accountable after the hire starts.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">selected people</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                the candidates we let through look different in motion.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/58">
              Not a bench. Not a batch. Specific people selected for specific partner mandates.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {selectedPeople.map((person) => (
              <article key={person.title} className="border border-white/10 bg-white/[0.035] p-7">
                <p className="font-mono text-sm text-primary">{person.label}</p>
                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em] text-white">{person.title}</h3>
                <p className="mt-5 text-base leading-7 text-white/64">{person.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 border border-white/12 bg-white/[0.04] p-8 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="section-kicker">partner CTA</p>
              <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white md:text-7xl">
                stop interviewing hope. start hiring signal.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-white/70">
                If you are hiring entry sales talent, tell us the role, target market, ticket size, and manager bandwidth.
                We will show you who survives the filter.
              </p>
              <Link
                href="/partners"
                className="mt-8 inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#f4d18a]"
              >
                become a hiring partner
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="yc-container py-8">
          <div className="flex flex-col items-start justify-between gap-4 text-[13px] text-white/55 md:flex-row md:items-center">
            <p>© 2025 verveschool</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="transition-colors hover:text-white">
                about
              </Link>
              <Link href="/partners" className="transition-colors hover:text-white">
                partners
              </Link>
              <a href="mailto:ayush@verveschool.com" className="transition-colors hover:text-white">
                contact
              </a>
              <a
                href="https://wa.me/917065314693"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                whatsapp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
