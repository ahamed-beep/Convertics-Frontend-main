"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import Card from "../../reuseableui/Card";
import Dots from "../../reuseableui/Dots";
import api from "@/Components/lib/api";

const DESKTOP_PER_PAGE = 6;

export default function InsightsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

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

  const totalPages = Math.max(1, Math.ceil(posts.length / DESKTOP_PER_PAGE));
  const safePage = Math.min(page, totalPages - 1);
  const slice = posts.slice(safePage * DESKTOP_PER_PAGE, safePage * DESKTOP_PER_PAGE + DESKTOP_PER_PAGE);

  // Touch swipe
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50 && safePage < totalPages - 1) {
      setPage(safePage + 1);
    } else if (diff < -50 && safePage > 0) {
      setPage(safePage - 1);
    }

    touchStartX.current = null;
  };

  return (
    <section
      aria-labelledby="insights-heading"
      className="px-5 sm:px-8 lg:px-16 pt-13 sm:pt-20 pb-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto text-center">
        <h1
          id="insights-heading"
          className="font-fraunces font-extrabold text-[#171A21] text-[34px] leading-[1.1] sm:text-5xl lg:text-[64px] tracking-tight"
        >
          Insights{" "}
          <span className="font-fraunces italic text-[#24262D] font-thin">That Help</span>{" "}
          You Make
          <br className="hidden sm:block" /> Better Business{" "}
          <span className="text-[#3B82F6] underline decoration-[#3B82F6] underline-offset-[8px] decoration-2">
            Decisions
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-[#171A21CC] font-inter leading-relaxed">
          Explore practical guides, platform reviews, and industry insights across business,
          marketing, technology, and design. Each article is written to help you understand
          tools better and choose what actually works for your needs.
        </p>
      </div>

      <div className="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7 md:gap-4">
        {loading ? (
          <p role="status" className="col-span-full text-center text-[#3a3f47] py-12">
            Loading articles...
          </p>
        ) : slice.length > 0 ? (
          slice.map((p) => <Card key={`ins-${p.id}-${safePage}`} post={p} />)
        ) : (
          <p role="status" className="col-span-full text-center text-[#3a3f47] py-12">
            No articles yet.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Dots
          count={totalPages}
          active={safePage}
          onChange={setPage}
          className="text-[#3B82F6] mt-8"
        />
      )}
    </section>
  );
}