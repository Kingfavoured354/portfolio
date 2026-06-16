import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/src/components/ui/Button";
import { ArrowUpRight } from "@/src/components/ui/icons";
import { cta, servicesSection } from "@/src/data/content";

/* Line icons paired with each service, in order. Decorative. */
const serviceIcons: ReactNode[] = [
  // UI/UX Design · pencil
  <>
    <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
    <path d="m13.5 6.5 3 3" />
  </>,
  // Web Design · layout
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </>,
  // Web Development · code
  <>
    <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" />
  </>,
  // Graphic Design · palette
  <>
    <path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h1a3 3 0 0 0 3-3 9 9 0 0 0-9-9Z" />
    <circle cx="8.5" cy="8.5" r="1" />
    <circle cx="13.5" cy="6.5" r="1" />
    <circle cx="6.5" cy="13" r="1" />
  </>,
];

/* Bento spans per card (lg+): wide, tall, small, small · no orphans. */
const spans = ["lg:col-span-2", "lg:row-span-2", "", ""];

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

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[15rem]">
          {servicesSection.services.map((service, i) => (
            <li
              key={service.title}
              className={
                "group relative h-72 overflow-hidden rounded-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-[0_28px_70px_-32px_var(--primary)] sm:h-64 lg:h-full " +
                spans[i]
              }
            >
              <a
                href="#contact"
                aria-label={`${service.title} · get in touch`}
                className="block size-full"
              >
                {/* Stock photo */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Legibility overlay + hover tint */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/15"
                />

                {/* Editorial number watermark */}
                <span
                  aria-hidden
                  className="absolute right-4 top-2 text-5xl font-bold tabular-nums text-white/85 drop-shadow-md"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon badge */}
                <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[0_12px_28px_-10px_var(--primary)] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    width="1.35em"
                    height="1.35em"
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

                {/* Title + description */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="flex items-center gap-1.5 text-lg font-semibold text-white">
                    {service.title}
                    <ArrowUpRight className="text-base opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/75">
                    {service.description}
                  </p>
                </div>
              </a>
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
