import Link from "next/link";
import {
  User,
  Bot,
  LayoutDashboard,
  Globe,
  Code2,
  AppWindow,
  ArrowRight,
} from "lucide-react";
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

export function ServicesOverview() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionHeader
            eyebrow="Services"
            heading="Everything you need. Engineered to last."
            subtext="Six capabilities, one team. Whatever you're building, we have the expertise to bring it to life."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex flex-col gap-4 p-6 rounded-lg border border-line bg-surface hover:border-accent hover:bg-surface-hover transition-all duration-200 ease-out h-full"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-dim text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="font-display font-bold text-primary text-lg group-hover:text-accent transition-colors duration-200">
                      {service.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-muted text-xs font-medium group-hover:text-accent transition-all duration-200">
                    <span>Learn more</span>
                    <ArrowRight
                      size={12}
                      strokeWidth={2}
                      className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
