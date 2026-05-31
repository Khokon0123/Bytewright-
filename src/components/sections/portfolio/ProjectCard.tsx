import { Star, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <article className="group flex flex-col rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out overflow-hidden">
        {/* Image placeholder — 16:9 */}
        <div
          className={`relative bg-gradient-to-br ${project.gradient} aspect-video flex items-center justify-center overflow-hidden`}
          aria-label={`${project.client} project thumbnail`}
        >
          <span className="font-display font-extrabold text-5xl text-white/20 select-none">
            {project.initials}
          </span>
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden
          />
          {/* Screenshot placeholder label */}
          <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 bg-black/30 rounded px-2 py-1">
            Screenshot coming soon
          </span>{/* [PLACEHOLDER] */}
        </div>

        {/* Card body */}
        <div className="flex flex-col gap-4 p-6 flex-1">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display font-bold text-primary text-xl leading-snug group-hover:text-accent transition-colors duration-200">
              {project.client}
            </h2>
            <div
              className="flex items-center gap-0.5 shrink-0"
              aria-label={`${project.rating} out of 5 stars`}
            >
              {Array.from({ length: project.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="accent">{project.type}</Badge>
            <Badge variant="muted">{project.industry}</Badge>
          </div>

          {/* Description */}
          <p className="text-muted text-sm leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Result */}
          <p className="text-primary text-sm leading-relaxed border-t border-line pt-4">
            <span className="font-medium text-accent">Result: </span>
            {project.result}
          </p>

          {/* CTA */}
          <a
            href="#" /* [PLACEHOLDER] — add live URL when available */
            className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors duration-200 w-fit mt-auto"
            aria-label={`View ${project.client} project`}
          >
            <ExternalLink size={13} strokeWidth={1.75} />
            View Project
          </a>
        </div>
      </article>
    </ScrollReveal>
  );
}
