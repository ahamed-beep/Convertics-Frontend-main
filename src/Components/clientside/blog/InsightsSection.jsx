"use client";

import { useState, useRef } from "react";
import Card from "../../reuseableui/Card";
import Dots from "../../reuseableui/Dots";

const POSTS = [
  {
    id: 1,
    title: "The Future of Business: Trends You Can't Ignore",
    excerpt: "AI, remote work, and digital transformation are reshaping industries. Here's what you need to know — and how to adapt.",
    category: "B2B",
    image: "https://images.unsplash.com/photo-1517242810446-cc8951b2be40?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 2,
    title: "Mastering Productivity as a Business Owner",
    excerpt: "Boost your efficiency with proven systems, time management hacks, and smarter workflows.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 3,
    title: "Branding That Converts: Build a Business People Trust",
    excerpt: "Go beyond logos — learn how to create a brand identity that connects, converts, and lasts.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 4,
    title: "Branding That Converts: Build a Business People Trust",
    excerpt: "Go beyond logos — learn how to create a brand identity that connects, converts, and lasts.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 5,
    title: "The Future of Business: Trends You Can't Ignore",
    excerpt: "AI, remote work, and digital transformation are reshaping industries. Here's what you need to know — and how to adapt.",
    category: "B2B",
    image: "https://images.unsplash.com/photo-1517242810446-cc8951b2be40?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 6,
    title: "Mastering Productivity as a Business Owner",
    excerpt: "Boost your efficiency with proven systems, time management hacks, and smarter workflows.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 7,
    title: "Mastering Productivity as a Business Owner",
    excerpt: "Boost your efficiency with proven systems, time management hacks, and smarter workflows.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 8,
    title: "Mastering Productivity as a Business Owner",
    excerpt: "Boost your efficiency with proven systems, time management hacks, and smarter workflows.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 9,
    title: "Mastering Productivity as a Business Owner",
    excerpt: "Boost your efficiency with proven systems, time management hacks, and smarter workflows.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: 10,
    title: "Mastering Productivity as a Business Owner",
    excerpt: "Boost your efficiency with proven systems, time management hacks, and smarter workflows.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=900&q=70",
  },
];

const DESKTOP_PER_PAGE = 6;

export default function InsightsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(POSTS.length / DESKTOP_PER_PAGE);
  const slice = POSTS.slice(page * DESKTOP_PER_PAGE, page * DESKTOP_PER_PAGE + DESKTOP_PER_PAGE);

  // Touch swipe
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50 && page < totalPages - 1) {
      // swipe left → next page
      setPage((p) => p + 1);
    } else if (diff < -50 && page > 0) {
      // swipe right → prev page
      setPage((p) => p - 1);
    }

    touchStartX.current = null;
  };

  return (
    <section
      aria-labelledby="insights-heading"
      className="px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 pb-10"
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
        {slice.map((p) => (
          <Card key={`ins-${p.id}-${page}`} post={p} />
        ))}
      </div>

      {totalPages > 1 && (
        <Dots
          count={totalPages}
          active={page}
          onChange={setPage}
          className="text-[#3B82F6] mt-8"
        />
      )}
    </section>
  );
}