import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="yc-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[15px] font-medium">
              verveschool
            </Link>
            <Link href="/about" className="text-[13px] font-medium text-foreground">
              about
            </Link>
          </div>
        </div>
      </nav>

      <main className="yc-container py-16">
        {/* Header */}
        <div className="mb-16 yc-text-block">
          <h1 className="mb-2">about verveschool</h1>
          <p className="text-[13px] text-muted-foreground">verveschool.com/about</p>
        </div>

        {/* Introduction */}
        <section className="yc-section">
          <h2 className="mb-4">introduction</h2>
          <div className="yc-text-block">
            <p>
              people often ask us what happens at verveschool. here is an overview of what happens during the
              verveschool program and the benefits you get as a verveschool candidate.
            </p>
          </div>
        </section>

        {/* The Problem and The Model - side by side */}
        <section className="yc-section grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-4">the problem</h2>
            <div className="yc-text-narrow">
              <p>
                you graduated. you send resumes into the void. you interview and feel like begging. companies at
                crio.do, skill lync, brightchamps, upgrad, almabetter, academically have a different problem: they
                cannot find grads who understand how people think. they hire wrong. they burn cash. they waste time.
              </p>
              <p>
                the real cost is silent. companies lose ₹3-₹5 lakh per wrong hire. candidates lose 1 year spinning
                wheels at the wrong place. both sides pretend this is normal.
              </p>
              <p className="font-medium">it is not normal. it is a system failure.</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4">the model</h2>
            <div className="yc-text-narrow">
              <p>companies pay us. you pay nothing.</p>
              <p>
                your training is sponsored entirely by the company that hires you. we do not take upfront fees. we do
                not sell certificates. we take payment only when you survive and perform.
              </p>
              <p>this means our incentives are perfectly aligned with yours. we only win when you win.</p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="yc-section">
          <h2 className="mb-4">what we do</h2>
          <div className="yc-text-block">
            <p>
              we exist for grads who are tired of low expectations. who look at their parents' career progression and
              think "that cannot be me". who see peers at tech companies earning more in bonuses than they earn total,
              and instead of feeling jealous, feel confused about why.
            </p>
            <p>we exist for people who have a point to prove. not to the world. to themselves.</p>
          </div>
        </section>

        {/* Selection Process */}
        <section className="yc-section">
          <h2 className="mb-6">selection process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="yc-text-narrow">
              <h3 className="mb-3">1. scout call (15 min)</h3>
              <p className="mb-3">
                a talent scout from our team usually bhushan kawale or zubia shah finds your profile and calls you
                directly. this is your first touch. in 10 minutes they hear your story, what winning looks like for you,
                and what scares you right now. they are checking for speed, clarity, and hunger, not polish.
              </p>
              <p>
                if they like what they hear, they send you a small set of resources so you understand the role, the
                company, and how people decide. nothing heavy. just enough to think clearly before the mock. you get a
                few hours to go through it on your own.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">2. same day mock (30 min)</h3>
              <p className="mb-3">
                right after that first call, the scout schedules a short mock for the same evening. it is 10 minutes,
                run by the same person who spoke to you in the morning.
              </p>
              <p>
                in the mock they look at how you open a conversation, how you ask questions, and how you react when you
                are pushed a little. this is not coaching. this is selection. if you pass, they lock your profile and
                mark you as someone worth betting on. if you do not, they tell you why and whether it makes sense to try
                again later. no ghosting, no fake hope.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">3. ceo review (48 hours)</h3>
              <p>
                the next day, profiles that passed are forwarded to ayush duggal, cofounder and ceo. he reviews your
                notes and cv, sharpens your introduction, and gives you a few pointed tips so you walk into the company
                interview clear and confident. his job here is to make sure you look like a serious bet, not to spoon
                feed you lines.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">4. company interviews</h3>
              <p className="mb-3">
                after that, your profile goes to the hiring partner. usually this means interviews over the next 1-2
                days, online.
              </p>
              <p className="mb-3">
                no one from verveschool speaks for you in the room. if you clear, you know you earned it. if you miss,
                you get specific feedback so you know exactly what broke and what needs to change.
              </p>
              <p>when the offer comes, you have a choice. you accept and you move.</p>
            </div>
          </div>
        </section>

        {/* Journey Structure */}
        <section className="yc-section">
          <h2 className="mb-6">journey structure (90 days)</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="yc-text-narrow">
              <h3 className="mb-3">week 1: language wiring</h3>
              <p className="mb-3">
                you typically get 10 days between offer and your first day in the office. this is your relocation
                window. you move, you find a place to stay, you settle into the new city.
              </p>
              <p className="mb-3">
                during this week, you are not waiting. ayush runs live sessions with you. this is where the foundations
                are drilled in: how to open calls, how to ask questions that actually reveal the truth, how to handle
                basic objections without sounding robotic, and how to keep your frame steady when someone pushes back.
              </p>
              <p>
                by the end of this window, you are not an expert, but you are not blank. you know the structure of a
                good call. you know what to listen for. you have your first draft of scripts and question flows ready,
                tailored to the company and product you are about to sell.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">weeks 2-4: pattern spotting</h3>
              <p className="mb-3">
                your first 10 days inside the company are usually product training. you learn features, pricing,
                process, crm tools. this is where most freshers get overwhelmed and freeze. instead, we use this phase
                to finish your weapon.
              </p>
              <p className="mb-3">
                while the company teaches you product, ayush works with you on your scripts. you take what you are
                learning inside the company and turn it into simple, sharp flows: how you open, how you diagnose, how
                you present, how you ask for a decision. the goal is not to memorize paragraphs. the goal is to know the
                spine of the conversation so you do not blank on day 1 of calling.
              </p>
              <p>
                by the time your first official call starts, you are not guessing words. you have a script you helped
                build, tuned to your voice and your product, with space to adjust as you learn.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">weeks 5-12: daily execution</h3>
              <p className="mb-3">
                as soon as you start making calls, the feedback loop tightens. every day, you send your best call
                recording to ayush. not your best call. not a show piece. a real call where things were messy,
                objections came up, or you felt shaky.
              </p>
              <p className="mb-3">
                on our side, that call gets broken down. where did you lose control. where did you ask a closed question
                when an open one was needed. where did you let the buyer's fear sit unspoken. where did you rush, where
                did you hesitate, where did you miss a chance to go deeper.
              </p>
              <p>
                you get specific notes, not vague motivation. change this line. pause here. ask this instead. do not
                defend, diagnose. the next day, you implement. then you send another call. each loop moves you 1 notch
                up. within the first month, your calls stop sounding like a fresher reading a script and start sounding
                like someone who knows what they are doing.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">beyond 90 days</h3>
              <p className="mb-3">
                the formal 90 day coaching ends. but you never lose access. you are in the alumni group. you can call
                ayush any time. you can call faraz any time.
              </p>
              <p className="mb-3">
                most people do not need to. they are moving. they are building. they are dangerous now.
              </p>
              <p>but the safety net is there. that is what unreasonable hospitality means.</p>
            </div>
          </div>
        </section>

        {/* Why Sales */}
        <section className="yc-section">
          <h2 className="mb-4">why sales matters right now</h2>
          <div className="yc-text-block space-y-4">
            <p>sales is the only performance arena where a recent grad can test their actual ceiling within months.</p>
            <p>
              in most jobs you get feedback quarterly or annually. in sales you get feedback daily. if you learn faster,
              think sharper, and execute better than peers, your commissions show it by week 6.
            </p>
            <p>this is not a shortcut. it is just the fastest honest feedback loop available.</p>
          </div>
        </section>

        {/* What We Teach */}
        <section className="yc-section">
          <h2 className="mb-4">what we teach</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="yc-text-narrow">
              <h3 className="mb-3">consultative sales</h3>
              <p>
                selling is not talking fast. selling is seeing the world from the other side of the table. once you
                grasp why people stall, what makes them say yes, and how to guide a conversation without faking it,
                interviews stop feeling like exams. they become talks you steer.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">frame control</h3>
              <p className="mb-3">
                most candidates interview like beggars. "please give me a chance. i am a hard worker. i will learn
                fast." that is low status. that is repulsive.
              </p>
              <p>
                we teach you to interview like a doctor. a doctor does not beg you to take medicine. a doctor diagnoses
                the pain, prescribes the solution, and moves next. when you switch from begging for a job to consulting
                on a problem, the dynamic flips. you become the prize.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">the pendulum framework</h3>
              <p className="mb-3">
                most people pitch in straight lines. buyers decide in stories. the pendulum fixes that.
              </p>
              <p className="mb-3">you move the conversation across 3 clear zones:</p>
              <ul className="space-y-2 mb-3">
                <li>past - where they are coming from</li>
                <li>present - what is actually hurting now</li>
                <li>future - what they want and what happens if nothing changes</li>
              </ul>
              <p>
                then you show them the ideal path to attain whatever goals they've set for themselves. you are not
                pushing. you are holding up a mirror so well that staying stuck feels harder than moving.
              </p>
            </div>
            <div className="yc-text-narrow">
              <h3 className="mb-3">objection handling</h3>
              <p className="mb-3">
                every objection is a hidden question. your job is not to overcome the objection. your job is to answer
                the hidden question.
              </p>
              <p>
                when someone says "i need to think about it", they are not asking for time. they are asking "do i really
                need this". your job is to answer that question so clearly that they stop stalling.
              </p>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="yc-section">
          <h2 className="mb-4">proof</h2>
          <div className="yc-text-block space-y-6">
            <div>
              <h3 className="mb-2">lalit yadav</h3>
              <p>
                stuck in cs limbo for 2 years. sending resumes. getting ghosted. felt like nothing was moving. learned
                how to run calls, not just answer questions. now steady performer at skillovilla, closing deals instead
                of sending random resumes.
              </p>
            </div>
            <div>
              <h3 className="mb-2">vansh negi</h3>
              <p>
                poly sci grad who thought sales was only for loud people. loud rooms scared him. discovered sales is
                psychology, not volume. now walks into rooms that used to intimidate him and leads conversations with
                quiet control.
              </p>
            </div>
            <div>
              <h3 className="mb-2">jyotsna raj</h3>
              <p>
                wanted stability but thought it was luck or contacts. reached stability through calls, closures, and
                action instead. now earns more every month than her parents expected her to earn in 5 years.
              </p>
            </div>
            <div>
              <h3 className="mb-2">bobby k j</h3>
              <p>
                engineering grad with a 1 year gap. joined verveschool. cleared crio training in 30 days. hit ₹89,000 in
                month 1 and reached top 3 in the team.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="yc-section">
          <h2 className="mb-4">team</h2>
          <div className="yc-text-block space-y-6">
            <div>
              <h3 className="mb-2">ayush duggal</h3>
              <p className="mb-2">cofounder and ceo</p>
              <p>
                started in sales at byjus, the edtech company with the most aggressive sales culture in india. learned
                what works, what is theater, and what breaks people. has coached 100 plus candidates directly through
                calls, scripts, objections, and closures. does not talk in theory. every technique he teaches has been
                field tested and deployed in real environments with real consequences.
              </p>
            </div>
            <div>
              <h3 className="mb-2">faraz bhai</h3>
              <p className="mb-2">cofounder</p>
              <p>
                built sales infrastructure in early stage startups. understands what founders want, what they are
                willing to pay for, and what they regret after the hire does not work out. bridges candidates and
                companies without faking credentials or inflating promises. his operating principle is simple: if you
                win, we win. if you fail, we failed.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="yc-section">
          <h2 className="mb-4">why this actually matters</h2>
          <div className="yc-text-block space-y-4">
            <p>
              most career programs are scams dressed in certificates. you pay upfront, they give you recorded videos,
              you finish the course and still have no job, no skill, no momentum.
            </p>
            <p>
              verveschool is built differently. companies pay us, not you. this changes everything. we only get paid if
              you survive and perform. that forces us to be honest, selective, and invested in outcomes, not enrollment
              numbers.
            </p>
            <p>
              if you want guaranteed placement with zero effort, this is not for you. if you want real training, real
              coaching, and a real shot at becoming top 20 percent in 90 days, this is the fastest honest path
              available.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="yc-section">
          <h2 className="mb-4">contact</h2>
          <div className="yc-text-block">
            <p>for inquiries: contact@verveschool.com</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="yc-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[13px] text-muted-foreground">
            <p>© 2025 verveschool</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-foreground">
                home
              </Link>
              <a href="mailto:ayush@verveschool.com" className="hover:text-foreground">
                contact
              </a>
              <a href="https://wa.me/917065314693" className="hover:text-foreground">
                whatsapp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
