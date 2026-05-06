"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const linkFor = (href) => (pathname === "/" ? href : `/${href}`);

  return (
    <header className="fixed left-0 right-0 top-4 z-40 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-border bg-background/72 px-3 py-3 shadow-[0_12px_55px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:px-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-lg px-2 py-1 text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground font-black text-background">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-black sm:block">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={linkFor(item.href)}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-foreground lg:hidden"
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "mx-auto mt-2 grid max-w-7xl overflow-hidden rounded-lg border border-border bg-background/88 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden",
          open ? "max-h-[440px] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={linkFor(item.href)}
              className="rounded-lg px-3 py-3 text-sm font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
