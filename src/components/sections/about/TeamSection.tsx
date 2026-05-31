import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { team } from "@/lib/data/team";

export function TeamSection() {
  return (
    <section className="py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionHeader
            eyebrow="Team"
            heading="Small team. Serious craft."
            subtext="Bytewright was built on a simple idea: that a focused team with high standards can outperform any bloated agency."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {team.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.1}>
              <div className="flex flex-col gap-6 p-8 rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out group">
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                  aria-label={`${member.name} avatar`}
                >
                  <span className="font-display font-bold text-white text-xl">
                    {member.initials}
                  </span>
                </div>

                {/* Name + role */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-bold text-primary text-xl group-hover:text-accent transition-colors duration-200">
                    {member.name}
                  </h3>
                  <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-accent">
                    {member.role}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-muted text-sm leading-relaxed flex-1">
                  {member.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin} /* [PLACEHOLDER] */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex items-center gap-2 text-muted hover:text-accent text-sm font-medium transition-colors duration-200 w-fit border border-line rounded-lg px-3 py-2 hover:border-accent hover:bg-accent-dim"
                >
                  <LinkedinIcon size={14} />
                  Connect on LinkedIn
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
