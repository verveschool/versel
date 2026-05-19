import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

type LeadershipMember = {
  name: string
  linkedin: string
  photo?: string
}

const leadershipTeam: LeadershipMember[] = [
  { name: "Hashirama", linkedin: "https://www.linkedin.com" },
  { name: "Tobirama", linkedin: "https://www.linkedin.com" },
  { name: "Konan", linkedin: "https://www.linkedin.com" },
  { name: "Mei Terumi", linkedin: "https://www.linkedin.com" },
  { name: "Kurama", linkedin: "https://www.linkedin.com" },
]

const talentScouts = ["Meera Kapoor", "Rehan Ali", "Tara Patel", "Vikram S."]

const placedPeople = ["Ananya G.", "Ritvik P.", "Sana M.", "Dev R.", "Ira T."]

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function PeoplePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,_rgba(127,139,153,0.18),_transparent_32%),radial-gradient(circle_at_90%_18%,_rgba(255,255,255,0.07),_transparent_25%),linear-gradient(180deg,_#050608_0%,_#0b0f14_58%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container py-20 md:py-28">
        <section className="border-b border-white/10 pb-14">
          <p className="section-kicker">people</p>
          <h1 className="mt-5 text-6xl font-semibold leading-[0.95] tracking-[-0.075em] text-white md:text-8xl lg:text-9xl">
            Leadership Team
          </h1>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member) => (
              <article
                key={member.name}
                className="group border border-white/10 bg-white/[0.035] p-6 transition hover:border-primary/45 hover:bg-white/[0.055]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.06]">
                    {member.photo ? (
                      <img src={member.photo} alt={`${member.name} photo`} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-lg font-semibold tracking-[-0.03em] text-white/80">
                        {initialsFromName(member.name)}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">{member.name}</h2>
                </div>

                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center border border-primary/35 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  LinkedIn Profile
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-14">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Business Head Spot</h2>
          <Link
            href="/partners"
            className="mt-6 inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#c5d3e0]"
          >
            Hiring Partners
          </Link>
        </section>

        <section className="border-b border-white/10 py-14">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Talent Scouts Team</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {talentScouts.map((scout) => (
              <li
                key={scout}
                className="border border-white/10 bg-white/[0.035] px-5 py-5 text-base font-medium tracking-[-0.01em] text-white/85"
              >
                {scout}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-14">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Placed People</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {placedPeople.map((person) => (
              <li
                key={person}
                className="border border-white/10 bg-white/[0.035] px-5 py-5 text-base font-medium tracking-[-0.01em] text-white/85"
              >
                {person}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
