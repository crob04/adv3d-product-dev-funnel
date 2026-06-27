"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#bottleneck", label: "The Bottleneck" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "How It Works" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("adv3d-pd-theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    if (isDark) document.documentElement.classList.add("dark");
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("adv3d-pd-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("adv3d-pd-theme", "light");
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/80 backdrop-blur-md dark:bg-brand-bg/80">
      <div className="container-edge flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Advanc3D — back to top">
          <span className="font-display text-lg font-bold tracking-tight text-brand-text">
            Advanc3D
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-brand-muted lg:inline">
            Product Development
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-text transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand-border text-brand-text transition-colors hover:bg-brand-surface-2"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#book"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-primary text-white font-semibold text-base hover:bg-brand-primary-hover focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-colors"
          >
            Book a Discovery Call
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand-border text-brand-text md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-border bg-brand-bg px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-text hover:bg-brand-surface-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white"
            >
              Book a Discovery Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
