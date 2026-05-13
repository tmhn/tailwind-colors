"use client";

import { useRef } from "react";
import { colors } from "./colors";
import ColorSwatchModal from "./modal";

export default function Home() {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen px-6 sm:px-10 lg:px-16 font-[family-name:var(--font-figtree-sans)]">
      <main className="mx-auto max-w-7xl">

        {/* ── Hero ── */}
        <div className="pt-24 pb-20 sm:pt-32 sm:pb-24" style={{ borderBottom: '1px solid var(--border)' }}>

          <div className="hero-eyebrow flex items-center gap-3 mb-10">
            <div className="h-px w-9" style={{ background: 'var(--gold)', opacity: 0.65 }} />
            <span
              className="text-[11px] tracking-[0.22em] uppercase font-[family-name:var(--font-raleway-sans)] font-semibold"
              style={{ color: 'var(--text-muted)' }}
            >
              Color Reference
            </span>
          </div>

          <h1
            className="hero-title max-w-lg text-5xl sm:text-6xl md:text-7xl font-[family-name:var(--font-lora-serif)] font-bold leading-[1.06] tracking-tight"
            style={{ color: 'var(--text-cream)' }}
          >
            Tailwind<br />Colors
          </h1>

          <p
            className="hero-sub mt-6 max-w-xs sm:max-w-sm text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Curated pairings with evocative names — and the Tailwind classes to match.
          </p>

          <div className="hero-cta mt-10">
            <button
              onClick={handleScroll}
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[11px] font-[family-name:var(--font-raleway-sans)] font-bold tracking-[0.18em] uppercase cursor-pointer"
            >
              Browse Palettes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-3.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          ref={scrollTargetRef}
          className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5"
        >
          {colors.map((item, index) => (
            <ColorSwatchModal key={item.id} item={item} index={index} />
          ))}
        </div>

      </main>

      <footer
        className="flex items-center justify-center py-10 mx-6 sm:mx-10 lg:mx-16"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <a
          href="https://tmhn.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-[family-name:var(--font-raleway-sans)] tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-faint)' }}
        >
          &copy; {new Date().getFullYear()} Tom Hanson
        </a>
      </footer>
    </div>
  );
}
