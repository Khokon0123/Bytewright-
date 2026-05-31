import {
  User,
  Bot,
  LayoutDashboard,
  Globe,
  Code2,
  AppWindow,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  User,
  Bot,
  LayoutDashboard,
  Globe,
  Code2,
  AppWindow,
};

export function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionHeader
            eyebrow="What We Build"
            heading="Six capabilities. One team."
            subtext="From a single landing page to a full AI-powered application, we have the expertise to turn your vision into a product that performs."
          />
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={service.id} delay={0.05}>
                <div
                  id={service.id}
                  className="group grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out"
                >
                  {/* Content side */}
                  <div className={`flex flex-col gap-5 ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-dim text-accent">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
                        {`0${i + 1}`}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-primary text-2xl mb-3 group-hover:text-accent transition-colors duration-200">
                        {service.name}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {service.longDescription}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200 w-fit"
                    >
                      Discuss this project
                      <ArrowRight size={14} strokeWidth={2} />
                    </Link>
                  </div>

                  {/* Use cases side */}
                  <div className={`flex flex-col gap-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
                    <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-muted">
                      Use Cases
                    </span>
                    <ul className="flex flex-col gap-3" role="list">
                      {service.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            strokeWidth={1.75}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          <span className="text-muted text-sm leading-relaxed">
                            {useCase}
                          </span>
                        </li>
                      ))}
                    </ul>
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
