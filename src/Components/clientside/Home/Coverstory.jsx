import Image from "next/image";
import { stats, ticker } from "./Data";

export default function CoverStory() {
  return (
    <section aria-labelledby="cover-story-heading" className="border-b-2 border-[#D3CCC5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="flex justify-between text-[10px] sm:text-xs tracking-[0.2em] font-jetbrains-mono text-[#575E6B] mb-3">
          <span>№ 001 — The Cover Story</span>
          <span className="hidden uppercase sm:inline">Filed under: Growth, Strategy, Craft</span>
        </div>
        <hr className="border-[#D3CCC5]" />

        <div className="rounded-xl mt-6 overflow-hidden border border-neutral-300">
          <Image
            src="/Images/Hero1.webp"
            alt="Convertics Journal Cover — Business and growth field guide"
            width={1600}
            height={420}
            priority
            className="w-full h-[260px] sm:h-[420px] object-cover"
          />
        </div>

        <p className="mt-8 text-[10px] sm:text-xs tracking-[0.1em] font-jetbrains-mono text-[#171A21]">
          A FIELD GUIDE FOR BUILDERS
        </p>

        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          <h1
            id="cover-story-heading"
            className="lg:col-span-2 text-4xl font-bold font-fraunces sm:text-6xl lg:text-7xl leading-[1.02] tracking-tighter"
          >
            Content that <em className="font-light">actually</em>
            <br /> moves the{" "}
            <span className="font-fraunces relative text-[#3B82F6]">
              needle.
              <svg
                aria-hidden="true"
                className="absolute left-0 right-0 -bottom-1 w-full"
                height="14"
                viewBox="0 0 100 14"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7 Q1.25 1 2.5 7 Q3.75 13 5 7 Q6.25 1 7.5 7 Q8.75 13 10 7 Q11.25 1 12.5 7 Q13.75 13 15 7 Q16.25 1 17.5 7 Q18.75 13 20 7 Q21.25 1 22.5 7 Q23.75 13 25 7 Q26.25 1 27.5 7 Q28.75 13 30 7 Q31.25 1 32.5 7 Q33.75 13 35 7 Q36.25 1 37.5 7 Q38.75 13 40 7 Q41.25 1 42.5 7 Q43.75 13 45 7 Q46.25 1 47.5 7 Q48.75 13 50 7 Q51.25 1 52.5 7 Q53.75 13 55 7 Q56.25 1 57.5 7 Q58.75 13 60 7 Q61.25 1 62.5 7 Q63.75 13 65 7 Q66.25 1 67.5 7 Q68.75 13 70 7 Q71.25 1 72.5 7 Q73.75 13 75 7 Q76.25 1 77.5 7 Q78.75 13 80 7 Q81.25 1 82.5 7 Q83.75 13 85 7 Q86.25 1 87.5 7 Q88.75 13 90 7 Q91.25 1 92.5 7 Q93.75 13 95 7 Q96.25 1 97.5 7 Q98.75 13 100 7"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </h1>

          <div className="font-inter md:border-l-2 md:border-[#171A21] pl-1.5 md:pl-8">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Convertics is an independent journal on business, marketing, technology and design
              — written for the people who build, ship, and sell.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="/journal" className="bg-[#3B82F6] font-inter hover:bg-blue-600 text-[#F8F6F2] text-sm px-5 py-2 rounded-full">
                Read the journal
              </a>
              <a href="/pitch" className="border border-[#171A21] font-inter text-[#171A21] text-sm px-5 py-2 rounded-full hover:bg-neutral-100">
                Pitch a story
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-14 border-t border-[#171A21] grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {stats.map(([n, l], i) => (
            <div key={l} className={i !== 0 ? "md:border-l md:border-[#D3CCC5] pl-6" : "md:pl-0 pl-6"}>
              <div className="text-3xl font-fraunces sm:text-5xl font-bold">{n}</div>
              <div className="mt-2 text-[10px] tracking-[0.2em] font-jetbrains-mono text-[#575E6B]">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-[#171A21] text-neutral-300 text-[10px] sm:text-xs tracking-[0.25em] font-jetbrains-mono overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-6 px-3 py-3">
              {t}
              <span className="text-[#3B82F6]" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}