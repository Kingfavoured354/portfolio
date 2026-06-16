import { NewsletterForm } from "@/src/components/sections/NewsletterForm";
import { Logo } from "@/src/components/ui/Logo";
import { SocialIcon } from "@/src/components/ui/SocialIcon";
import { Clock, Mail, MapPin, WhatsApp } from "@/src/components/ui/icons";
import { footer, socialLinks } from "@/src/data/content";
import type { ContactDetail } from "@/src/domain/types";

const contactIcons = [WhatsApp, Mail, MapPin, Clock];

function ContactRow({ detail, index }: { detail: ContactDetail; index: number }) {
  const Icon = contactIcons[index] ?? Mail;
  return (
    <li className="flex items-center gap-3 text-sm text-muted">
      <Icon className="shrink-0 text-base text-primary" />
      {detail.href ? (
        <a href={detail.href} className="transition-colors hover:text-foreground">
          {detail.value}
        </a>
      ) : (
        <span>{detail.value}</span>
      )}
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">{footer.description}</p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-5 text-base font-semibold">Navigation</h2>
          <ul className="space-y-3">
            {footer.navigation.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  › {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 text-base font-semibold">Contact</h2>
          <ul className="space-y-3">
            {footer.contact.map((detail, i) => (
              <ContactRow key={detail.label} detail={detail} index={i} />
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-base font-semibold">{footer.newsletter.heading}</h2>
          <p className="mb-4 text-sm leading-relaxed text-muted">{footer.newsletter.description}</p>
          <NewsletterForm />
          <ul className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-base text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <SocialIcon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted sm:flex-row">
          <p>{footer.copyright}</p>
          <ul className="flex items-center gap-4">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
