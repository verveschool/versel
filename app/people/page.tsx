import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

const selectedPeople = [
  {
    name: "Aarav M.",
    signal: "Calm closer with clean discovery habits and strong follow-through after first calls.",
    status: "Active shortlist",
    placement: "B2C inside sales mandates, Bengaluru / remote",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Nisha R.",
    signal: "High-activity prospector who keeps messaging tight, asks for feedback, and recovers fast after no.",
    status: "Partner interviews",
    placement: "SDR and admissions counselling roles, Mumbai",
  },
  {
    name: "Kabir S.",
    signal: "Patient listener with a sharp qualification instinct and unusually disciplined CRM hygiene.",
    status: "Placed",
    placement: "Growth-stage education sales team",
  },
  {
    name: "Meera K.",
    signal: "Direct communicator who can hold price conversations without rushing the buyer or over-talking.",
    status: "Available",
    placement: "Inside sales, high-ticket counselling, Delhi NCR",
  },
  {
    name: "Rehan A.",
    signal: "Operator profile: consistent activity, low ego, fast script iteration, and no drama around targets.",
    status: "Ramp monitoring",
    placement: "Recently joined partner floor; 30-day signal in review",
  },
  {
    name: "Tara P.",
    signal: "Clear voice, strong objection notes, and the rare ability to slow down when calls get tense.",
    status: "Selected",
    placement: "Awaiting partner-specific simulation",
  },
]

const selectionSignals = [
  "listening quality under pressure",
  "daily activity without manager theatre",
  "coachability after direct feedback",
  "commercial judgement before polish",
]

export default function PeoplePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,_rgba(215,178,103,0.18),_transparent_32%),radial-gradient(circle_at_90%_18%,_rgba(255,255,255,0.07),_transparent_25%),linear-gradient(180deg,_#050505_0%,_#0d0b08_58%,_#030303_100%)]" />

      <SiteHeader />

      <main className="yc-container">
        <section className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-kicker">selected people</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.075em] text-white md:text-8xl lg:text-9xl">
              people who do, not people who perform polish.
            </h1>
          </div>
          <div className="border border-white/12 bg-white/[0.04] p-7 shadow-2xl shadow-black/40 backdrop-blur">
            <p className="text-xl leading-9 text-white/72">
              This is a living view of operators who have moved through selection pressure. Some are active, some are in
              partner interviews, and some are already on a floor with performance signal being watched.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {selectionSignals.map((signal) => (
                <div key={signal} className="border border-white/10 bg-black/35 px-4 py-3">
                  <p className="text-[12px] uppercase leading-5 tracking-[0.18em] text-white/58">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-16 md:py-20">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">current board</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                names, signal, and where each person currently sits.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/58">
              Placements are shown only where they can be shared. For active mandates, the useful detail is readiness,
              city fit, and the sales motion they are being matched against.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {selectedPeople.map((person) => (
              <article
                key={person.name}
                className="group border border-white/10 bg-white/[0.035] p-6 transition hover:border-primary/50 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_50%_30%,_rgba(247,240,223,0.22),_transparent_30%),linear-gradient(180deg,_rgba(215,178,103,0.22),_rgba(255,255,255,0.04))]">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={`${person.name} profile`}
                        className="h-full w-full object-cover opacity-75 grayscale"
                      />
                    ) : (
                      <span className="text-2xl font-semibold tracking-[-0.06em] text-white/70">
                        {person.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                  <span className="border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {person.status}
                  </span>
                </div>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-white">{person.name}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{person.signal}</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/38">
                    placement / status
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">{person.placement}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">for partners</p>
            <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] text-white md:text-7xl">
              ask for signal, not a pile of resumes.
            </h2>
          </div>
          <div className="border border-primary/35 bg-primary/10 p-8 md:p-10">
            <p className="text-lg leading-8 text-white/76">
              Tell us the role, market, language needs, manager bandwidth, and the behavior that makes someone survive
              your floor. We will map selected operators against the actual work.
            </p>
            <Link
              href="/partners"
              className="mt-8 inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#f4d18a]"
            >
              hire selected people
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
