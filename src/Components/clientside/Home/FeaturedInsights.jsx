import Image from "next/image";
import { featured } from "./Data";

export default function FeaturedInsights() {
  return (
    <section aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5">
        <div className="flex justify-between items-end pb-4 border-b border-[#171A21]">
          <div>
            <p className="font-jetbrains-mono font-medium text-xs md:text-sm text-[#171A21] uppercase">¶ THE WIRE</p>
            <h2 id="featured-heading" className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Featured <span className="font-light italic">Insights</span>
            </h2>
          </div>
          <a href="/journal" className="text-[10px] sm:text-xs tracking-[0.2em] font-jetbrains-mono text-[#575E6B]">SEE ALL →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          {featured.map((f) => (
            <article key={f.title}>
              <Image
                src={f.img}
                alt={f.title}
                width={900}
                height={224}
                className="w-full h-48 sm:h-70 object-cover rounded-2xl"
              />
              <h3 className="mt-3 sm:mt-4 font-fraunces font-semibold text-2xl sm:text-3xl text-[#171A21] leading-9 tracking-tight">{f.title}</h3>
              <p className="mt-1 sm:mt-2 font-inter font-medium text-sm sm:text-base text-[#575E6B]">{f.desc}</p>
              <a href="/journal" className="mt-3 sm:mt-4 font-jetbrains-mono font-semibold inline-block text-sm sm:text-base tracking-widest text-[#3B82F6]">
                READ MORE →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}