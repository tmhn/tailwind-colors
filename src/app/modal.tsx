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

export default function ColorSwatchModal({ item }: ModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="group hover:cursor-pointer w-full"
      >
        <div
          className={`rounded-3xl aspect-square flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2 bg-${item.twBackground}`}
        >
          <h3
            className={`text-xl sm:text-2xl text-${item.twForeground} font-[family-name:var(--font-figtree-sans)] font-bold text-center px-6 sm:px-10 break-words leading-snug`}
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
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="sm:flex sm:items-start flex-col">
                <DialogTitle
                  as="h3"
                  className="text-xl font-bold text-gray-900 font-[family-name:var(--font-figtree-sans)] mt-4 ml-2 mb-10"
                >
                  {item.name}
                </DialogTitle>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <div
                      className={`rounded-2xl h-64 flex items-center justify-center bg-${item.twBackground}`}
                    >
                      <h3
                        className={`text-xl sm:text-2xl text-${item.twForeground} font-[family-name:var(--font-figtree-sans)] font-bold text-center px-6 sm:p-14 break-words leading-snug`}
                      >
                        The Snooty Fox took his coffee strong, his sandwiches
                        posh, and his morning stroll down Jermyn Street precise.
                        He&apos;d then nod curtly at Buckingham Palace before
                        vanishing into a plume of bergamot.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-8 ml-2 font-[family-name:var(--font-figtree-sans)]">
                <span>
                  <span className="font-bold mr-2 select-none">
                    Foreground:
                  </span>{" "}
                  {item.twForeground}
                </span>
                <span>
                  <span className="font-bold mr-2 select-none">
                    Background:
                  </span>{" "}
                  {item.twBackground}
                </span>
              </div>
              <div className="mt-5 sm:mt-10 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center cursor-pointer rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
