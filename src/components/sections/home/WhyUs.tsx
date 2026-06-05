import {
  Clock,
  Zap,
  Video,
  Bell,
  MessageCircle,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const differentiators = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We commit to deadlines and we keep them. Every project ships on schedule — no excuses, no surprises.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "When speed matters, we sprint without cutting corners. From kickoff to launch faster than any agency you've worked with.",
  },
  {
    icon: Video,
    title: "Weekly Meetings",
    description:
      "A dedicated call every week to review progress, align on direction, and answer every question on your mind.",
  },
  {
    icon: Bell,
    title: "Daily Progress Updates",
    description:
      "Every single day, you know exactly where your project stands. No black boxes, no silence, no chasing us for answers.",
  },
  {
    icon: MessageCircle,
    title: "Direct Engineer Access",
    description:
      "You get a private WhatsApp group with your engineers — talk one-on-one with the people actually building your product.",
  },
  {
    icon: Wrench,
    title: "Lifetime Modifications",
    description:
      "Your project doesn't end at launch. Clients can request changes anytime — we stay your engineering partner for life.",
  },
];

export function WhyUs() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionHeader
            eyebrow="Why Bytewright"
            heading="Built different. Built better."
            subtext="We're not just another dev shop. Here's what you get when you work with us that you won't find anywhere else."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className="group relative flex flex-col gap-5 p-7 rounded-lg border border-line bg-surface hover:border-accent hover:bg-surface-hover transition-all duration-200 ease-out h-full overflow-hidden">
                  {/* Accent glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
                    style={{
                      background:
                        "radial-gradient(circle at top left, var(--accent-dim) 0%, transparent 60%)",
                    }}
                    aria-hidden
                  />

                  {/* Icon */}
                  <div className="relative w-11 h-11 flex items-center justify-center rounded-lg bg-accent-dim text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <div className="relative flex flex-col gap-2">
                    <h3 className="font-display font-bold text-primary text-lg leading-snug group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
