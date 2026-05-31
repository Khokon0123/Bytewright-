import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/portfolio/ProjectCard";
import { MeetingCTA } from "@/components/sections/home/MeetingCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Past projects by Bytewright — New York Buddhist Bihar, Bridging Generations, NY Construction. All 5-star rated.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase text-accent mb-5 block">
                Our Work
              </span>
              <h1
                className="font-display font-extrabold text-primary leading-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Every project,
                <br />
                <span className="text-accent">our full effort.</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                A growing portfolio of work built for clients who care about
                the details as much as we do. Three projects completed, three
                5-star reviews — and counting.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <MeetingCTA />
    </>
  );
}
