import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { team } from "@/lib/data/team";

export function TeamPreview() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Team"
            heading="The people behind it."
            subtext="A small team with a big commitment to craft. Every project gets our full attention."
          />
          <Link
            href="/about"
            className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200 whitespace-nowrap"
          >
            Meet the team
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {team.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.1}>
              <div className="flex flex-col gap-5 p-6 rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out group">
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shrink-0`}
                    aria-label={`${member.name} avatar`}
                  >
                    <span className="font-display font-bold text-white text-sm">
                      {member.initials}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display font-bold text-primary text-base group-hover:text-accent transition-colors duration-200">
                      {member.name}
                    </span>
                    <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-accent">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted text-sm leading-relaxed">{member.bio}</p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin} /* [PLACEHOLDER] */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex items-center gap-1.5 text-muted hover:text-accent text-xs font-medium transition-colors duration-200 w-fit"
                >
                  <LinkedinIcon size={13} />
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
