import { cn } from "@/src/lib/cn";

/** Pill label used as a section eyebrow, e.g. the "About Me" tag. */
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2 px-4 py-1.5 text-xs font-semibold text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
