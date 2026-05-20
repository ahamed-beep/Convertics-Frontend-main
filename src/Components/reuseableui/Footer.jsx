export default function Footer() {
  return (
    <>
      <section aria-hidden="true" className="border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <p className="text-[22vw] sm:text-[18vw] font-bold leading-none tracking-tighter text-center select-none">
            Convertics<span className="text-blue-500">.</span>
          </p>
        </div>
      </section>

      <footer className="font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between gap-6 text-xs text-neutral-600">
          <div>
            <p>© 2026 CONVERTICS JOURNAL</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-4">
            <a href="/">HOME</a>
            <a href="/journal">JOURNAL</a>
            <a href="/sections">SECTIONS</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
          </nav>
          <div className="flex gap-4">
            <a href="/privacy">PRIVACY</a>
            <a href="/terms">TERMS</a>
          </div>
          <nav aria-label="Social media" className="flex gap-3 text-neutral-700">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter / X">X</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="RSS Feed">RS</a>
          </nav>
        </div>
      </footer>
    </>
  );
}