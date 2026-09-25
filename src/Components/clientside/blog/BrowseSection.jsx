"use client";

import { useEffect, useMemo, useState } from "react";
import Dots from "../../reuseableui/Dots";
import Card from "../../reuseableui/Card";
import { Search } from "lucide-react";
import api from "@/Components/lib/api";


const CATEGORIES = ["Marketing", "B2B", "Design"];

export default function BrowseSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCats, setActiveCats] = useState([]);
  const [browsePage, setBrowsePage] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/api/blogs");
        const data = res.data?.data || res.data || [];
        const mapped = data.map((b) => ({
          id: b.id,
          title: b.title,
          excerpt: b.excerpt,
          category: b.category,
          image: b.image,
          slug: b.slug,
        }));
        setPosts(mapped);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = activeCats.length === 0 || activeCats.includes(p.category);
      const matchSearch =
        q === "" ||
        p.title?.toLowerCase().includes(q) ||
        p.excerpt?.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCats, posts]);

  const browsePages = Math.max(1, Math.ceil(filtered.length / 3));
  const safePage = Math.min(browsePage, browsePages - 1);
  const browseSlice = filtered.slice(safePage * 3, safePage * 3 + 3);

  const toggleCat = (cat) => {
    setBrowsePage(0);
    setActiveCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <section aria-labelledby="browse-heading" className="px-5 bg-[#F2EEE8] sm:px-8 lg:px-16 py-16 sm:py-20">
      <div className="mx-auto text-center">
        <div className="inline-flex items-center text-xs tracking-[0.15em] uppercase text-[#171A21] font-semibold font-jetbrains-mono">
          ¶ CATEGORIES
        </div>
        <h2 id="browse-heading" className="mt-4 font-semibold font-fraunces text-[#171A21] text-[34px] sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
          Browse by <span className="italic font-fraunces font-thin">Category</span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-sm sm:text-lg text-[#171A21CC]">
          Find content based on your interests. From business strategies to software reviews and industry trends, explore topics that help you grow and make informed decisions.
        </p>

        <div className="mt-6 max-w-3xl mx-auto relative">
          <label htmlFor="blog-search" className="sr-only">Search articles</label>
          <input
            id="blog-search"
            type="search"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setBrowsePage(0); }}
            placeholder="SEARCH HERE"
            className="w-full rounded-full placeholder:text-[#171A21] font-semibold font-jetbrains-mono text-[14px] tracking-[0.2em] uppercase border border-[#171A21] pl-8 pr-16 py-3.5 outline-none focus:ring-2 focus:ring-[#1e4bff]/40"
          />
          <button
            type="button"
            aria-label="Submit search"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12.5 h-12.5 rounded-full bg-[#3B82F6] text-white grid place-items-center hover:bg-[#1a3fd9] transition"
          >
            <Search />
          </button>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter by category">
          {CATEGORIES.map((c) => {
            const active = activeCats.includes(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggleCat(c)}
                aria-pressed={active}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition ${
                  active ? "bg-[#171A21] text-[#F8F6F2] border-[#0e1116]" : "bg-transparent text-[#0e1116] border-[#0e1116]/30 hover:border-[#0e1116]"
                }`}
              >
                {c}
                <span className={`text-[10px]   ${active ? "opacity-80" : "opacity-50"}`} aria-hidden="true">✕</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {loading ? (
          <p role="status" className="col-span-full text-center text-[#3a3f47] py-12">
            Loading articles...
          </p>
        ) : browseSlice.length > 0 ? (
          browseSlice.map((p) => <Card key={`br-${p.id}-${safePage}`} post={p} />)
        ) : (
          <p role="status" className="col-span-full text-center text-[#3a3f47] py-12">
            No articles match your filters.
          </p>
        )}
      </div>

      {browsePages > 1 && (
        <Dots count={browsePages} active={safePage} onChange={setBrowsePage} className=" mt-10 md:mt-4" />
      )}
    </section>
  );
}