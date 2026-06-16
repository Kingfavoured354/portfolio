"use client";

import {
  MotionConfig,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type Variants,
} from "motion/react";
import { useEffect, useRef } from "react";
import { SkillIcon } from "@/src/components/ui/SkillIcon";
import { skillsSection } from "@/src/data/content";

/* Shared easing — a refined "premium" ease-out curve. */
const EASE = [0.22, 1, 0.36, 1] as const;

/* Cards reveal one after another (staggered). */
const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

/* Rings all fill together — `custom` carries each skill's target level. */
const ring: Variants = {
  hidden: { pathLength: 0 },
  visible: (level: number) => ({
    pathLength: level / 100,
    transition: { duration: 1.3, ease: EASE },
  }),
};

const heading: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Percentage that counts up from 0 → `value` whenever `play` becomes true. */
function CountUp({ value, play }: { value: number; play: boolean }) {
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (reduceMotion) {
      count.set(play ? value : 0);
      return;
    }
    const controls = animate(count, play ? value : 0, { duration: 1.3, ease: EASE });
    return () => controls.stop();
  }, [play, value, count, reduceMotion]);

  return (
    <span className="text-xs font-bold text-primary">
      <motion.span>{rounded}</motion.span>%
    </span>
  );
}

export function Skills() {
  const gridRef = useRef<HTMLUListElement>(null);
  /* A single trigger so every ring + counter animates at the same moment. */
  const inView = useInView(gridRef, { amount: 0.2, once: false });

  return (
    <MotionConfig reducedMotion="user">
      <section id="skills" aria-labelledby="skills-heading" className="relative overflow-hidden bg-surface">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-128 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        />

        {/* Shared gradient definition for every ring. */}
        <svg aria-hidden width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="skill-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary-soft)" />
              <stop offset="100%" stopColor="var(--primary-strong)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:py-24">
          <motion.div
            variants={heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              {skillsSection.eyebrow}
            </span>
            <h2 id="skills-heading" className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              My <span className="text-gradient-primary">{skillsSection.title}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{skillsSection.subtitle}</p>
          </motion.div>

          <motion.ul
            ref={gridRef}
            variants={grid}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
          >
            {skillsSection.skills.map((skill) => (
              <motion.li
                key={skill.name}
                variants={card}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col items-center rounded-card border border-border bg-background/60 px-4 py-8 text-center backdrop-blur transition-colors hover:border-primary/50"
              >
                {/* Hover sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-card bg-linear-to-b from-primary/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Circular progress dial */}
                <div className="relative size-32">
                  <svg viewBox="0 0 120 120" className="size-full -rotate-90">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="var(--surface-2)"
                      strokeWidth="9"
                    />
                    <motion.circle
                      variants={ring}
                      custom={skill.level}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="url(#skill-ring)"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Icon + percentage stacked in the centre */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <SkillIcon
                      name={skill.icon}
                      className="text-3xl transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="mt-1">
                      <CountUp value={skill.level} play={inView} />
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 text-sm font-semibold">{skill.name}</h3>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}
