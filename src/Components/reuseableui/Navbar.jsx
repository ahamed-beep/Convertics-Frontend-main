"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar — sirf desktop */}
      <div className="hidden md:block border-b font-jetbrains-mono border-[#D3CCC5] text-[10px] sm:text-xs tracking-[0.2em] text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          <span>VOL. 04 · ISSUE 26</span>
          <span>WEDNESDAY, 29 APRIL 2026</span>
          <span>EST. 2022</span>
        </div>
      </div>

      <header className="border-[#171A21] border-b-2 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            aria-label="Convertics Home"
            className="text-2xl text-[#171A21] font-fraunces sm:text-3xl font-bold tracking-tight"
          >
            Convertics<span className="text-[#3B82F6]">.</span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex font-inter font-thin items-center gap-8 text-sm text-[#171A21]"
          >
            <Link href="/blog">Blog</Link>
            <Link href="/featured">Featured</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>

            <Link href="/contact">Contact</Link>
          </nav>

          {/* Desktop subscribe */}
          <a
            href="/subscribe"
            className="hidden md:inline-flex bg-[#3B82F6] hover:bg-blue-600 text-[#F8F6F2] font-inter text-sm px-4 py-2 rounded-full items-center gap-2"
          >
            Subscribe <span aria-hidden="true">→</span>
          </a>

          {/* Hamburger — sirf mobile */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span className="block h-0.5 w-5 bg-[#171A21]" />
            <span className="block h-0.5 w-5 bg-[#171A21]" />
            <span className="block h-0.5 w-5 bg-[#171A21]" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Left Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#F8F6F2] z-50 flex flex-col transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#171A21]">
          <a
            href="/"
            className=" text-2xl text-[#171A21] font-fraunces font-bold tracking-tight"
          >
            Convertics<span className="text-[#3B82F6]">.</span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-[#171A21] text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Top bar info */}
        <div className="px-6 py-3 border-b border-[#D3CCC5] font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-500 flex flex-col gap-1">
          <span>VOL. 04 · ISSUE 26</span>
          <span>WEDNESDAY, 29 APRIL 2026</span>
          <span>EST. 2022</span>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col font-inter font-thin text-sm text-[#171A21] flex-1"
        >
          <a href="/journal" className="px-6 py-4 border-b border-[#D3CCC5] hover:bg-neutral-100 transition-colors">
            Journal
          </a>
          <a href="/sections" className="px-6 py-4 border-b border-[#D3CCC5] hover:bg-neutral-100 transition-colors">
            Sections
          </a>
          <a href="/about" className="px-6 py-4 border-b border-[#D3CCC5] hover:bg-neutral-100 transition-colors">
            About
          </a>
          <a href="/contact" className="px-6 py-4 border-b border-[#D3CCC5] hover:bg-neutral-100 transition-colors">
            Contact
          </a>
        </nav>

        {/* Subscribe button at bottom */}
        <div className="px-6 py-6 border-t border-[#D3CCC5]">
          <a
            href="/subscribe"
            className="w-full bg-[#3B82F6] hover:bg-blue-600 text-[#F8F6F2] font-inter text-sm px-4 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
          >
            Subscribe <span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>
    </>
  );
}