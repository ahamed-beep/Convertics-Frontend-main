import Image from "next/image";
import { stats, ticker } from "./Data";

export default function CoverStory() {
  return (
    <section aria-labelledby="cover-story-heading" className="border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex justify-between text-[10px] sm:text-xs tracking-[0.2em] font-sans text-neutral-500 mb-6">
          <span>¶ 001 — THE COVER STORY</span>
          <span className="hidden sm:inline">FIELD GUIDE: GROWTH, STRATEGY, CRAFT</span>
        </div>

        <div className="rounded-md overflow-hidden border border-neutral-300">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
            alt="Convertics Journal Cover — Business and growth field guide"
            width={1600}
            height={420}
            priority
            className="w-full h-[260px] sm:h-[420px] object-cover"
          />
        </div>

        <p className="mt-8 text-[10px] sm:text-xs tracking-[0.2em] font-sans text-neutral-500">
          A FIELD GUIDE FOR BUILDERS
        </p>

        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          <h1
            id="cover-story-heading"
            className="lg:col-span-2 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            Content that <em className="font-normal italic">actually</em>
            <br /> moves the{" "}
            <span className="italic relative">
              needle
              <span aria-hidden="true" className="absolute left-0 right-0 -bottom-1 h-[6px] bg-blue-400/70 -z-0" />
            </span>
            .
          </h1>
          <div className="font-sans">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Convertics is an independent journal on business, marketing, technology and design — written for the people who build, ship, and sell.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="/journal" className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full">
                Read the journal
              </a>
              <a href="/pitch" className="border border-neutral-400 text-sm px-4 py-2 rounded-full hover:bg-neutral-100">
                Pitch a story
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-300 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl sm:text-4xl font-bold">{n}</div>
              <div className="mt-2 text-[10px] tracking-[0.2em] font-sans text-neutral-500">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-neutral-900 text-neutral-300 text-[10px] sm:text-xs tracking-[0.25em] font-sans rounded-sm overflow-x-auto">
          <div className="flex gap-6 sm:gap-10 px-6 py-3 whitespace-nowrap">
            {ticker.map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-blue-400" aria-hidden="true">◆</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}