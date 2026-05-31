import { Search, Paintbrush, Hammer, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We start by deeply understanding your goals, audience, and constraints. No assumptions — just the right questions.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Design",
    description:
      "We craft the user experience and visual direction. You'll see exactly what we're building before a line of code is written.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    description:
      "Our engineers build with precision. Clean code, comprehensive testing, and continuous communication throughout.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We handle deployment, monitor performance, and stay on hand to make sure your launch goes smoothly.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionHeader
            eyebrow="How We Work"
            heading="A process built for clarity."
            subtext="Four phases that take you from idea to a live product — with no surprises along the way."
            align="center"
            className="items-center text-center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="flex flex-col gap-5 p-6 rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-dim text-accent">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono font-medium text-2xl text-[var(--border)]">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {step.description}
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
