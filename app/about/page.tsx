"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const sections = [
  { id: "world-moves", label: "the world moves for those who do" },
  { id: "resumes-fail", label: "why resumes fail" },
  { id: "interviews-polish", label: "why interviews overvalue polish" },
  { id: "filters", label: "what verveschool filters for" },
  { id: "selection-pressure", label: "how selection pressure works" },
  { id: "ninety-day-window", label: "why the ninety-day window matters" },
  { id: "what-companies-buy", label: "what companies actually buy" },
  { id: "final-cta", label: "where to go next" },
]

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id

      sections.forEach(({ id }) => {
        const section = document.querySelector(`[data-section="${id}"]`)
        const rect = section?.getBoundingClientRect()

        if (rect && rect.top < 200) {
          current = id
        }
      })

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="yc-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[15px] font-medium">
              verveschool
            </Link>
            <Link href="/about" className="text-[13px] font-medium md:hidden">
              about
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <main className="yc-container py-20 flex-1 md:py-20 md:pt-20 pt-8">
          {/* Header */}
          <div className="mb-24 max-w-4xl">
            <p className="text-[13px] mb-4">verveschool.com/about</p>
            <h1 className="mb-6">the world moves for those who do</h1>
            <p className="text-[18px] leading-relaxed max-w-3xl">
              verveschool is a filter for people who move before the room gives them permission. we are not here to
              decorate resumes. we exist to turn hidden execution capacity into obvious hiring signal.
            </p>
          </div>

          <section className="yc-section" data-section="world-moves">
            <h2>the world moves for those who do</h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <p className="mb-6">
                  most people wait for a cleaner story. a better college name. a perfect cv. a warmer introduction. a
                  market that finally recognizes them. while they wait, someone less credentialed but more decisive
                  starts making calls, taking feedback, and becoming hard to ignore.
                </p>
                <p>
                  verveschool is built on a simple belief: motion reveals more truth than self-description. if you can
                  move under pressure, learn in public, and keep your word when the first week gets uncomfortable, you
                  are already carrying the raw material companies are trying to find.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  we are interested in the person who does not need the world to be fair before they begin. the person
                  who can be scared and still make the next call. the person who treats rejection as data instead of a
                  verdict.
                </p>
                <p className="font-bold">the world does not move for potential. it moves for demonstrated agency.</p>
              </div>
            </div>
          </section>

          <section className="yc-section" data-section="resumes-fail">
            <h2>why resumes fail</h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <p className="mb-6">
                  resumes are compressed biographies. they reward pedigree, formatting, keyword density, and the ability
                  to make ordinary work sound strategic. they are useful for sorting, but terrible at seeing who will
                  actually survive the first thirty days of a revenue role.
                </p>
                <p>
                  the strongest early-career operators often look unimpressive on paper. they may have gaps, average
                  colleges, uneven english, or no polished internship story. what they do have is harder to write down:
                  urgency, stamina, memory, social awareness, and the ability to correct course quickly.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  companies do not lose money because a resume had the wrong font. they lose money because the person
                  behind it could not handle ambiguity, could not ask uncomfortable questions, or could not improve when
                  reality contradicted the script.
                </p>
                <p className="font-bold">
                  a resume can tell you where someone has been. it cannot tell you how they behave when the room turns
                  cold.
                </p>
              </div>
            </div>
          </section>

          <section className="yc-section" data-section="interviews-polish">
            <h2>why interviews overvalue polish</h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <p className="mb-6">
                  interviews are supposed to test judgment. too often they test rehearsal. the candidate who has watched
                  enough videos knows how to smile, mirror the interviewer, and give the approved answer about hard work
                  and growth mindset.
                </p>
                <p>
                  polish is not useless. clear speech, respect, and structure matter. the mistake is confusing polish
                  with durability. a calm answer in a thirty-minute interview does not prove someone can keep composure
                  after fifty ignored calls, two angry prospects, and a manager asking why the pipeline is empty.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  verveschool looks past the performance layer. we care less about whether someone sounds impressive on
                  the first attempt and more about what happens after friction: do they listen, adapt, recover, and come
                  back sharper.
                </p>
                <p className="font-bold">real signal appears when the script breaks.</p>
              </div>
            </div>
          </section>

          <section className="yc-section" data-section="filters">
            <h2>what verveschool filters for</h2>
            <div className="space-y-16">
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3>agency</h3>
                  <p>
                    does the candidate act without needing constant permission. do they find the next step when the
                    instructions are incomplete. do they own the outcome instead of narrating the obstacle.
                  </p>
                </div>
                <div>
                  <h3>rate of learning</h3>
                  <p>
                    can they absorb a correction and make it visible in the next attempt. fast learning beats perfect
                    starting points because the job changes every day.
                  </p>
                </div>
                <div>
                  <h3>commercial empathy</h3>
                  <p>
                    can they see the buyer, the manager, and the company as people with risk, time pressure, and hidden
                    incentives. selling begins when self-obsession ends.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3>pressure tolerance</h3>
                  <p>
                    can they stay useful when rejected, corrected, or watched. the work is not cruel, but it is honest,
                    and honesty creates pressure.
                  </p>
                </div>
                <div>
                  <h3>truthfulness</h3>
                  <p>
                    can they report what happened without hiding behind excuses. clean feedback loops depend on clean
                    facts.
                  </p>
                </div>
                <div>
                  <h3>hunger with manners</h3>
                  <p>
                    ambition matters. so does taste. we look for people who want to win without becoming careless,
                    entitled, or theatrical.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="yc-section" data-section="selection-pressure">
            <h2>how selection pressure works</h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <p className="mb-6">
                  verveschool is not an open enrollment funnel. selection pressure is the product. every stage asks a
                  sharper question: did you prepare, did you move fast, did you understand the role, did you improve
                  after feedback, did your behavior match your ambition.
                </p>
                <p>
                  the point is not to make people nervous for sport. the point is to create a small, honest simulation
                  of the job before a company takes the risk. if someone disappears, blames, delays, or performs effort
                  without outcomes during selection, that is useful information.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  when someone clears, the signal is stronger because it has already passed through friction. they have
                  shown speed, coachability, and the ability to turn attention into action.
                </p>
                <p>
                  any training we provide exists as internal infrastructure around that filter. it protects the
                  replacement guarantee by helping selected people translate raw traits into on-the-job execution.
                </p>
              </div>
            </div>
          </section>

          <section className="yc-section" data-section="ninety-day-window">
            <h2>why the ninety-day window matters</h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <p className="mb-6">
                  the first ninety days are where the truth comes out. before that, hiring is mostly belief. after that,
                  the company knows whether the person can show up, absorb the product, speak to customers, take
                  correction, and create momentum without being dragged.
                </p>
                <p>
                  this window matters because habits harden quickly. a new hire either learns to treat every call,
                  review, miss, and small win as signal, or they learn to hide from the scoreboard.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  verveschool designs for that window. the goal is not a certificate moment. the goal is replacement
                  confidence: if a selected candidate does not work, the company should not be left alone with the cost
                  of a bad bet.
                </p>
                <p className="font-bold">
                  ninety days is long enough for reality to speak and short enough for speed to still matter.
                </p>
              </div>
            </div>
          </section>

          <section className="yc-section" data-section="what-companies-buy">
            <h2>what companies actually buy: signal, replacement confidence, and speed</h2>
            <div className="space-y-16">
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3>signal</h3>
                  <p>
                    companies buy a clearer read on who can execute. they want fewer false positives, fewer candidates
                    who only interview well, and more people whose behavior has already been tested against pressure.
                  </p>
                </div>
                <div>
                  <h3>replacement confidence</h3>
                  <p>
                    companies buy downside protection. the guarantee matters because hiring mistakes are expensive, and
                    a partner should share responsibility for the quality of the bet.
                  </p>
                </div>
                <div>
                  <h3>speed</h3>
                  <p>
                    companies buy time. they need people who can enter the floor quickly, understand the work, and begin
                    compounding feedback before the quarter is gone.
                  </p>
                </div>
              </div>
              <div className="yc-text-block">
                <p>
                  that is why verveschool is not trying to look like a campus, a course, or a placement agency. we are a
                  trust layer between ambition and revenue teams: narrow enough to be selective, close enough to be
                  accountable, and fast enough to matter.
                </p>
              </div>
            </div>
          </section>

          <section className="yc-section" data-section="final-cta">
            <h2>where to go next</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/partners" className="border border-border p-6 hover:bg-muted transition-colors">
                <h3>for companies</h3>
                <p>see how verveschool reduces hiring risk and protects early ramp with sharper signal.</p>
              </Link>
              <Link href="/people" className="border border-border p-6 hover:bg-muted transition-colors">
                <h3>for people</h3>
                <p>see who we bet on, what we expect, and why movement matters more than credentials.</p>
              </Link>
              <Link href="/essays" className="border border-border p-6 hover:bg-muted transition-colors">
                <h3>for readers</h3>
                <p>read the operating philosophy behind selection, work, selling, and becoming undeniable.</p>
              </Link>
            </div>
          </section>
        </main>

        <aside className="hidden md:block sticky top-20 pt-20 pb-20 px-6 h-screen overflow-y-auto flex-shrink-0 border-l border-border">
          <div className="text-[12px] font-medium text-muted-foreground mb-4">on this page</div>
          <ul className="space-y-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    const element = document.querySelector(`[data-section="${id}"]`)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`text-[13px] text-left hover:text-primary transition-colors ${
                    activeSection === id ? "font-bold text-primary" : "text-foreground"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="yc-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[13px] text-foreground">
            <p>© 2025 verveschool</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-muted-foreground">
                about
              </Link>
              <Link href="/partners" className="hover:text-muted-foreground">
                partners
              </Link>
              <Link href="/people" className="hover:text-muted-foreground">
                people
              </Link>
              <Link href="/essays" className="hover:text-muted-foreground">
                essays
              </Link>
              <a href="mailto:ayush@verveschool.com" className="hover:text-muted-foreground">
                contact
              </a>
              <a href="https://wa.me/917065314693" className="hover:text-muted-foreground">
                whatsapp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
