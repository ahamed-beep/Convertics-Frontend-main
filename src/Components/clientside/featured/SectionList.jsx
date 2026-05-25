// components/featured/SectionList.jsx

const whatWeOffer = [
  { n: "01", t: "Sponsored blog posts",               c: "B2B",     p: "R. Cole · 7 min"  },
  { n: "02", t: "Product and platform reviews",        c: "B2B",   p: "J. Mendes · 5 min"  },
  { n: "03", t: "Feature placements on homepage",      c: "Fashion",  p: "N. Aoki · 9 min"  },
  { n: "04", t: "Targeted exposure to relevant audience", c: "Marketing", p: "T. Brooks · 11 min"     },
];

const whoThisIsFor = [
  { n: "01", t: "SaaS companies",    c: "B2B",     p: "R. Cole · 7 min" },
  { n: "02", t: "Hosting providers", c: "B2B",     p: "J. Mendes · 5 min" },
  { n: "03", t: "CRM platforms",     c: "Fashion",    p: "N. Aoki · 9 min"      },
  { n: "04", t: "Marketing tools",   c: "Marketing",    p: "T. Brooks · 11 min"      },
  { n: "05", t: "Tech startups",     c: "Marketing", p: "T. Brooks · 11 min"       },
];

function List({ index, title, items }) {
  return (
    <section aria-labelledby={`section-${index}`} className="mx-auto  px-4 md:px-10 pb-16">
      <div className="mb-2 text-sm tracking-[0.2em] text-[#171A21] font-jetbrains-mono ">§ Sections</div>
      <div className="flex items-end justify-between border-b border-[#171A21] pb-6">
        <h2 id={`section-${index}`} className=" font-fraunces mt-3 font-bold text-4xl sm:text-5xl text-[#171A21]">
          {title}
        </h2>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-[#575E6B] font-jetbrains-mono sm:block" aria-hidden="true">
         Browse by department →
        </span>
      </div>
      <div className="mt-6 text-[10px] tracking-[0.2em] text-[#575E6B] font-jetbrains-mono ">Also in this issue —</div>
      <ul className="mt-4 divide-y divide-gray-300">
        {items.map((it) => (
          <li key={it.n} className="grid grid-cols-12 items-center gap-2 py-5 text-sm">
            <span className="col-span-1  text-xs text-[#575E6B] font-jetbrains-mono "> {it.n}</span>
            <span className="col-span-7  font-fraunces text-lg sm:text-xl text-[#171A21]">{it.t}</span>
            <span className="col-span-2 hidden text-[10px] uppercase  tracking-[0.2em] font-jetbrains-mono text-[#575E6B] sm:block">{it.c}</span>
            <span className="col-span-4 uppercase text-right text-[10px] tracking-[0.2em] text-[#575E6B] font-jetbrains-mono sm:col-span-2">{it.p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SectionList() {
  return (
    <>
      <List index="01" title="What We Offer:" items={whatWeOffer} />
      <List index="02" title="Who This Is For" items={whoThisIsFor} />
    </>
  );
}