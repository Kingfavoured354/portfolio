"use client";

import Image from "next/image";
import { MotionConfig, motion, type Variants } from "motion/react";
import { ArrowUpRight } from "@/src/components/ui/icons";
import { projectsSection } from "@/src/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const heading: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Projects() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" aria-labelledby="projects-heading" className="relative overflow-hidden bg-background">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/4 size-128 -translate-x-1/3 rounded-full bg-primary/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:py-24">
          <motion.div
            variants={heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              {projectsSection.eyebrow}
            </span>
            <h2 id="projects-heading" className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              My <span className="text-gradient-primary">{projectsSection.title}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{projectsSection.subtitle}</p>
          </motion.div>

          <motion.ul
            variants={grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="mt-14 grid gap-6 sm:grid-cols-2"
          >
            {projectsSection.projects.map((project, i, arr) => {
              // A lone trailing card (odd count) becomes a full-width feature.
              const featured = i === arr.length - 1 && arr.length % 2 === 1;
              return (
              <motion.li
                key={project.title}
                variants={card}
                className={
                  "group relative overflow-hidden rounded-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-[0_32px_80px_-36px_var(--primary)]" +
                  (featured ? " sm:col-span-2" : "")
                }
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} · open live site in a new tab`}
                  className="block"
                >
                  <div className={"relative overflow-hidden " + (featured ? "aspect-4/3 sm:aspect-21/9" : "aspect-4/3")}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Legibility overlay */}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent"
                    />

                    {/* Category badge */}
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {project.category}
                    </span>

                    {/* Title + action */}
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <span
                        aria-hidden
                        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-lg text-primary-foreground shadow-lg transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                      >
                        <ArrowUpRight />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}
