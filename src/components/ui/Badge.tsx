import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "muted" | "success";
}

export function Badge({
  variant = "muted",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono text-[11px] font-medium tracking-wide px-2.5 py-0.5",
        {
          accent: "bg-accent-dim text-accent",
          muted: "bg-[var(--border)] text-muted",
          success: "bg-emerald-500/10 text-emerald-400",
        }[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
