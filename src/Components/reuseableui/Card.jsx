"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Card({ post }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`group flex flex-col transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
      `}
    >
      <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-[#e7e1d6]">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          decoding="async"
          width={900}
          height={675}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 font-semibold text-[#171A21] font-fraunces text-[20px] md:text-[28px] leading-[1.2] tracking-tight">
        {post.title}
      </h3>

      <p className="mt-2 text-md font-[500px] text-[#575E6B] font-inter leading-relaxed">
        {post.excerpt}
      </p>

      <a
        href={`/blog/${post.id}`}
        aria-label={`Read more about ${post.title}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm tracking-[0.10em] uppercase text-[#3B82F6] font-bold hover:gap-2.5 transition-all"
      >
        Read more <ArrowRight className="w-4 h-4" />
      </a>
    </article>
  );
}