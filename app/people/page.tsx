import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type PersonCard = {
  name: string
  subtitle: string
  image?: string
  focalPoint?: string
  linkedin?: string
}

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the Verveschool leadership, talent partners, and industry advisors helping candidates and hiring teams build better sales outcomes.",
  alternates: {
    canonical: "/people",
  },
  openGraph: {
    title: "People | Verveschool",
    description:
      "Meet the Verveschool leadership, talent partners, and industry advisors helping candidates and hiring teams build better sales outcomes.",
    url: "/people",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 600,
        alt: "Verveschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "People | Verveschool",
    description:
      "Meet the Verveschool leadership, talent partners, and industry advisors helping candidates and hiring teams build better sales outcomes.",
    images: ["/social.png"],
  },
}

const leadershipTeam: PersonCard[] = [
  {
    name: "A. Duggal",
    subtitle: "Co-founder",
    image: "/people/a-duggal.jpg",
    linkedin: "https://www.linkedin.com/in/okduggal/",
  },
  {
    name: "Faraz Arif",
    subtitle: "Co-founder",
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
  {
    name: "Hadia Rehman",
    subtitle: "Founder's Office",
    image: "/people/hadia-rehman.jpg",
    linkedin: "https://www.linkedin.com/in/hadia-r-7065723b2/",
  },
  
]

const talentPartners: PersonCard[] = [
  
  { name: "Garima Gandhi", subtitle: "Talent Operations", image: "/people/garima-gandhi.jpg", linkedin: "https://www.linkedin.com/in/garima-gandhi222", },
  { name: "Shahida Arif", subtitle: "Talent Operations", image: "/people/shahida-arif.jpg", linkedin: "https://www.linkedin.com/in/shahida-p-a-", },
  { name: "Tamanna Jain", subtitle: "Talent Operations", image: "/people/tamanna-jain.jpeg", linkedin: "https://www.linkedin.com/in/tamanna-jain-176341411", },
  { name: "Upashna Khawas", subtitle: "Talent Operations", image: "/people/upashna-khawas.jpeg", linkedin: "https://www.linkedin.com/in/upashna-khawas-aa0851414/", },
  { name: "Zubda Sajda", subtitle: "Talent Operations", image: "/people/zubda-sajda.jpg", linkedin: "https://www.linkedin.com/in/zubda-sajda-2bb200116", },
  { name: "Nafisha Israr", subtitle: "Talent Operations", image: "/people/nafisha-israr.jpg", linkedin: "https://www.linkedin.com/in/nafisha-israr-2255ab383", },
]

const industryPartners: PersonCard[] = [
  {
    name: "Shrimn Nishit",
    subtitle: "Business Head, Vedantu",
    image: "/people/shrimn-nishit.jpg",
    linkedin: "https://www.linkedin.com/in/shrimnnishit",
  },
  {
    name: "Nitin Solanki",
    subtitle: "Business Head, Scaler",
    image: "/people/nitin-solanki.jpg",
    linkedin: "https://www.linkedin.com/in/nitin-solanki-b245b714a",
  },
  {
    name: "Atul Kumar Singh",
    subtitle: "Business Head, Infinity Learn",
    image: "/people/atul-kumar-singh.jpg",
    linkedin: "https://www.linkedin.com/in/atul-kumar-singh-71b49272",
  },
  {
    name: "Krishna Bandaru",
    subtitle: "Co-founder, Crio.do",
    image: "/people/krishna-bandaru.jpg",
    linkedin: "https://www.linkedin.com/in/krishnabandaru",
  },
  {
    name: "Sagar Dudani",
    subtitle: "Co-founder, Prepca",
    image: "/people/sagar-dudani.jpg",
    linkedin: "https://www.linkedin.com/in/sagar-dudani-b33b4aaa",
  },
  {
    name: "Ravi Kumar Gupta",
    subtitle: "Co-founder, AlmaBetter",
    image: "/people/ravi-kumar-gupta.jpg",
    linkedin: "https://www.linkedin.com/in/ravi-kumar-gupta",
  },
  {
    name: "Nikhil Kaushik",
    subtitle: "Co-founder, ProjectStudio",
    image: "/people/nikhil-kaushik.jpg",
    linkedin: "https://www.linkedin.com/in/nikhilka",
  },
  {
    name: "Yashwardhan Burad",
    subtitle: "Co-founder, AccioJob",
    image: "/people/yashwardhan-burad.jpg",
    linkedin: "https://www.linkedin.com/in/yashwardhanburad",
  },
  {
    name: "Faiz Ahmad",
    subtitle: "Tech Lead, [24]7.ai",
    image: "/people/faiz-ahmed.jpg",
    linkedin: "https://www.linkedin.com/in/faizzahd",
  },
  {
    name: "Arindam Dutta",
    subtitle: "Business Head, Academically",
    image: "/people/arindam-dutta.jpg",
    linkedin: "https://www.linkedin.com/in/arindam-dutta-04109954",
  },
  {
    name: "Ronak Agrawal",
    subtitle: "Co-founder, SkilloVilla",
    image: "/people/ronak-agarwal.jpg",
    linkedin: "https://www.linkedin.com/in/ronak-agrawal-88066432",
  },
  {
    name: "Mrinal Anand",
    subtitle: "Business Head, Interview Lift",
    image: "/people/mrinal-anand.jpeg",
    linkedin: "https://www.linkedin.com/in/mrinalanand238",
  },
  {
    name: "Madhan Kumar",
    subtitle: "AGM, Infinity Learn",
    image: "/people/madhan-kumar.jpeg",
    linkedin: "https://www.linkedin.com/in/madhan-kumar-gupta-5067b0120",
  },
  {
    name: "Gaurav Mittal",
    subtitle: "Co-founder, Karma Miles",
    image: "/people/gaurav-mittal.jpeg",
    linkedin: "https://www.linkedin.com/in/gvmittal",
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

function PeopleGroup({ title, people }: { title: string; people: PersonCard[] }) {
  return (
    <div>
      <h3 className="people-group-title">{title}</h3>
      <ul className="people-grid">
        {people.map((person) => (
          <li key={person.name}>
            <article>
              <div className="portrait">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt=""
                    fill
                    sizes="(max-width: 480px) 44vw, (max-width: 740px) 29vw, (max-width: 992px) 22vw, 190px"
                    style={{ objectPosition: person.focalPoint ?? "center" }}
                  />
                ) : <span aria-hidden="true">{initialsFromName(person.name)}</span>}
              </div>
              <h4>
                {person.linkedin ? (
                  <Link href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    {person.name}<span className="sr-only"> on LinkedIn</span> <span aria-hidden="true">↗</span>
                  </Link>
                ) : person.name}
              </h4>
              <p>{person.subtitle}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="upgrade-main people-page">
        <header>
          <h1>People</h1>
          <p className="page-lede">Meet the Verveschool team and people from the industries we work with.</p>
        </header>
        <section className="upgrade-section people-section" aria-labelledby="unit-title">
          <h2 id="unit-title">The Unit</h2>
          <PeopleGroup title="Leadership and Founder’s Office" people={leadershipTeam} />
          <PeopleGroup title="Talent Operations" people={talentPartners} />
        </section>
        <section className="upgrade-section people-section" aria-labelledby="alliance-title">
          <h2 id="alliance-title">The Alliance</h2>
          <PeopleGroup title="Industry partners" people={industryPartners} />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
