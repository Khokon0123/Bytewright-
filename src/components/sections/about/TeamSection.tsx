import Image from "next/image";
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.08}>
              <div className="flex flex-col gap-5 p-7 rounded-lg border border-line bg-surface hover:border-accent transition-all duration-200 ease-out group h-full">
                {/* Avatar — photo if available, else gradient initials */}
                {member.photo ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-line group-hover:ring-accent transition-all duration-200">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                    aria-label={`${member.name} avatar`}
                  >
                    <span className="font-display font-bold text-white text-xl">
                      {member.initials}
                    </span>
                  </div>
                )}

                {/* Name */}
                <h3 className="font-display font-bold text-primary text-lg group-hover:text-accent transition-colors duration-200">
                  {member.name}
                </h3>

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
