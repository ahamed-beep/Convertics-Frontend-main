export default function Footer() {
  return (
    <>
      <section className="flex justify-center items-center text-center">
        <div className="py-6 sm:py-14 sm:space-y-3">
          <p className="font-jetbrains-mono font-medium text-xs tracking-[1.34px] uppercase">The weekly</p>
          <h1 className="font-fraunces font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-[#171A21]">One essay. Every Thursday. <span className="font-light italic block sm:mt-3">No fluff.</span></h1>
        </div>
      </section>

      <section aria-hidden="true">
        <div className="px-3 sm:px-6 py-8 sm:py-12 overflow-hidden border-b border-t border-[#171A21]">
          <p
            className="font-bold leading-none tracking-tighter select-none whitespace-nowrap text-center"
            style={{ fontSize: "clamp(2.5rem, 16.5vw, 160rem)" }}
          >
            Convertics<span className="text-blue-500">.</span>
          </p>
        </div>
      </section>

      <footer className="font-jetbrains-mono font-medium text-xs uppercase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between gap-6 text-xs text-neutral-600">
          <div className="text-[#575E6B]">
            <p>© 2026 CONVERTICS JOURNAL</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-4 text-[#171A21] flex-wrap">
            <a href="/">HOME</a>
            <a href="/journal">JOURNAL</a>
            <a href="/sections">SECTIONS</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
            <a href="/privacy">PRIVACY</a>
            <a href="/terms">TERMS</a>
          </nav>
          <nav aria-label="Social media" className="flex gap-3 text-neutral-700">
            <a href="#" aria-label="Instagram"><img src="/Images/twitter.webp" alt="twitter" width={36} height={36}/></a>
            <a href="#" aria-label="Twitter / X"><img src="/Images/linkedin.webp" alt="twitter" width={36} height={36}/></a>
            <a href="#" aria-label="LinkedIn"><img src="/Images/github.webp" alt="twitter" width={36} height={36}/></a>
            <a href="#" aria-label="RSS Feed"><img src="/Images/wifi.webp" alt="twitter" width={36} height={36}/></a>
          </nav>
        </div>
      </footer>
    </>
  );
}