import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data/projects";

export function ProjectsPreview() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Portfolio"
            heading="Built with care. Delivered with precision."
            subtext="Every project we take on becomes a partnership. Here's a sample of what we've built."
          />
          <Link
            href="/portfolio"
            className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200 whitespace-nowrap"
          >
            View all work
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <div className="group flex flex-col rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out overflow-hidden">
                {/* Image placeholder */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <span className="font-display font-bold text-2xl text-white/30 select-none">
                    {project.initials}
                  </span>
                  {/* Subtle grid overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold text-primary text-base leading-snug group-hover:text-accent transition-colors duration-200">
                      {project.client}
                    </h3>
                    {/* Star rating */}
                    <div
                      className="flex items-center gap-0.5 shrink-0"
                      aria-label={`${project.rating} out of 5 stars`}
                    >
                      {Array.from({ length: project.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="accent">{project.type}</Badge>
                    <Badge variant="muted">{project.industry}</Badge>
                  </div>

                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
