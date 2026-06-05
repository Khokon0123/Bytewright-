"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display font-bold text-xl text-primary hover:text-accent transition-colors duration-200"
          >
            <span className="text-accent">B</span>ytewright
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-sans text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ease-out",
                    pathname === link.href
                      ? "text-primary bg-accent-dim"
                      : "text-muted hover:text-primary hover:bg-accent-dim"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LinkButton href="/contact" size="sm">
              Book a Meeting
            </LinkButton>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-line text-muted hover:text-primary hover:border-accent transition-all duration-200"
            >
              <Menu size={18} strokeWidth={1.75} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-all duration-300",
          drawerOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            drawerOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-72 bg-[var(--bg)] border-l border-line flex flex-col transition-transform duration-300 ease-out",
            drawerOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-line">
            <span className="font-display font-bold text-lg">
              <span className="text-accent">B</span>ytewright
            </span>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-line text-muted hover:text-primary hover:border-accent transition-all duration-200"
            >
              <X size={18} strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-1 flex-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-base font-medium px-4 py-3 rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? "text-primary bg-accent-dim"
                    : "text-muted hover:text-primary hover:bg-accent-dim"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-line">
            <LinkButton href="/contact" size="md" className="w-full justify-center">
              Book a Meeting
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
