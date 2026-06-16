"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Mail, MapPin, WhatsApp } from "@/src/components/ui/icons";
import { WHATSAPP_NUMBER, contactSection } from "@/src/data/content";
import { contactSchema } from "@/src/domain/schemas";

const channelIcons: Record<string, typeof Mail> = {
  Email: Mail,
  WhatsApp: WhatsApp,
  Location: MapPin,
};

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const FIELDS: { name: Field; label: string; type: string; rows?: number }[] = [
  { name: "name", label: "Your name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
  { name: "message", label: "Your message", type: "textarea", rows: 4 },
];

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }

    // Hand the message off to WhatsApp with the details pre-filled.
    const { name, email, message } = result.data;
    const text = `Hi Peter, I'm ${name} (${email}).\n\n${message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setErrors({});
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  }

  function update(field: Field) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: event.target.value }));
      if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
      if (sent) setSent(false);
    };
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-20 overflow-hidden bg-surface">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 size-128 translate-x-1/3 rounded-full bg-primary/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Intro + channels */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            {contactSection.eyebrow}
          </span>
          <h2 id="contact-heading" className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {contactSection.heading}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{contactSection.subtitle}</p>

          <ul className="mt-10 space-y-4">
            {contactSection.channels.map((channel) => {
              const Icon = channelIcons[channel.label] ?? Mail;
              return (
                <li key={channel.label} className="flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-background text-primary ring-1 ring-border">
                    <Icon className="text-lg" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">{channel.label}</p>
                    {channel.href ? (
                      <a href={channel.href} className="text-sm font-semibold transition-colors hover:text-primary">
                        {channel.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold">{channel.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-card border border-border bg-background p-6 shadow-[0_30px_70px_-40px_var(--primary)] sm:p-8"
        >
          <div className="space-y-5">
            {FIELDS.map((field) => {
              const error = errors[field.name];
              const describedBy = error ? `${field.name}-error` : undefined;
              const inputClass =
                "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary " +
                (error ? "border-primary/70" : "border-border");
              return (
                <div key={field.name}>
                  <label htmlFor={field.name} className="mb-2 block text-sm font-medium">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      rows={field.rows}
                      value={values[field.name]}
                      onChange={update(field.name)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={describedBy}
                      className={inputClass + " resize-none"}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      value={values[field.name]}
                      onChange={update(field.name)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={describedBy}
                      className={inputClass}
                    />
                  )}
                  {error ? (
                    <p id={`${field.name}-error`} role="alert" className="mt-1.5 text-xs text-primary">
                      {error}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <Button type="submit" className="mt-6 w-full">
            Send via WhatsApp
            <WhatsApp />
          </Button>

          {sent ? (
            <p role="status" className="mt-4 text-center text-sm font-medium text-primary">
              Opening WhatsApp with your message — just hit send there to reach me.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
