import Image from "next/image";
import { sections, businessArticles } from "./Data";

export default function DepartmentsSection() {
  return (
    <section aria-labelledby="departments-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex md:flex-row flex-col justify-between md:items-end gap-3 pb-4 border-b border-[#171A21]">
          <div>
            <p className="font-jetbrains-mono font-medium text-xs md:text-sm text-[#171A21] uppercase">§ Sections</p>
            <h2 id="departments-heading" className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-bold leading-[35px] sm:leading-[50px] lg:leading-[60px] tracking-tight">
              Six desks, one <span className="font-charm font-medium italic">obsession</span>:<br /> growth.
            </h2>
          </div>
          <a href="/sections" className="text-[10px] sm:text-xs tracking-[0.2em] font-jetbrains-mono text-[#575E6B] mt-2">
            BROWSE BY DEPARTMENT →
          </a>
        </div>

        <div className="bg-[#3B82F6] text-white rounded-[14px] p-4 sm:p-8 shadow-sm -mx-4 sm:mx-auto mt-7 md:mt-10">
          <div className="flex md:flex-row flex-col gap-2 justify-between items-center tracking-[0.2em] border-b border-white pb-6 -mx-5 sm:-mx-8 px-4">
            <div className="flex md:contents items-center gap-3">
              <span className="font-jetbrains-mono font-medium text-xs md:text-sm opacity-70">01</span>
              <h3 className="font-fraunces text-3xl sm:text-4xl font-medium tracking-[-0.9px] lg:-ml-25">Business</h3>
            </div>
            <p className="font-normal text-sm sm:text-base opacity-70 tracking-wide text-center lg:whitespace-nowrap">
              Strategies, tools, and insights to build and scale modern businesses.
            </p>
            <span className="font-jetbrains-mono font-semibold text-[10px] md:text-xs tracking-[1.34px] uppercase">28 ESSAYS →</span>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 lg:mx-6 xl:mx-20">
            {businessArticles.map((a) => (
              <article key={a.title} className="flex gap-2 sm:gap-3 md:flex-col lg:items-start items-center justify-center lg:flex-row">
                <Image
                  src={a.img}
                  alt={a.title}
                  width={278}
                  height={167}
                  className="w-35 h-30 sm:w-50 sm:h-30 md:w-69 md:h-41 object-cover rounded-2xl"
                />
                <div className="flex-1 md:space-y-0.5 md:w-69 lg:w-auto leading-3">
                  <h4 className="font-fraunces font-medium text-sm sm:text-xl leading-snug tracking-tight">{a.title}</h4>
                  <p className="font-inter font-medium text-[10px] sm:text-xs opacity-70 mt-1 lg:line-clamp-2 xl:line-clamp-none">{a.desc}</p>
                  <a href="/journal" className="font-jetbrains-mono font-medium text-[10px] sm:text-xs tracking-[0.2em] mt-2 inline-block">
                    READ MORE →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <nav aria-label="Journal sections" className="mt-5 md:mt-10 divide-y divide-[#D3CCC5] border-t border-[#D3CCC5]">
          {sections.map((s) => (
            <a
              href={`/sections/${s.name.toLowerCase()}`}
              key={s.name}
              className="grid grid-cols-12 gap-x-4 gap-y-1 py-4 sm:py-6 items-center hover:bg-neutral-100 transition-colors px-2"
            >
              <span className="col-span-1 text-xs font-jetbrains-mono font-medium text-[#575E6B]">
                {s.n}
              </span>
              <span className="col-span-8 sm:col-span-4 md:col-span-2 text-xl sm:text-2xl lg:text-3xl font-fraunces font-semibold text-[#171A21]">
                {s.name}
              </span>
              <span className="col-span-3 sm:col-span-7 md:col-span-2 flex justify-end md:order-last font-jetbrains-mono font-bold text-[10px] md:text-sm tracking-[1.34px] uppercase text-[#575E6B]">
                {s.essays} →
              </span>
              <span className="hidden sm:flex sm:col-span-11 sm:col-start-2 md:col-span-6 md:col-start-auto md:order-none font-inter text-sm md:text-[16px] text-[#575E6B]">
                {s.desc}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}