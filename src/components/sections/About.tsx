import { AvatarIllustration } from "@/src/components/ui/AvatarIllustration";
import { Button } from "@/src/components/ui/Button";
import { ArrowUpRight, Download, MapPin, Star } from "@/src/components/ui/icons";
import { cta, profile } from "@/src/data/content";

/** Landing hero — the first thing visitors see. Premium, dark-first, intro-led. */
export function About() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-background"
    >
      {/* Ambient background: gradient glows + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 size-[28rem] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 size-[26rem] rounded-full bg-primary-soft/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:36px_36px] opacity-50" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-surface/60 to-transparent" />
      </div>

      {/* Anchor for the "About" nav link, now that hero and about are merged */}
      <span id="about" aria-hidden className="absolute -top-20" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:py-28">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>

          <p className="mt-6 text-sm font-medium tracking-wide text-muted">{profile.intro}</p>

          <h1
            id="hero-heading"
            className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            {profile.heading.lead}{" "}
            <span className="text-gradient-primary">{profile.heading.highlight}</span>{" "}
            {profile.heading.tail}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0">
            {profile.description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button as="a" href="#contact">
              {cta.contactMe}
              <ArrowUpRight />
            </Button>
            <Button as="a" href="#" variant="outline">
              {cta.downloadResume}
              <Download />
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6 lg:justify-start">
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
          </dl>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md">
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
            <div className="overflow-hidden rounded-full ring-8 ring-background">
              <AvatarIllustration className="aspect-square w-full" />
            </div>
          </div>

          {/* Floating accent — location */}
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

          {/* Floating accent — rating */}
          <div className="absolute -right-2 bottom-8 flex animate-[float-slow_7s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
            <span className="flex text-star">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="text-sm" />
              ))}
            </span>
            <span className="text-xs font-semibold text-foreground">5.0 rated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
