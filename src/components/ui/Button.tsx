import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        {
          sm: "text-sm px-4 py-2",
          md: "text-sm px-5 py-2.5",
          lg: "text-base px-7 py-3.5",
        }[size],
        {
          primary:
            "bg-accent text-white hover:bg-accent-hover active:scale-[0.98]",
          secondary:
            "bg-surface text-primary border border-line hover:border-accent hover:bg-surface-hover active:scale-[0.98]",
          ghost:
            "bg-transparent text-primary border border-line hover:border-accent hover:bg-accent-dim active:scale-[0.98]",
        }[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 no-underline",
        {
          sm: "text-sm px-4 py-2",
          md: "text-sm px-5 py-2.5",
          lg: "text-base px-7 py-3.5",
        }[size],
        {
          primary:
            "bg-accent text-white hover:bg-accent-hover active:scale-[0.98]",
          secondary:
            "bg-surface text-primary border border-line hover:border-accent hover:bg-surface-hover active:scale-[0.98]",
          ghost:
            "bg-transparent text-primary border border-line hover:border-accent hover:bg-accent-dim active:scale-[0.98]",
        }[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
