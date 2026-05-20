import Image from "next/image";
import { sections, businessArticles } from "./Data";

export default function DepartmentsSection() {
  return (
    <section aria-labelledby="departments-heading" className="border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex justify-between items-start mb-8 gap-4">
          <h2 id="departments-heading" className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Six desks, one <em className="italic font-normal">obsession</em>:<br /> growth.
          </h2>
          <a href="/sections" className="text-[10px] sm:text-xs tracking-[0.2em] font-sans text-neutral-600 mt-3">
            BROWSE BY DEPARTMENT →
          </a>
        </div>

        <div className="bg-blue-500 text-white rounded-md p-5 sm:p-8">
          <div className="flex justify-between items-center text-xs font-sans tracking-[0.2em]">
            <span className="opacity-80">01</span>
            <span className="opacity-80">28 ESSAYS</span>
          </div>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h3 className="text-3xl sm:text-4xl font-bold">Business</h3>
            <p className="font-sans text-sm sm:text-base opacity-90 sm:max-w-md">
              Strategies, tools, and insights to build and scale modern businesses.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {businessArticles.map((a) => (
              <article key={a.title} className="flex gap-4">
                <Image
                  src={a.img}
                  alt={a.title}
                  width={144}
                  height={112}
                  className="w-28 h-24 sm:w-36 sm:h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg leading-snug">{a.title}</h4>
                  <p className="font-sans text-xs sm:text-sm opacity-90 mt-1 line-clamp-2">{a.desc}</p>
                  <a href="/journal" className="font-sans text-[10px] tracking-[0.2em] mt-2 inline-block">
                    READ MORE →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <nav aria-label="Journal sections" className="mt-2 divide-y divide-neutral-300 border-b border-neutral-300">
          {sections.map((s) => (
            <a
              href={`/sections/${s.name.toLowerCase()}`}
              key={s.name}
              className="grid grid-cols-12 gap-4 py-6 items-center hover:bg-neutral-100 transition-colors px-2"
            >
              <span className="col-span-1 text-xs font-sans text-neutral-500">{s.n}</span>
              <span className="col-span-3 sm:col-span-2 text-2xl sm:text-3xl font-bold">{s.name}</span>
              <span className="col-span-6 sm:col-span-7 font-sans text-sm text-neutral-600">{s.desc}</span>
              <span className="col-span-2 text-right text-[10px] tracking-[0.2em] font-sans text-neutral-500">{s.essays}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}