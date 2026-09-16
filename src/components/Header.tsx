import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { NAV_LINKS } from "../data/portfolio";
import { useClock } from "../hooks/useClock";

export function Header() {
  const clock = useClock();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-console-border bg-console-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-3.5 font-mono text-[12.5px]">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-semibold tracking-wide"
        >
          <span className="h-[7px] w-[7px] animate-pulse2 rounded-full bg-accent-green shadow-[0_0_0_3px_rgba(56,217,150,0.15)]" />
          BIGDEV / frontend
        </a>

        <nav className="hidden gap-6 text-console-dim sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-console-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center font-mono gap-4 text-console-dim sm:flex">
          <span>
            UTC+5 · <b className="font-medium text-console-text">{clock}</b>
          </span>
          <span>Tashkent</span>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-console-border sm:hidden"
        >
          {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col px-6 font-mono text-sm sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-t border-console-border py-3.5 text-console-dim transition-colors hover:text-console-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
