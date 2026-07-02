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
  {
    name: "A. Duggal",
    subtitle: "Co-founder, CEO",
    image: "/people/a-duggal.jpg",
    linkedin: "https://www.linkedin.com/in/okduggal/",
  },
  {
    name: "Faraz Arif",
    subtitle: "Co-founder, COO",
    image: "/people/faraz-arif.jpg",
    linkedin: "https://www.linkedin.com/in/arif-faraz/",
  },
  {
    name: "Bhushan Kawale",
    subtitle: "Chief Business Officer",
    image: "/people/bhushan-kawale.jpg",
    linkedin: "https://www.linkedin.com/in/bhushan-kawale-200220279/",
  },
  {
    name: "Zubia Shah",
    subtitle: "Chief of Staff",
    image: "/people/zubia-shah.jpg",
    linkedin: "https://www.linkedin.com/in/zubia-shah-11332a228/",
  },
  {
    name: "Meehika Singh",
    subtitle: "Founder's Office",
    image: "/people/meehika-singh.jpg",
    linkedin: "https://www.linkedin.com/in/meehika-singh-ab490b282/",
  },
]

const talentPartners: PersonCard[] = [
  { name: "Khushi Soni", subtitle: "Talent Operations", image: "/people/khushi-soni.jpg" },
  { name: "Laiba Zafar", subtitle: "Talent Operations", image: "/people/laiba-zafar.jpg" },
  { name: "Garima Gandhi", subtitle: "Talent Operations", image: "/people/garima-gandhi.jpg" },
  { name: "Aditi Sahu", subtitle: "Talent Operations", image: "/people/aditi-sahu.jpg" },
  { name: "Zubda Sajda", subtitle: "Talent Operations", image: "/people/zubda-sajda.jpg" },
  { name: "Gopika K.", subtitle: "Talent Operations", image: "/people/gopika-k.jpg" },
  { name: "Shahida Arif", subtitle: "Talent Operations", image: "/people/shahida-arif.jpg" },
]

const industryPartners: PersonCard[] = [
  {
    name: "Shrimn Nishit",
    subtitle: "Business Head, Vedantu",
    image: "/people/shrimn-nishit.jpg",
    linkedin: "https://www.linkedin.com/in/shrimnnishit/",
  },
  {
    name: "Nitin Solanki",
    subtitle: "Business Head, Scaler",
    image: "/people/nitin-solanki.jpg",
    linkedin: "https://www.linkedin.com/in/nitin-solanki-b245b714a/",
  },
  {
    name: "Atul Kumar Singh",
    subtitle: "Business Head, Infinity Learn",
    image: "/people/atul-kumar-singh.jpg",
    linkedin: "https://www.linkedin.com/in/atul-kumar-singh-71b49272/",
  },
  {
    name: "Krishna Bandaru",
    subtitle: "Co-founder, Crio.do",
    image: "/people/krishna-bandaru.jpg",
    linkedin: "https://www.linkedin.com/in/krishnabandaru/",
  },
  {
    name: "Sagar Dudani",
    subtitle: "Co-founder, Prepca",
    image: "/people/sagar-dudani.jpg",
    linkedin: "https://www.linkedin.com/in/sagar-dudani-b33b4aaa/",
  },
  {
    name: "Ravi Kumar Gupta",
    subtitle: "Co-founder, AlmaBetter",
    image: "/people/ravi-kumar-gupta.jpg",
    linkedin: "https://www.linkedin.com/in/ravi-kumar-gupta/",
  },
  {
    name: "Nikhil Kaushik",
    subtitle: "Co-founder, ProjectStudio",
    image: "/people/nikhil-kaushik.jpg",
    linkedin: "https://www.linkedin.com/in/nikhilka/",
  },
  {
    name: "Madara Uchiha",
    subtitle: "Co-founder, Konohagakure",
    image: "/people/madara-uchiha.jpg",
    linkedin: "https://en.wikipedia.org/wiki/Madara_Uchiha/",
  },
  {
    name: "Yashwardhan Burad",
    subtitle: "Co-founder, AccioJob",
    image: "/people/yashwardhan-burad.jpg",
    linkedin: "https://www.linkedin.com/in/yashwardhanburad/",
  },
  {
    name: "Faiz Ahmad",
    subtitle: "Tech Lead, [24]7.ai",
    image: "/people/faiz-ahmed.jpg",
    linkedin: "https://www.linkedin.com/in/faizzahd/",
  },
  {
    name: "Arindam Dutta",
    subtitle: "Business Head, Academically",
    image: "/people/arindam-dutta.jpg",
    linkedin: "https://www.linkedin.com/in/arindam-dutta-04109954/",
  },
  {
    name: "Ronak Agrawal",
    subtitle: "Co-founder, SkilloVilla",
    image: "/people/ronak-agarwal.jpg",
    linkedin: "https://www.linkedin.com/in/ronak-agrawal-88066432/",
  },
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

function ProfileCard({
  person,
  clickable = false,
  className = "",
}: {
  person: PersonCard
  clickable?: boolean
  className?: string
}) {
  const articleClassName =
    "rounded-xl border border-white/10 bg-transparent p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-white/50"
  const standaloneArticleClassName = `${className} ${articleClassName}`.trim()

  const content = (
    <>
      <div className="mx-auto aspect-square w-28 overflow-hidden rounded-lg sm:w-32 md:w-36">
        {person.image ? (
          <img src={person.image} alt={`${person.name} photo`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="rounded-md bg-white/5 px-3 py-1.5 text-sm font-medium tracking-[-0.01em] text-white/70">
              {initialsFromName(person.name)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-1.5 px-0.5">
        <p className="text-[15px] font-medium leading-5 tracking-[-0.01em] text-white">{person.name}</p>
        <p className="text-sm leading-5 text-white/65">{person.subtitle}</p>
      </div>
    </>
  )

  if (clickable && person.linkedin) {
    return (
      <Link
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} block opacity-95 transition hover:opacity-100`.trim()}
      >
        <article className={articleClassName}>{content}</article>
      </Link>
    )
  }

  return <article className={standaloneArticleClassName}>{content}</article>
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
    <section className="space-y-6 md:space-y-7">
      <h2 className="text-lg font-medium tracking-[-0.01em] text-white/95">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
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
        <section className="max-w-4xl space-y-6">
          <h1 className="font-semibold text-white">People</h1>
          <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg md:leading-9">
            Behind every hire is a unit building VerveSchool each day and an alliance of founders, operators, and hiring leaders who have shaped the journey.
          </p>
        </section>

        <PeopleSection title="The Unit" people={[...leadershipTeam, ...talentPartners]} clickable />
        <PeopleSection title="The Alliance" people={industryPartners} clickable />
      </main>

      <SiteFooter />
    </div>
  )
}
