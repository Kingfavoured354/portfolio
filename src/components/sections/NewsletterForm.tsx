"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/src/components/ui/icons";
import { newsletterSchema } from "@/src/domain/schemas";

type Status = { state: "idle" | "success"; message?: string } | { state: "error"; message: string };

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ state: "idle" });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = newsletterSchema.safeParse({ email });

    if (!result.success) {
      setStatus({ state: "error", message: result.error.issues[0].message });
      return;
    }

    // MVP: no backend yet · acknowledge the valid submission.
    setStatus({ state: "success", message: "Thanks! You're subscribed." });
    setEmail("");
  }

  const isError = status.state === "error";

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex items-center gap-2 rounded-full border border-border bg-surface p-1.5 pl-4 focus-within:border-primary">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status.state !== "idle") setStatus({ state: "idle" });
          }}
          aria-invalid={isError}
          aria-describedby={status.state !== "idle" ? "newsletter-status" : undefined}
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <ArrowUpRight />
        </button>
      </div>
      {status.state !== "idle" && status.message ? (
        <p
          id="newsletter-status"
          role={isError ? "alert" : "status"}
          className={isError ? "mt-2 text-xs text-primary" : "mt-2 text-xs text-muted"}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
