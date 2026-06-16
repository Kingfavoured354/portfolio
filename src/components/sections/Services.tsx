import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/src/components/ui/Button";
import { ArrowUpRight } from "@/src/components/ui/icons";
import { cta, servicesSection } from "@/src/data/content";

/* Line icons paired with each service, in order. Decorative. */
const serviceIcons: ReactNode[] = [
  // UI/UX Design — pencil
  <>
    <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
    <path d="m13.5 6.5 3 3" />
  </>,
  // Web Design — layout
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </>,
  // Web Development — code
  <>
    <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" />
  </>,
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden bg-background">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 size-128 translate-x-1/3 rounded-full bg-primary/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            {servicesSection.eyebrow}
          </span>
          <h2 id="services-heading" className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            My <span className="text-gradient-primary">{servicesSection.title}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{servicesSection.subtitle}</p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {servicesSection.services.map((service, i) => (
            <li
              key={service.title}
              className="group relative overflow-hidden rounded-card border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_28px_70px_-32px_var(--primary)]"
            >
              {/* Stock photo */}
              <div className="relative aspect-16/11 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Blend the photo into the card + tint on hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-surface via-surface/30 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10"
                />
                {/* Editorial number watermark */}
                <span
                  aria-hidden
                  className="absolute right-4 top-2 text-5xl font-bold tabular-nums text-white/85 drop-shadow-md"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Body */}
              <div className="relative p-6 pt-10">
                {/* Icon badge overlapping the photo's lower edge */}
                <div className="absolute -top-6 left-6 flex size-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[0_12px_28px_-10px_var(--primary)] ring-4 ring-surface transition-transform duration-300 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    width="1.4em"
                    height="1.4em"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {serviceIcons[i]}
                  </svg>
                </div>

                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>

                <a
                  href="#contact"
                  aria-label={`${service.title} — learn more`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Learn more
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button as="a" href="#projects">
            {cta.seeAll}
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
