import Image from "next/image";
import { dispatch, sidebarArticles } from "./Data";

export default function WeeklyDispatch() {
  return (
    <section aria-labelledby="dispatch-heading" className="bg-[#F2EEE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-13 lg:py-20">
        <div className="flex md:flex-row flex-col justify-between md:items-end gap-3 pb-4 border-b border-[#171A21] mb-8">
          <div>
            <p className="font-jetbrains-mono font-medium text-xs md:text-sm text-[#171A21] uppercase">¶ THE JOURNAL</p>
            <h2 id="dispatch-heading" className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              This <span className="font-charm font-medium italic tracking-wide">week&apos;s</span> dispatch.
            </h2>
          </div>
          <a href="/archive" className="text-[10px] sm:text-xs tracking-[0.2em] font-jetbrains-mono text-[#575E6B] mt-2">FULL ARCHIVE →</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Image
              src="/Images/week.webp"
              alt="Verpex Hosting article cover"
              width={1200}
              height={384}
              className="w-full sm:h-80  lg:w-220 lg:h-140 object-cover rounded-[20px]"
            />
            <p className="font-jetbrains-mono font-medium text-xs md:text-sm text-[#171A21] uppercase mt-4 sm:mt-6">
              TECHNOLOGY <span className="text-[#575E6B]">· APR 24 · 8 MIN READ</span>
            </p>
            <h3 className="mt-1 sm:mt-4 font-fraunces text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Verpex Hosting: Fast, Reliable &amp; Budget-Friendly
            </h3>
            <p className="mt-2 sm:mt-6 font-inter font-normal text-base sm:text-xl text-[#575E6B] max-w-xl">
              A complete breakdown of Verpex hosting — performance, pricing, and whether it&apos;s the right choice for your website.
            </p>
            <p className="mt-2 sm:mt-6 font-jetbrains-mono font-medium text-xs md:text-sm text-[#171A21] uppercase">— BY M. SHAFER</p>
          </div>

          <aside aria-label="More articles" className="space-y-5">
            {sidebarArticles.map((s) => (
              <article key={s.title} className="flex gap-4">
                <img src={s.img} alt="img" width={100} height={100} className="w-32 h-32 object-cover" />
                <div>
                  <p className="font-jetbrains-mono font-medium text-xs md:text-sm text-[#171A21] uppercase">{s.tag}</p>
                  <h4 className="font-fraunces font-semibold text-base sm:text-xl text-[#171A21] tracking-tight leading-snug mt-1">{s.title}</h4>
                  <p className="font-jetbrains-mono font-medium tracking-wide text-[10px] sm:text-xs uppercase mt-2 text-[#575E6B]">{s.author} · {s.read}</p>
                </div>
              </article>
            ))}
          </aside>
        </div>

        <p className="font-jetbrains-mono font-medium text-xs md:text-sm text-[#171A21] uppercase border-t border-[#D3CCC5] py-4 sm:py-6 mt-3 md:mt-10">¶ ALSO IN THIS ISSUE →</p>
        <nav aria-label="Also in this issue" className="divide-y divide-[#D3CCC5] border-t border-[#D3CCC5]">
          {dispatch.map((s) => (
            <a
              href={`/sections/${s.title.toLowerCase()}`}
              key={s.title}
              className="grid grid-cols-12 gap-x-4 gap-y-1 py-4 sm:py-6 items-center hover:bg-neutral-100 transition-colors px-2"
            >
              <span className="col-span-1 text-xs font-jetbrains-mono font-medium text-[#575E6B]">
                {s.n}
              </span>

              <span className="col-span-11 sm:col-span-6 md:col-span-5 lg:col-span-6 text-sm sm:text-base md:text-xl lg:text-2xl font-fraunces font-normal text-[#171A21]">
                {s.title}
              </span>

              <span className="hidden md:block sm:col-span-3 md:col-span-3 lg:col-span-2 font-inter text-xs md:text-sm text-[#575E6B]">
                {s.tag}
              </span>

              <span className="col-start-2 col-span-11 sm:col-span-5 md:col-start-auto md:col-span-3 lg:col-span-3 font-jetbrains-mono font-bold text-[10px] sm:text-xs md:text-sm tracking-[1.34px] uppercase text-[#575E6B] sm:text-right">
                {s.author} · {s.read}
              </span>

            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}