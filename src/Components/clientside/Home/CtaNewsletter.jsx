export default function CtaNewsletter() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-300">
      <div className="bg-neutral-900 text-white p-8 sm:p-14">
        <p className="text-[10px] tracking-[0.2em] font-sans text-neutral-400">¶ OPEN CALL FOR CONTRIBUTORS</p>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
          Got a story <em className="italic font-normal">worth</em> telling?
        </h2>
        <p className="mt-4 font-sans text-sm text-neutral-300 max-w-md">
          Convertics publishes essays, case studies, and field reports from founders, marketers, and operators. If you&apos;ve shipped something interesting — we want to read it.
        </p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <a href="/pitch" className="bg-white text-neutral-900 px-5 py-2 rounded-full text-sm font-sans">
            Pitch your essay →
          </a>
          <span className="text-[10px] tracking-[0.2em] font-sans text-neutral-400">AVG. RESPONSE TIME: 48 HRS</span>
        </div>
      </div>

      <div className="bg-stone-50 p-8 sm:p-14 flex flex-col items-center justify-center text-center">
        <p className="text-[10px] tracking-[0.2em] font-sans text-neutral-500">THE WEEKLY</p>
        <h2 className="mt-3 text-3xl sm:text-5xl font-bold">One essay. Every Thursday.</h2>
        <p className="mt-2 text-2xl sm:text-3xl italic text-neutral-700">No fluff.</p>
        <div className="mt-6 flex w-full max-w-md font-sans">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-neutral-400 rounded-l-full px-4 py-2 text-sm bg-white outline-none"
          />
          <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-r-full text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}