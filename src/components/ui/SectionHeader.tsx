import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold text-primary leading-tight",
          "text-3xl md:text-4xl lg:text-[2.75rem]"
        )}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={cn(
            "text-muted text-base md:text-lg leading-relaxed",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
