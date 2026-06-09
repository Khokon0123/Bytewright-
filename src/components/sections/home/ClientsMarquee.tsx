"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type LogoEntry =
  | { name: string; kind: "img"; src: string; height?: number }
  | { name: string; kind: "text" };

const clients: LogoEntry[] = [
  { name: "Ohio Wesleyan University", kind: "img", src: "/images/logos/owu-clean.png", height: 32 },
  { name: "New York Buddhist Bihar",  kind: "text" },
  { name: "Bridging Generations",     kind: "text" },
  { name: "Flora Studio",             kind: "text" },
  { name: "OnlySwap",                 kind: "text" },
  { name: "Asia Market",              kind: "text" },
];

const doubled = [...clients, ...clients];

export function ClientsMarquee() {
  return (
    <section className="py-16 border-t border-line overflow-hidden">
      <ScrollReveal>
        <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted text-center mb-10">
          Companies we work with
        </p>
      </ScrollReveal>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
          aria-hidden
        />

        <div className="clients-track">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0 group cursor-default select-none"
              aria-hidden={i >= clients.length}
            >
              {client.kind === "img" && (
                <Image
                  src={client.src}
                  alt={client.name}
                  height={client.height ?? 32}
                  width={120}
                  className="w-auto object-contain shrink-0 transition-opacity duration-200 group-hover:opacity-70"
                  style={{
                    height: client.height ?? 32,
                    filter: "brightness(0) invert(1)",
                    opacity: 0.65,
                  }}
                />
              )}

              <span
                className="font-display font-semibold text-base whitespace-nowrap transition-opacity duration-200 group-hover:opacity-70"
                style={{ color: "var(--text-secondary)" }}
              >
                {client.name}
              </span>

              <span
                className="mx-6 w-1 h-1 rounded-full shrink-0"
                style={{ background: "var(--border)" }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
