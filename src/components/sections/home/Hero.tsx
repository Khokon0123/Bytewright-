"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    async function animate() {
      const { gsap } = await import("gsap");

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );
    }

    animate();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Gradient orb */}
      <div className="hero-orb" aria-hidden />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <span
          ref={eyebrowRef}
          className="inline-block font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-accent mb-6 opacity-0"
        >
          Bytewright — Software Company
        </span>

        {/* H1 */}
        <h1
          ref={headingRef}
          className="font-display font-extrabold text-primary leading-[1.08] mb-6 opacity-0"
          style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
        >
          Where creativity meets
          <br />
          <span className="text-accent">top-notch engineering.</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 opacity-0"
        >
          We build premium digital products — from portfolio sites and AI
          chatbots to full-scale software applications. Crafted with precision,
          delivered with purpose.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
        >
          <LinkButton href="/portfolio" size="lg" variant="primary">
            View Our Work
            <ArrowRight size={16} strokeWidth={2} />
          </LinkButton>
          <LinkButton href="/contact" size="lg" variant="ghost">
            Book a Meeting
          </LinkButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors duration-200 group"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.75}
          className="animate-bounce group-hover:text-accent"
        />
      </Link>
    </section>
  );
}
