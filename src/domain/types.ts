/**
 * Domain entities for the portfolio. Pure types — no framework or UI concerns.
 */

export type Theme = "light" | "dark";

export interface NavLink {
  readonly label: string;
  readonly href: string;
  /** Optional nested links render as a dropdown. */
  readonly children?: readonly NavLink[];
}

export interface ContactDetail {
  readonly label: string;
  readonly value: string;
  /** `tel:` / `mailto:` / external target, when the value is actionable. */
  readonly href?: string;
}

export interface Skill {
  readonly name: string;
  /** Proficiency as a percentage (0–100). */
  readonly level: number;
  /** Key into the icon registry. */
  readonly icon: SkillIcon;
}

export type SkillIcon =
  | "figma"
  | "wordpress"
  | "web-dev"
  | "web-design"
  | "sketch"
  | "xd"
  | "video"
  | "mobile"
  | "react"
  | "javascript";

export interface Service {
  readonly title: string;
  readonly description: string;
  /** Path to the card's stock photo, served from `public/`. */
  readonly image: string;
}

export interface Project {
  readonly title: string;
  /** Short category label, e.g. "Web Design". */
  readonly category: string;
  /** Path to the project's preview image, served from `public/`. */
  readonly image: string;
  /** Link to the case study / live site. */
  readonly href: string;
}

export interface Testimonial {
  readonly name: string;
  readonly role: string;
  readonly quote: string;
  /** Rating out of 5. */
  readonly rating: number;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: SocialIcon;
}

export type SocialIcon = "facebook" | "twitter" | "linkedin" | "instagram";
