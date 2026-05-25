// components/home/Stats.jsx

import { stats } from "../clientside/Home/Data";

export default function Stats() {
  return (
    <div className="mt-8 md:mt-14 border-t border-[#171A21] grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
      {stats.map(([n, l], i) => (
        <div key={l} className={i !== 0 ? "md:border-l md:border-[#D3CCC5] pl-6" : "md:pl-0 pl-6"}>
          <div className="text-3xl font-fraunces sm:text-5xl font-bold">{n}</div>
          <div className="mt-2 text-[10px] tracking-[0.2em] font-jetbrains-mono text-[#575E6B]">{l}</div>
        </div>
      ))}
    </div>
  );
}