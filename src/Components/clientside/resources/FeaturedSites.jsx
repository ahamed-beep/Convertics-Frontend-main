"use client";

import { useEffect, useState } from "react";
import api from "@/Components/lib/api";

export default function FeaturedSites() {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await api.get("/api/resources");
        const data = res.data?.data || res.data || [];
        setSites(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  return (
    <section aria-labelledby="sites-heading" className="mx-auto px-8 pb-24">
      <h2 id="sites-heading" className="sr-only">Featured Partners</h2>

      <hr className="w-full mb-10 md:mb-16 border-[#171A21]" />

      {loading ? (
        <p role="status" className="text-center text-[#3a3f47] py-12">
          Loading resources...
        </p>
      ) : sites.length === 0 ? (
        <p role="status" className="text-center text-[#3a3f47] py-12">
          No resources yet.
        </p>
      ) : (
        <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((s) => (
            <li key={s.id} className="flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white aspect-square">
                <img
                  src={s.image}
                  alt={`${s.brand} — ${s.title}`}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-6 text-sm font-jetbrains-mono font-semibold tracking-[0.1em] text-blue-500">
                {s.brand}
              </p>
              <h3 className="mt-2 font-fraunces text-2xl font-semibold text-[#171A21]">{s.title}</h3>
              <p className="mt-2 text-md font-inter leading-relaxed text-[#171A21CC]">{s.desc}</p>
              <div className="mt-6">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${s.brand} website`}
                  className="rounded-full bg-[#3B82F6] px-5 py-4 text-xs font-medium text-[#F8F6F2] font-inter hover:bg-blue-600 transition"
                >
                  Visit Website
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}