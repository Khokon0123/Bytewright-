import Link from "next/link";
import Image from "next/image";
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.08}>
              <div className="flex flex-col gap-4 p-6 rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out group h-full">
                {/* Avatar — photo if available, else gradient initials */}
                {member.photo ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-line group-hover:ring-accent transition-all duration-200">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shrink-0`}
                    aria-label={`${member.name} avatar`}
                  >
                    <span className="font-display font-bold text-white text-sm">
                      {member.initials}
                    </span>
                  </div>
                )}

                {/* Name */}
                <span className="font-display font-bold text-primary text-base group-hover:text-accent transition-colors duration-200">
                  {member.name}
                </span>

                {/* Bio */}
                <p className="text-muted text-sm leading-relaxed flex-1">{member.bio}</p>

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
