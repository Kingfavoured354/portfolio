import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { StarRating } from "@/src/components/ui/StarRating";
import { Quote } from "@/src/components/ui/icons";
import { testimonialsSection } from "@/src/data/content";

function initials(name: string) {
  return name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          subtitle={testimonialsSection.subtitle}
        />
        <h2 id="testimonials-heading" className="sr-only">
          {testimonialsSection.eyebrow} {testimonialsSection.title}
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonialsSection.testimonials.map((testimonial) => (
            <li key={testimonial.name} className="rounded-card border border-border bg-background p-7">
              <StarRating rating={testimonial.rating} />
              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-11 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground"
                  >
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="text-3xl text-primary/30" />
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-muted">
                {testimonial.quote}
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
