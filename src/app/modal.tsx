"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

type ModalProps = {
  item: {
    id: string;
    twBackground: string;
    twForeground: string;
    name: string;
  };
  index: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TEXT_COLORS = {
  "amber-400": "text-amber-400",
  black: "text-black",
  "blue-500": "text-blue-500",
  "cyan-400": "text-cyan-400",
  "emerald-700": "text-emerald-700",
  "gray-100": "text-gray-100",
  "gray-800": "text-gray-800",
  "green-500": "text-green-500",
  "green-800": "text-green-800",
  "indigo-500": "text-indigo-500",
  "lime-400": "text-lime-400",
  "orange-300": "text-orange-300",
  "pink-500": "text-pink-500",
  "red-300": "text-red-300",
  "red-500": "text-red-500",
  "rose-400": "text-rose-400",
  "rose-500": "text-rose-500",
  "sky-400": "text-sky-400",
  "sky-500": "text-sky-500",
  "slate-500": "text-slate-500",
  "slate-700": "text-slate-700",
  "stone-300": "text-stone-300",
  "teal-400": "text-teal-400",
  white: "text-white",
  "yellow-50": "text-yellow-50",
  "yellow-400": "text-yellow-400",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BG_COLORS = {
  "amber-400": "bg-amber-400",
  "amber-500": "bg-amber-500",
  black: "bg-black",
  "blue-500": "bg-blue-500",
  "cyan-400": "bg-cyan-400",
  "gray-100": "bg-gray-100",
  "gray-800": "bg-gray-800",
  "green-500": "bg-green-500",
  "green-300": "bg-green-300",
  "indigo-500": "bg-indigo-500",
  "lime-400": "bg-lime-400",
  "orange-100": "bg-orange-100",
  "orange-300": "bg-orange-300",
  "pink-500": "bg-pink-500",
  "pink-800": "bg-pink-800",
  "red-100": "bg-red-100",
  "red-400": "bg-red-400",
  "red-500": "bg-red-500",
  "rose-400": "bg-rose-400",
  "sky-300": "bg-sky-300",
  "sky-400": "bg-sky-400",
  "slate-700": "bg-slate-700",
  "teal-400": "bg-teal-400",
  "teal-700": "bg-teal-700",
  "teal-900": "bg-teal-900",
  "teal-950": "bg-teal-950",
  white: "bg-white",
  "yellow-50": "bg-yellow-50",
  "yellow-400": "bg-yellow-400",
};

export default function ColorSwatchModal({ item, index }: ModalProps) {
  const [open, setOpen] = useState(false);
  const [copiedFg, setCopiedFg] = useState(false);
  const [copiedBg, setCopiedBg] = useState(false);

  const copy = (text: string, field: "fg" | "bg") => {
    navigator.clipboard.writeText(text);
    if (field === "fg") {
      setCopiedFg(true);
      setTimeout(() => setCopiedFg(false), 1800);
    } else {
      setCopiedBg(true);
      setTimeout(() => setCopiedBg(false), 1800);
    }
  };

  const delay = `${Math.min(index * 0.045, 0.55)}s`;

  return (
    <div>
      {/* ── Swatch card ── */}
      <button
        onClick={() => setOpen(true)}
        className="swatch-card group w-full cursor-pointer"
        style={{ animationDelay: delay }}
      >
        <div
          className={`rounded-2xl aspect-square flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-2.5 bg-${item.twBackground}`}
          style={{
            boxShadow: '0 4px 20px -8px rgba(0,0,0,0.55)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              '0 20px 44px -8px rgba(0,0,0,0.65)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              '0 4px 20px -8px rgba(0,0,0,0.55)';
          }}
        >
          <h3
            className={`text-lg sm:text-xl text-${item.twForeground} font-[family-name:var(--font-lora-serif)] font-bold text-center px-5 sm:px-8 break-words leading-snug`}
          >
            {item.name.split(" ").length > 1 ? (
              <>
                {item.name.split(" ")[0]}
                <br />
                {item.name.split(" ").slice(1).join(" ")}
              </>
            ) : (
              item.name
            )}
          </h3>
        </div>
      </button>

      {/* ── Modal ── */}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 backdrop-blur-sm bg-black/70 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-2xl text-left shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl data-[closed]:sm:scale-95"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Full-width swatch preview */}
              <div
                className={`h-52 sm:h-64 w-full flex items-center justify-center bg-${item.twBackground}`}
              >
                <p
                  className={`text-sm sm:text-base text-${item.twForeground} font-[family-name:var(--font-lora-serif)] font-medium text-center px-8 sm:px-14 leading-relaxed max-w-sm`}
                >
                  The Snooty Fox took his coffee strong, his sandwiches posh,
                  and his morning stroll down Jermyn Street precise. He&apos;d
                  then nod curtly at Buckingham Palace before vanishing into a
                  plume of bergamot.
                </p>
              </div>

              {/* Content */}
              <div className="px-6 pt-7 pb-8 sm:px-8">
                <DialogTitle
                  as="h3"
                  className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-lora-serif)] mb-6"
                  style={{ color: 'var(--text-cream)' }}
                >
                  {item.name}
                </DialogTitle>

                {/* Class chips */}
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => copy(`text-${item.twForeground}`, "fg")}
                    className="flex items-center justify-between w-full rounded-xl px-4 py-3.5 text-left transition-opacity hover:opacity-75 cursor-pointer"
                    style={{
                      background: 'var(--bg-raised)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <span
                        className="block text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-raleway-sans)] font-semibold mb-1"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Foreground
                      </span>
                      <code
                        className="text-sm font-[family-name:var(--font-geist-mono)]"
                        style={{ color: 'var(--text-cream)' }}
                      >
                        text-{item.twForeground}
                      </code>
                    </div>
                    <span
                      className="text-[10px] font-[family-name:var(--font-raleway-sans)] font-bold tracking-[0.15em] uppercase transition-colors"
                      style={{ color: copiedFg ? 'var(--gold-light)' : 'var(--text-faint)' }}
                    >
                      {copiedFg ? "Copied!" : "Copy"}
                    </span>
                  </button>

                  <button
                    onClick={() => copy(`bg-${item.twBackground}`, "bg")}
                    className="flex items-center justify-between w-full rounded-xl px-4 py-3.5 text-left transition-opacity hover:opacity-75 cursor-pointer"
                    style={{
                      background: 'var(--bg-raised)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <span
                        className="block text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-raleway-sans)] font-semibold mb-1"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Background
                      </span>
                      <code
                        className="text-sm font-[family-name:var(--font-geist-mono)]"
                        style={{ color: 'var(--text-cream)' }}
                      >
                        bg-{item.twBackground}
                      </code>
                    </div>
                    <span
                      className="text-[10px] font-[family-name:var(--font-raleway-sans)] font-bold tracking-[0.15em] uppercase transition-colors"
                      style={{ color: copiedBg ? 'var(--gold-light)' : 'var(--text-faint)' }}
                    >
                      {copiedBg ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>

                {/* Close */}
                <div className="mt-7 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[11px] font-[family-name:var(--font-raleway-sans)] font-bold tracking-[0.18em] uppercase transition-opacity hover:opacity-60 cursor-pointer"
                    style={{
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
