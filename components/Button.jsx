import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-transparent bg-foreground text-background shadow-[0_18px_45px_rgba(45,212,191,0.2)] hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground",
  secondary:
    "border-border bg-card text-foreground backdrop-blur-xl hover:-translate-y-0.5 hover:border-primary/60 hover:bg-muted",
  ghost:
    "border-transparent bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizes = {
  sm: "h-10 px-3 text-sm",
  md: "h-12 px-5 text-sm sm:text-base",
  lg: "h-14 px-6 text-base",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-lg border font-bold transition duration-300 ease-out active:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
