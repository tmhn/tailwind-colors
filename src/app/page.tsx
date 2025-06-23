"use client";

import { useRef } from "react";

import { colors } from "./colors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TEXT_COLORS = {
  "gray-100": "text-gray-100",
  "gray-800": "text-gray-800",
  "rose-400": "text-rose-400",
  "amber-400": "text-amber-400",
  black: "text-black",
  white: "text-white",
  "slate-700": "text-slate-700",
  "indigo-500": "text-indigo-500",
  "blue-500": "text-blue-500",
  "red-500": "text-red-500",
  "green-500": "text-green-500",
  "lime-400": "text-lime-400",
  "teal-400": "text-teal-400",
  "cyan-400": "text-cyan-400",
  "pink-500": "text-pink-500",
  "sky-400": "text-sky-400",
  "yellow-50": "text-yellow-50",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BG_COLORS = {
  "gray-100": "bg-gray-100",
  "gray-800": "bg-gray-800",
  "rose-400": "bg-rose-400",
  "amber-400": "bg-amber-400",
  black: "bg-black",
  white: "bg-white",
  "slate-700": "bg-slate-700",
  "indigo-500": "bg-indigo-500",
  "blue-500": "bg-blue-500",
  "red-400": "bg-red-400",
  "red-500": "bg-red-500",
  "green-500": "bg-green-500",
  "lime-400": "bg-lime-400",
  "teal-400": "bg-teal-400",
  "teal-700": "bg-teal-700",
  "cyan-400": "bg-cyan-400",
  "pink-500": "bg-pink-500",
  "sky-400": "bg-sky-400",
  "yellow-50": "bg-yellow-50",
};

export default function Home() {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px]">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:py-32">
            <h2 className="max-w-2xl text-balance text-4xl tracking-tight text-gray-900 sm:text-5xl font-[family-name:var(--font-lora-serif)] font-black">
              Tailwind Colors
            </h2>
            <h2 className="mt-20 max-w-2xl text-balance text-3xl tracking-tight text-gray-900 sm:text-5xl font-[family-name:var(--font-lora-serif)] font-semibold">
              Find pleasing and awesome color combinations, complete with
              Tailwind class names
            </h2>
            <div className="mt-20 flex items-center gap-x-6">
              <a
                href="#"
                onClick={handleScroll}
                className="flex flex-row rounded-full bg-indigo-600 px-5 py-2.5 text-md font-[family-name:var(--font-figtree-sans)] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
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
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {colors.map((item) => (
            <div key={item.id} className="group relative">
              <div
                className={`mt-4 flex justify-between bg-${item.twBackground} aspect-square h-80 w-80 rounded-3xl flex items-center justify-center`}
              >
                <div>
                  <h3
                    className={`text-2xl text-${item.twForeground} font-[family-name:var(--font-figtree-sans)] font-bold text-center px-10 break-words leading-snug`}
                  >
                    {item.name.split(" ").length > 1 ? (
                      <>
                        {item.name.split(" ")[0]} <br />{" "}
                        {item.name.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      item.name
                    )}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-80">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-figtree-sans)]"
          href="https://tmhn.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; {new Date().getFullYear()} - Tom Hanson
        </a>
      </footer>
    </div>
  );
}
