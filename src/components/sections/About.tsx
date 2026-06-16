"use client";

import Image from "next/image";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { ArrowUpRight, Download, MapPin, Star } from "@/src/components/ui/icons";
import { cta, profile } from "@/src/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Staggered entrance for the copy column. */
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Cycles through Peter's roles in the headline with a flip transition. */
function RotatingRole({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "0.6em", opacity: 0, rotateX: -45 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: "-0.6em", opacity: 0, rotateX: 45 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="inline-block text-gradient-primary"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function About() {
  // Cursor spotlight position (relative to the section).
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, color-mix(in srgb, var(--primary) 22%, transparent), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        aria-labelledby="hero-heading"
        onMouseMove={handleMouseMove}
        className="relative isolate flex min-h-svh items-center overflow-hidden bg-background"
      >
        {/* Ambient background: drifting aurora + faint grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-32 top-0 size-120 rounded-full bg-primary/20 blur-[120px]"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 bottom-0 size-112 rounded-full bg-primary-soft/15 blur-[120px]"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[36px_36px] opacity-50" />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-surface/60 to-transparent" />
        </div>

        {/* Cursor-following spotlight */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

        {/* Anchor for the "About" nav link, now that hero and about are merged */}
        <span id="about" aria-hidden className="absolute -top-20" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:py-28">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </motion.span>

            <motion.p variants={item} className="mt-6 text-sm font-medium tracking-wide text-muted">
              {profile.intro}
            </motion.p>

            <motion.h1
              variants={item}
              id="hero-heading"
              className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              {profile.heading.lead} <RotatingRole words={profile.roles} /> {profile.heading.tail}
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0"
            >
              {profile.description}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button as="a" href="#contact">
                {cta.contactMe}
                <ArrowUpRight />
              </Button>
              <Button as="a" href="#" variant="outline">
                {cta.downloadResume}
                <Download />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.dl
              variants={item}
              className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6 lg:justify-start"
            >
              {profile.stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl font-bold tracking-tight text-foreground">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="relative order-1 mx-auto w-full max-w-md lg:order-2"
          >
            {/* Rotating dashed halo */}
            <div
              aria-hidden
              className="absolute inset-0 -m-3 animate-[spin-slow_28s_linear_infinite] rounded-full border border-dashed border-primary/30"
            />
            {/* Soft decorative blobs */}
            <div aria-hidden className="absolute -left-6 -top-4 size-28 rounded-full bg-primary/70 blur-[6px]" />
            <div aria-hidden className="absolute -bottom-4 right-6 size-20 rounded-full bg-primary-soft/60 blur-[2px]" />

            {/* Framed portrait */}
            <div className="relative rounded-full bg-gradient-primary p-1.5 shadow-[0_40px_80px_-30px_var(--primary)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-full ring-8 ring-background">
                <Image
                  src="/images/peter.jpg"
                  alt="Peter Kinyanjui"
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, 80vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Floating accent · location */}
            <div className="absolute -left-2 top-6 flex animate-[float-slow_6s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
              <MapPin className="text-lg text-primary" />
              <div>
                <span className="block text-[0.65rem] font-medium uppercase tracking-wider text-muted">
                  Based in
                </span>
                <span className="block text-sm font-bold leading-tight text-foreground">
                  {profile.location}
                </span>
              </div>
            </div>

            {/* Floating accent · rating */}
            <div className="absolute -right-2 bottom-8 flex animate-[float-slow_7s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
              <span className="flex text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-sm" />
                ))}
              </span>
              <span className="text-xs font-semibold text-foreground">5.0 rated</span>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
