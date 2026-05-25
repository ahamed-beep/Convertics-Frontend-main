// components/home/Ticker.jsx

import { ticker } from "../clientside/Home/Data";

export default function Ticker() {
  return (
    <div className="mt-1 md:mt-8 bg-[#171A21] text-neutral-300 text-[10px] sm:text-xs tracking-[0.25em] font-jetbrains-mono overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...ticker, ...ticker].map((t, i) => (
          <span key={i} className="flex items-center gap-6 px-3 py-3">
            {t}
            <span className="text-[#3B82F6]" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}