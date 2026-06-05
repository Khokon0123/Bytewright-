import type { Metadata } from "next";
import { MissionSection } from "@/components/sections/about/MissionSection";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { MeetingCTA } from "@/components/sections/home/MeetingCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Bytewright — Wasif Karim (CEO) and Khokon Barua (CTO). A small team with an unwavering commitment to engineering excellence.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5 block">
                About Bytewright
              </span>
              <h1
                className="font-display font-extrabold text-primary leading-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                We are Bytewright.
              </h1>
              <div className="flex flex-col gap-5 text-muted text-lg leading-relaxed">
                <p>
                  Bytewright was founded with one conviction: that software
                  should be built with the same care and intentionality as
                  any other craft. We started as engineers who were tired of
                  mediocre output — websites that looked like templates, apps
                  that felt incomplete, dashboards that confused instead of
                  clarified.
                </p>
                <p>
                  Today, we partner with businesses and individuals to build
                  digital products that actually move the needle. Whether
                  you need a portfolio that wins clients, an AI chatbot that
                  handles your support queue, or a full-scale web application —
                  we bring the same relentless attention to detail to every
                  engagement.
                </p>
                <p>
                  {/* [PLACEHOLDER] — update with real company story */}
                  Based in New York, working with clients globally.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tagline highlight */}
      <section className="py-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <blockquote
              className="font-display font-bold text-primary leading-tight text-center"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              &ldquo;Where creativity meets
              <br />
              <span className="text-accent">top-notch engineering.</span>&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <MissionSection />
      <TeamSection />
      <MeetingCTA />
    </>
  );
}
