"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

const CYCLE: Record<Theme, Theme> = { dark: "light", light: "system", system: "dark" };

function applyTheme(t: Theme) {
  if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else if (t === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [iconKey, setIconKey] = useState(0);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(stored);
    applyTheme(stored);
  }, []);

  const cycle = () => {
    const next = CYCLE[theme];
    setTheme(next);
    setIconKey((k) => k + 1);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  const label = theme === "dark" ? "Switch to light" : theme === "light" ? "Switch to system" : "Switch to dark";

  return (
    <button onClick={cycle} className="theme-toggle" aria-label={label} title={label}>
      <span key={iconKey} className="theme-icon-anim">
        {theme === "dark"   && <MoonIcon />}
        {theme === "light"  && <SunIcon />}
        {theme === "system" && <SystemIcon />}
      </span>
    </button>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sun-spin">
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="2"   x2="12" y2="5"   />
      <line x1="12" y1="19"  x2="12" y2="22"  />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2"  y1="12"  x2="5"   y2="12"  />
      <line x1="19" y1="12"  x2="22"  y2="12"  />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2.5" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}
