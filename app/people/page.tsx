import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type PersonCard = {
  name: string
  subtitle: string
  image?: string
  linkedin?: string
}

const leadershipTeam: PersonCard[] = [
  { name: "Hashirama", subtitle: "Founder & CEO", linkedin: "https://www.linkedin.com" },
  { name: "Tobirama", subtitle: "Co-Founder & COO", linkedin: "https://www.linkedin.com" },
  { name: "Konan", subtitle: "Head of Talent", linkedin: "https://www.linkedin.com" },
  { name: "Mei Terumi", subtitle: "VP, Partnerships", linkedin: "https://www.linkedin.com" },
  { name: "Kurama", subtitle: "Director, Growth", linkedin: "https://www.linkedin.com" },
]

const talentPartners: PersonCard[] = [
  { name: "Meera Kapoor", subtitle: "Senior Talent Partner" },
  { name: "Rehan Ali", subtitle: "Talent Partner" },
  { name: "Tara Patel", subtitle: "Talent Partner" },
  { name: "Vikram S.", subtitle: "Associate Talent Partner" },
]

const industryPartners: PersonCard[] = [
  { name: "Aarav Menon", subtitle: "VP Sales, Northstar Labs", linkedin: "https://www.linkedin.com" },
  { name: "Isha Rao", subtitle: "Head of Revenue, Orbit Systems", linkedin: "https://www.linkedin.com" },
  { name: "Karan Bedi", subtitle: "Director GTM, Nimbus AI", linkedin: "https://www.linkedin.com" },
  { name: "Naina Khurana", subtitle: "Chief Growth Officer, Cedar Tech", linkedin: "https://www.linkedin.com" },
]

const membersPlaced: PersonCard[] = [
  { name: "Riya Sharma", subtitle: "Scaler" },
  { name: "Ananya G.", subtitle: "Rippling" },
  { name: "Ritvik P.", subtitle: "Postman" },
  { name: "Sana M.", subtitle: "Razorpay" },
  { name: "Dev R.", subtitle: "Freshworks" },
  { name: "Ira T.", subtitle: "CRED" },
]

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function ProfileCard({ person, clickable = false }: { person: PersonCard; clickable?: boolean }) {
  const cardBody = (
    <article className="rounded-xl border border-white/12 bg-white/[0.03] p-4 transition md:p-5">
      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-white/12 bg-white/[0.05]">
        {person.image ? (
          <img src={person.image} alt={`${person.name} photo`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xl font-semibold tracking-[-0.03em] text-white/70">
            {initialsFromName(person.name)}
          </div>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-base font-semibold tracking-[-0.02em] text-white">{person.name}</p>
        <p className="text-sm tracking-[-0.01em] text-white/65">{person.subtitle}</p>
      </div>
    </article>
  )

  if (clickable && person.linkedin) {
    return (
      <Link
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block opacity-95 transition hover:border-white/25 hover:opacity-100"
      >
        {cardBody}
      </Link>
    )
  }

  return cardBody
}

function PeopleSection({
  title,
  people,
  clickable = false,
}: {
  title: string
  people: PersonCard[]
  clickable?: boolean
}) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">{title}</h2>
      <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person) => (
          <ProfileCard key={`${title}-${person.name}`} person={person} clickable={clickable} />
        ))}
      </div>
    </section>
  )
}

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="yc-container space-y-14 py-14 md:space-y-16 md:py-20">
        <PeopleSection title="Leadership Team" people={leadershipTeam} clickable />
        <PeopleSection title="Talent Partners" people={talentPartners} />
        <PeopleSection title="Industry Partners" people={industryPartners} clickable />
        <PeopleSection title="Members Placed" people={membersPlaced} />
      </main>

      <SiteFooter />
    </div>
  )
}
