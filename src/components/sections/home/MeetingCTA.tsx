import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MeetingCTA() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-lg border border-line bg-accent-dim overflow-hidden p-10 md:p-16 text-center">
            {/* Subtle orb inside the section */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <span className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent">
                Get Started
              </span>

              <h2
                className="font-display font-bold text-primary leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              >
                Ready to build something remarkable?
              </h2>

              <p className="text-muted text-lg max-w-xl leading-relaxed">
                Tell us about your project. We&apos;ll review your request and
                follow up within 24 hours to find a time that works for both
                of us.
              </p>

              <LinkButton href="/contact" size="lg">
                Request a Meeting
                <ArrowRight size={16} strokeWidth={2} />
              </LinkButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
