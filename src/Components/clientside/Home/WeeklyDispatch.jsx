import Image from "next/image";
import { dispatch, sidebarArticles } from "./Data";

export default function WeeklyDispatch() {
  return (
    <section aria-labelledby="dispatch-heading" className="border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-[10px] tracking-[0.2em] font-sans text-neutral-500 mb-2">¶ THE JOURNAL</p>
            <h2 id="dispatch-heading" className="text-4xl sm:text-5xl font-bold">
              This <em className="italic font-normal">week&apos;s</em> dispatch.
            </h2>
          </div>
          <a href="/archive" className="text-[10px] tracking-[0.2em] font-sans text-neutral-600">FULL ARCHIVE →</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
              alt="Verpex Hosting article cover"
              width={1200}
              height={384}
              className="w-full h-64 sm:h-96 object-cover rounded bg-blue-900"
            />
            <p className="mt-4 text-[10px] tracking-[0.2em] font-sans text-neutral-500">
              TECHNOLOGY · APR 24 · 8 MIN READ
            </p>
            <h3 className="mt-2 text-2xl sm:text-4xl font-bold leading-tight">
              Verpex Hosting: Fast, Reliable &amp; Budget-Friendly
            </h3>
            <p className="mt-3 font-sans text-sm text-neutral-600 max-w-xl">
              A complete breakdown of Verpex hosting — performance, pricing, and whether it&apos;s the right choice for your website.
            </p>
            <p className="mt-2 font-sans text-xs text-neutral-500">— BY M. SHAFER</p>
          </div>

          <aside aria-label="More articles" className="space-y-5">
            {sidebarArticles.map((s) => (
              <article key={s.title} className="flex gap-4 border border-neutral-300 rounded p-4">
                <div className="w-16 h-16 bg-blue-500 rounded shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] tracking-[0.2em] font-sans text-neutral-500">{s.tag}</p>
                  <h4 className="font-bold text-base leading-snug mt-1">{s.title}</h4>
                  <p className="font-sans text-xs text-neutral-500 mt-2">{s.author} · {s.read}</p>
                </div>
              </article>
            ))}
          </aside>
        </div>

        <p className="mt-10 text-[10px] tracking-[0.2em] font-sans text-neutral-500">¶ ALSO IN THIS ISSUE →</p>
        <nav aria-label="Also in this issue" className="mt-3 divide-y divide-neutral-300 border-t border-b border-neutral-300">
          {dispatch.map((d) => (
            <a
              href={`/journal/${d.title.toLowerCase().replace(/\s+/g, "-")}`}
              key={d.title}
              className="grid grid-cols-12 gap-4 py-4 items-center hover:bg-neutral-100 px-2"
            >
              <span className="col-span-1 text-xs font-sans text-neutral-500">{d.n}</span>
              <span className="col-span-7 sm:col-span-8 font-bold text-base sm:text-lg">{d.title}</span>
              <span className="col-span-2 text-[10px] tracking-[0.2em] font-sans text-neutral-500">{d.tag}</span>
              <span className="col-span-2 text-right text-[10px] tracking-[0.2em] font-sans text-neutral-500">
                {d.author} · {d.read}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}