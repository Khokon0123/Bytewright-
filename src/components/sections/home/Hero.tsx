"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

/* ─────────────────────────────────────────────────────────────
   Monitor mockup: cinematic dark monitor image + live iframe
   Tweak SCREEN values if the iframe drifts off the bezels.
   ───────────────────────────────────────────────────────────── */
const SCREEN = {
  left:   "10.2%",
  top:    "6.2%",
  width:  "79.6%",
  height: "66.8%",
};

function MonitorMockup() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      {/* Monitor image — dark background blends with hero */}
      <Image
        src="/images/monitor-transparent.png"
        alt="Monitor showing the Bytewright website"
        width={1600}
        height={1200}
        className="w-full h-auto"
        priority
      />

      {/* Live Bytewright site overlaid on the screen */}
      <div
        style={{
          position: "absolute",
          left:     SCREEN.left,
          top:      SCREEN.top,
          width:    SCREEN.width,
          height:   SCREEN.height,
          overflow: "hidden",
          borderRadius: "2px",
          background: "#07070F",
        }}
      >
        <iframe
          src="/"
          title="Bytewright website preview"
          aria-hidden
          tabIndex={-1}
          style={{
            position:        "absolute",
            top:             0,
            left:            0,
            width:           "250%",
            height:          "250%",
            transform:       "scale(0.4)",
            transformOrigin: "top left",
            pointerEvents:   "none",
            border:          "none",
          }}
        />
        {/* Subtle screen glare */}
        <div style={{
          position:      "absolute",
          inset:         0,
          pointerEvents: "none",
          zIndex:        2,
          background:    "linear-gradient(135deg,rgba(255,255,255,0.025) 0%,transparent 40%)",
        }} />
      </div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export function Hero() {
  const textRef    = useRef<HTMLDivElement>(null);
  const monitorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    async function animate() {
      const { gsap } = await import("gsap");
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 }
      ).fromTo(monitorRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 },
        "-=0.55"
      );
    }

    animate();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Gradient orb */}
      <div className="hero-orb" aria-hidden />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px,transparent 1px)," +
            "linear-gradient(90deg,var(--text-primary) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Left: text */}
          <div ref={textRef} className="flex flex-col gap-7 opacity-0">
            <h1
              className="font-display font-extrabold text-primary leading-[1.08]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Where creativity meets{" "}
              <span className="text-accent">top-notch engineering.</span>
            </h1>

            <p className="text-muted text-lg leading-relaxed max-w-lg">
              We build premium digital products — from portfolio sites and AI
              chatbots to full-scale software applications. Crafted with
              precision, delivered with purpose.
            </p>

            <div className="flex flex-wrap gap-3">
              <LinkButton href="/portfolio" size="lg" variant="primary">
                View Our Work
                <ArrowRight size={16} strokeWidth={2} />
              </LinkButton>
              <LinkButton href="/contact" size="lg" variant="ghost">
                Book a Meeting
              </LinkButton>
            </div>
          </div>

          {/* Right: monitor */}
          <div
            ref={monitorRef}
            className="opacity-0 flex justify-center lg:justify-end"
          >
            <MonitorMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
