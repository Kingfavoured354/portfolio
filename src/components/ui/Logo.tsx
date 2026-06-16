import { brand } from "@/src/data/content";
import { cn } from "@/src/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("inline-flex items-center gap-2", className)} aria-label={`${brand.name} home`}>
      <span className="flex size-9 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
        {brand.initials}
      </span>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-primary">{brand.name.charAt(0)}</span>
        {brand.name.slice(1)}
      </span>
    </a>
  );
}
