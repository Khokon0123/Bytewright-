"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: 3, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 2, suffix: "", label: "Expert Engineers" },
];

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    let gsap: typeof import("gsap").gsap;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    async function init() {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      gsap = gsapModule.gsap;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const counter = { val: 0 };
      gsap.to(counter, {
        val: value,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          if (el) {
            el.textContent = `${Math.round(counter.val)}${suffix}`;
          }
        },
      });
    }

    init();

    return () => {
      ScrollTrigger?.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className="font-display font-extrabold text-primary" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
      0{suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="py-24 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-2 py-10 md:py-0 text-center"
              >
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <span className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
