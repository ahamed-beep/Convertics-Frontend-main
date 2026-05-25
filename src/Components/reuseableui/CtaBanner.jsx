// components/home/CtaBanner.jsx

export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className=" ">
      <div className=" mx-auto bg-[#0e1116] text-white  px-6 sm:px-10 lg:px-14 py-10 md:py-18 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#F8F6F2CC] font-jetbrains-mono " >
         ✦ Open call for contributors
          </div>
          <h3 id="cta-heading" className="mt-4 font-fraunces font-semibold  text-[#F8F6F2] text-[30px] sm:text-4xl lg:text-[44px] leading-[1.05] tracking-tight">
            Got a story <span className="font-thin text-[#F8F6F2] italic font-fraunces">worth</span> telling?
          </h3>
          <p className="mt-4 font-inter text-[#F8F6F2B2] max-w-md text-sm sm:text-[15px]  leading-relaxed">
           Convertics publishes essays, case studies, and field reports from founders,
marketers, and operators. If you've shipped something interesting — we want
to read it.
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-3">
          <a
            href="/pitch"
            className="inline-flex items-center gap-1 bg-[#F8F6F2] text-[#171A21] font-inter rounded-full pl-5 pr-4 py-2.5 text-sm  hover:bg-white/90 transition"
          >
            Pitch your essay
            <span className="grid place-items-center  text-[#171A21]" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
              </svg>
            </span>
          </a>
          <p className="text-[10px] mt-2 tracking-[0.25em] uppercase text-[#F8F6F280] font-jetbrains-mono">
     Avg. response time: 48 hrs
          </p>
        </div>
      </div>
    </section>
  );
}