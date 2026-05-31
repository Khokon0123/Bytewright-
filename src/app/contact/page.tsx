import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkedinIcon, TwitterXIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a meeting with Bytewright. Tell us about your project and we'll follow up within 24 hours.",
};

const nextSteps = [
  {
    number: "01",
    title: "We review your request",
    description: "We read every submission and assess the best way to help.",
  },
  {
    number: "02",
    title: "We follow up within 24 hours",
    description:
      "You'll hear from us by email to schedule a discovery call.",
  },
  {
    number: "03",
    title: "We scope your project",
    description:
      "On the call, we'll align on goals, timeline, and a custom quote.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-2xl mb-16">
          <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-accent mb-5 block">
            Contact
          </span>
          <h1
            className="font-display font-extrabold text-primary leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Let&apos;s build something.
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Tell us about your project. No obligation — just a conversation
            to see if we&apos;re the right fit.
          </p>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — 3 columns */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Info panel — 2 columns */}
          <aside className="lg:col-span-2 flex flex-col gap-8">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-5 p-7 rounded-lg border border-line bg-surface">
                <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
                  What happens next?
                </span>
                <div className="flex flex-col gap-5">
                  {nextSteps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="font-mono font-medium text-sm text-accent shrink-0 w-5">
                        {step.number}
                      </span>
                      <div>
                        <p className="text-primary text-sm font-medium mb-1">
                          {step.title}
                        </p>
                        <p className="text-muted text-xs leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-4 p-7 rounded-lg border border-line bg-surface">
                <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
                  Reach us directly
                </span>

                <a
                  href="mailto:hello@bytewright.com"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-200 text-sm"
                >
                  <Mail size={15} strokeWidth={1.75} className="shrink-0 text-accent" />
                  hello@bytewright.com {/* [PLACEHOLDER] */}
                </a>

                <span className="flex items-center gap-3 text-muted text-sm">
                  <MapPin size={15} strokeWidth={1.75} className="shrink-0 text-accent" />
                  New York, USA {/* [PLACEHOLDER] */}
                </span>

                <span className="flex items-center gap-3 text-muted text-sm">
                  <Clock size={15} strokeWidth={1.75} className="shrink-0 text-accent" />
                  Response within 24 hours
                </span>

                {/* Socials */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="#" /* [PLACEHOLDER] */
                    aria-label="LinkedIn"
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-line text-muted hover:text-accent hover:border-accent hover:bg-accent-dim transition-all duration-200"
                  >
                    <LinkedinIcon size={13} />
                  </a>
                  <a
                    href="#" /* [PLACEHOLDER] */
                    aria-label="Twitter / X"
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-line text-muted hover:text-accent hover:border-accent hover:bg-accent-dim transition-all duration-200"
                  >
                    <TwitterXIcon size={13} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
