import { Zap, Shield, Eye } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const values = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "We don't ship work we wouldn't put in our own portfolio. Every pixel, every function, every interaction is held to the same standard.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Speed without sacrifice. We move fast because we plan well — and because we believe every day your product isn't live is a day of opportunity lost.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No black boxes. You'll always know where your project stands, what decisions we're making, and why. Collaboration is built into our process.",
  },
];

export function MissionSection() {
  return (
    <section className="py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionHeader
            eyebrow="Our Values"
            heading="What we stand for."
            subtext="Three principles that shape how we work — and why clients come back."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="flex flex-col gap-5 p-7 rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out h-full">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-dim text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {value.description}
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
