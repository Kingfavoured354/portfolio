"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Logo } from "@/src/components/ui/Logo";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { ArrowUpRight, ChevronDown, Close, Menu } from "@/src/components/ui/icons";
import { cta, navLinks } from "@/src/data/content";
import type { NavLink } from "@/src/domain/types";
import { cn } from "@/src/lib/cn";

const ACTIVE_HREF = "#about";

function DesktopLink({ link }: { link: NavLink }) {
  const isActive = link.href === ACTIVE_HREF;

  if (link.children) {
    return (
      <li className="group relative">
        <button
          type="button"
          className="inline-flex items-center gap-1 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          aria-haspopup="true"
        >
          {link.label}
          <ChevronDown className="text-xs transition-transform group-hover:rotate-180" />
        </button>
        <ul className="invisible absolute left-0 top-full z-20 min-w-44 translate-y-2 rounded-2xl border border-border bg-surface p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {link.children.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                className="block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <a
        href={link.href}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "py-2 text-sm font-medium transition-colors hover:text-foreground",
          isActive ? "text-primary" : "text-muted",
        )}
      >
        {link.label}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <DesktopLink key={link.label} link={link} />
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button as="a" href="#contact" size="sm" className="hidden sm:inline-flex">
            {cta.talk}
            <ArrowUpRight />
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-lg lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-surface lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navLinks.flatMap((link) =>
              link.children
                ? link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface-2 hover:text-foreground"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))
                : [
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={link.href === ACTIVE_HREF ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-surface-2 hover:text-foreground",
                          link.href === ACTIVE_HREF ? "text-primary" : "text-muted",
                        )}
                      >
                        {link.label}
                      </a>
                    </li>,
                  ],
            )}
            <li className="pt-2">
              <Button as="a" href="#contact" size="sm" className="w-full" onClick={() => setOpen(false)}>
                {cta.talk}
                <ArrowUpRight />
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
