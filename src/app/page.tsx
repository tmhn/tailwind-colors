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
    <div className="items-center justify-items-center px-4 py-10 sm:px-8 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-16 sm:py-24">
            <h2 className="max-w-2xl text-balance text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 font-[family-name:var(--font-lora-serif)] font-black">
              Tailwind Colors
            </h2>
            <h2 className="mt-10 max-w-2xl text-balance text-xl sm:text-2xl md:text-3xl tracking-tight text-gray-900 font-[family-name:var(--font-lora-serif)] font-semibold">
              Find pleasing and awesome color combinations, complete with
              Tailwind class names
            </h2>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                onClick={handleScroll}
                className="flex flex-row rounded-full animated-gradient px-5 py-2.5 text-md font-[family-name:var(--font-figtree-sans)] font-semibold text-white shadow-sm focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
              >
                Take a look
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          ref={scrollTargetRef}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {colors.map((item) => (
            <ColorSwatchModal key={item.id} item={item} />
          ))}
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-center mt-32 gap-4 text-sm text-gray-600 font-[family-name:var(--font-figtree-sans)]">
        <a
          href="https://tmhn.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          &copy; {new Date().getFullYear()} – Tom Hanson
        </a>
      </footer>
    </div>
  );
}
