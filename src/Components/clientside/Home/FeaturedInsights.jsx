import Image from "next/image";
import { featured } from "./Data";

export default function FeaturedInsights() {
  return (
    <section aria-labelledby="featured-heading" className="border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-[10px] tracking-[0.2em] font-sans text-neutral-500 mb-2">¶ THE WIRE</p>
            <h2 id="featured-heading" className="text-4xl sm:text-5xl font-bold">
              Featured <em className="italic font-normal">Insights</em>
            </h2>
          </div>
          <a href="/journal" className="text-[10px] tracking-[0.2em] font-sans text-neutral-600">SEE ALL →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((f) => (
            <article key={f.title}>
              <Image
                src={f.img}
                alt={f.title}
                width={900}
                height={224}
                className="w-full h-48 sm:h-56 object-cover rounded"
              />
              <h3 className="mt-4 text-xl sm:text-2xl font-bold leading-snug">{f.title}</h3>
              <p className="mt-2 font-sans text-sm text-neutral-600">{f.desc}</p>
              <a href="/journal" className="mt-3 inline-block text-[10px] tracking-[0.2em] font-sans text-blue-500">
                READ MORE →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}