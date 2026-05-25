export default function CtaNewsletter() {
  return (
    <section className="w-full border-b border-neutral-300">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-neutral-900 text-white px-5 py-8 sm:px-14 sm:py-20">
        <div>
          <p className="font-jetbrains-mono font-medium text-[10px] md:text-xs text-[#F8F6F2]/80 uppercase">¶ OPEN CALL FOR CONTRIBUTORS</p>
          <h2 className="sm:mt-4 font-fraunces font-bold text-4xl md:text-6xl lg:text-7xl md:leading-18 tracking-tighter text-[#F8F6F2]">
            Got a story <span className="font-charm italic font-light"> worth </span> telling?
          </h2>
          <p className="mt-4 font-inter font-normal text-sm sm:text-base leading-normal text-[#F8F6F2]/70 max-w-md">
            Convertics publishes essays, case studies, and field reports from founders, marketers, and operators. If you&apos;ve shipped something interesting — we want to read it.
          </p>
        </div>
        <div className="flex flex-col">
          <a href="/pitch" className="font-inter font-medium text-sm sm:text-base text-[#171A21] rounded-full bg-[#F8F6F2] py-2 px-4 md:py-4 md:px-6 whitespace-nowrap">
            Pitch your essay →
          </a>
          <span className="font-jetbrains-mono font-medium text-[10px] md:text-xs text-[#F8F6F2]/50 uppercase mt-4">AVG. RESPONSE TIME: 48 HRS</span>
        </div>
      </div>

    </section>
  );
}