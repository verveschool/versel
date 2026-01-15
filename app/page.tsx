import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <nav className="border-b border-border">
        <div className="yc-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[15px] font-medium">
              verveschool
            </Link>
            <div className="flex gap-6 text-[13px]">
              <Link href="/about" className="text-foreground hover:text-muted-foreground">
                about
              </Link>
              <Link href="/partners" className="text-foreground hover:text-muted-foreground">
                partners
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="yc-container py-16">
        <div className="yc-text-block mb-16">
          <h1 className="mb-6">what happens at verveschool</h1>
          <p className="text-foreground mb-8">
            we pick ambitious grads, teach them how people decide, back them for 90 days after they join companies, and
            get paid only when they outperform.
          </p>
          <Link
            href="/about"
            className="inline-block text-[13px] font-medium border-b border-foreground pb-0.5 hover:border-muted-foreground hover:text-muted-foreground transition-colors"
          >
            read more
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <section className="yc-text-block">
            <h2 className="mb-4">the problem</h2>
            <p>
              you graduated. you send resumes into the void. you interview and feel like begging. companies cannot find
              grads who understand how people think. they hire wrong. they burn cash. they waste time.
            </p>
          </section>

          <section className="yc-text-block">
            <h2 className="mb-4">the model</h2>
            <p>
              companies pay us. you pay nothing. your training is sponsored entirely by the company that hires you. we
              do not take upfront fees. we take payment only when you survive and perform.
            </p>
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <section className="yc-text-block">
            <h2 className="mb-4">why sales</h2>
            <p>
              sales is the only performance arena where a recent grad can test their actual ceiling within months. in
              most jobs you get feedback quarterly. in sales you get feedback daily.
            </p>
          </section>

          <section className="yc-text-block">
            <h2 className="mb-4">the journey</h2>
            <p>
              talent scout call. same day mock. ceo review. company interviews. 90 day coaching. we stay until you are
              at minimum top 20 percent in your team.
            </p>
          </section>
        </div>

        <section className="border-t border-border pt-12 mb-16">
          <h2 className="mb-8">by the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="yc-text-block">
              <p className="text-2xl font-normal mb-1">₹4-6L</p>
              <p className="text-[13px] text-foreground">starting salary</p>
            </div>
            <div className="yc-text-block">
              <p className="text-2xl font-normal mb-1">90 days</p>
              <p className="text-[13px] text-foreground">coaching journey</p>
            </div>
            <div className="yc-text-block">
              <p className="text-2xl font-normal mb-1">top 20%</p>
              <p className="text-[13px] text-foreground">target performance</p>
            </div>
            <div className="yc-text-block">
              <p className="text-2xl font-normal mb-1">10-14</p>
              <p className="text-[13px] text-foreground">days to offer</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-12">
          <h2 className="mb-8">backed by</h2>
          <p className="yc-text-block">
            crio.do, skill lync, brightchamps, upgrad, almabetter, academically. these companies believe in this model
            because our people close faster and stay longer.
          </p>
        </section>

        <section className="border-t border-border pt-12 mt-16">
          <h2 className="mb-8">for partners</h2>
          <div className="yc-text-block mb-8">
            <p className="mb-6">
              are you hiring? we have trained grads who understand how people decide. they close faster. they stay
              longer. they are driven by their first win.
            </p>
            <Link
              href="/partners"
              className="inline-block text-[13px] font-medium border-b border-foreground pb-0.5 hover:border-muted-foreground hover:text-muted-foreground transition-colors"
            >
              learn more
            </Link>
          </div>
        </section>
      </main>

      {/* add common footer component */}
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
