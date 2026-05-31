import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ProcessSection } from "@/components/sections/services/ProcessSection";
import { MeetingCTA } from "@/components/sections/home/MeetingCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bytewright builds portfolio sites, AI chatbots, business dashboards, websites, software apps, and web apps. Custom-priced for every project.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-16 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-accent mb-5 block">
                Services
              </span>
              <h1
                className="font-display font-extrabold text-primary leading-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Built for your goals.
                <br />
                <span className="text-accent">Not off the shelf.</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Every project we take on is scoped, priced, and built
                specifically for you. No templates, no packages — just
                exactly what you need, engineered to last.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ServicesGrid />
      <ProcessSection />
      <MeetingCTA />
    </>
  );
}
