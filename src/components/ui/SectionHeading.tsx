import { cn } from "@/src/lib/cn";

/**
 * Centered section heading where the second half of the title is highlighted in
 * the primary gradient, e.g. "My Work **Skills**".
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-xl text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {eyebrow} <span className="text-gradient-primary">{title}</span>
      </h2>
      {subtitle ? <p className="mt-4 text-sm leading-relaxed text-muted">{subtitle}</p> : null}
    </div>
  );
}
