"use client";

import Image from "next/image";
import {
  FaAmazon, FaApple, FaSpotify, FaStripe,
} from "react-icons/fa";
import { SiMeta, SiNetflix, SiOpenai, SiSamsung } from "react-icons/si";
import type { IconType } from "react-icons";
import { GoogleLogo, MicrosoftLogo } from "@/components/ui/BrandLogos";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ComponentType } from "react";

type LogoEntry =
  | { name: string; kind: "svg";   Logo: ComponentType<{ size?: number }>; color?: string }
  | { name: string; kind: "icon";  icon: IconType; color: string }
  | { name: string; kind: "img";   src: string; height?: number }
  | { name: string; kind: "text";  color?: string };

const clients: LogoEntry[] = [
  { name: "Google",    kind: "svg",  Logo: GoogleLogo    },
  { name: "Microsoft", kind: "svg",  Logo: MicrosoftLogo },
  { name: "Amazon",    kind: "icon", icon: FaAmazon,   color: "#FF9900" },
  { name: "Apple",     kind: "icon", icon: FaApple,    color: "#888888" },
  { name: "Meta",      kind: "icon", icon: SiMeta,     color: "#0082FB" },
  { name: "Stripe",    kind: "icon", icon: FaStripe,   color: "#635BFF" },
  { name: "Netflix",   kind: "icon", icon: SiNetflix,  color: "#E50914" },
  { name: "Spotify",   kind: "icon", icon: FaSpotify,  color: "#1DB954" },
  { name: "OpenAI",    kind: "icon", icon: SiOpenai,   color: "#10A37F" },
  { name: "Samsung",   kind: "icon", icon: SiSamsung,  color: "#1428A0" },
  { name: "Ohio Wesleyan University", kind: "img", src: "/images/logos/owu-clean.png", height: 36 },
  { name: "Wesleyan University",      kind: "text" },
  { name: "New York Buddhist Bihar",  kind: "text" },
  { name: "Bridging Generations",     kind: "text" },
  { name: "NY Construction",          kind: "text" },
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
          {doubled.map((client, i) => {
            const textColor =
              (client.kind === "text" || client.kind === "img")
                ? "var(--text-secondary)"
                : (client as { color?: string }).color ?? "var(--text-secondary)";

            return (
              <div
                key={i}
                className="flex items-center gap-2.5 shrink-0 group cursor-default select-none"
                aria-hidden={i >= clients.length}
              >
                {/* Logo — SVG, icon, image, or nothing */}
                {client.kind === "svg" && (
                  <client.Logo size={22} />
                )}
                {client.kind === "icon" && (
                  <client.icon
                    size={22}
                    className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: client.color }}
                  />
                )}
                {client.kind === "img" && (
                  <Image
                    src={client.src}
                    alt={client.name}
                    height={client.height ?? 32}
                    width={200}
                    className="h-8 w-auto object-contain shrink-0"
                    style={{ height: client.height ?? 32 }}
                  />
                )}

                {/* Company name — hide for image logos (logo speaks for itself) */}
                {client.kind !== "img" && (
                  <span
                    className="font-display font-semibold text-base whitespace-nowrap transition-opacity duration-200 group-hover:opacity-70"
                    style={{ color: textColor }}
                  >
                    {client.name}
                  </span>
                )}

                {/* Separator dot */}
                <span
                  className="mx-6 w-1 h-1 rounded-full shrink-0"
                  style={{ background: "var(--border)" }}
                  aria-hidden
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
