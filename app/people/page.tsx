import type { Metadata } from "next"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type PersonCard = {
  name: string
  subtitle: string
  image?: string
  linkedin?: string
}

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the VerveSchool leadership, talent partners, and industry advisors helping candidates and hiring teams build better sales outcomes.",
  alternates: {
    canonical: "/people",
  },
  openGraph: {
    title: "People",
    description:
      "Meet the VerveSchool leadership, talent partners, and industry advisors helping candidates and hiring teams build better sales outcomes.",
    url: "/people",
  },
  twitter: {
    title: "People",
    description:
      "Meet the VerveSchool leadership, talent partners, and industry advisors helping candidates and hiring teams build better sales outcomes.",
  },
}



const leadershipTeam: PersonCard[] = [
  { name: "A. Duggal", subtitle: "Co-founder, CEO", linkedin: "https://www.linkedin.com/in/okduggal/" },
  { name: "Faraz Arif", subtitle: "Co-founder, COO", linkedin: "https://www.linkedin.com/in/arif-faraz/" },
  { name: "Bhushan Kawale", subtitle: "Chief Business Officer", linkedin: "https://www.linkedin.com/in/bhushan-kawale-200220279/" },
  { name: "Zubia Shah", subtitle: "Chief of Staff", linkedin: "https://www.linkedin.com/in/zubia-shah-11332a228/" },
  { name: "Meehika Singh", subtitle: "Founder's Office", linkedin: "https://www.linkedin.com/in/meehika-singh-ab490b282/" },
]

const talentPartners: PersonCard[] = [
  { name: "Meera Kapoor", subtitle: "Senior Talent Partner" },
  { name: "Rehan Ali", subtitle: "Talent Partner" },
  { name: "Tara Patel", subtitle: "Talent Partner" },
  { name: "Vikram S.", subtitle: "Associate Talent Partner" },
]

const industryPartners: PersonCard[] = [
  { name: "Shrimn Nishit", subtitle: "SVP & Business Head, Vedantu", linkedin: "https://www.linkedin.com/in/shrimnnishit/" },
  { name: "Nitin Solanki", subtitle: "SVP Business Development, Scaler", linkedin: "https://www.linkedin.com/in/nitin-solanki-b245b714a/" },
  { name: "Atul Kumar Singh", subtitle: "Business Head, Infinity Learn", linkedin: "https://www.linkedin.com/in/atul-kumar-singh-71b49272/" },
  { name: "Krishna Bandaru", subtitle: "Co-founder, Crio.do", linkedin: "https://www.linkedin.com/in/krishnabandaru/" },
  { name: "Sagar Dudani", subtitle: "Co-founder, Prepca", linkedin: "https://www.linkedin.com/in/sagar-dudani-b33b4aaa/" },
  { name: "Ravi Kumar Gupta", subtitle: "Co-founder, AlmaBetter", linkedin: "https://www.linkedin.com/in/ravi-kumar-gupta/" },
  { name: "Nikhil Kaushik", subtitle: "Co-founder, ProjectStudio", linkedin: "https://www.linkedin.com/in/nikhilka/" },
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
      <h2 className="font-semibold text-white">{title}</h2>
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
        <PeopleSection title="Talent Ops" people={talentPartners} />
        <PeopleSection title="Industry Partners & Advisors" people={industryPartners} clickable />
        <PeopleSection title="Placed Members" people={membersPlaced} />
      </main>

      <SiteFooter />
    </div>
  )
}
