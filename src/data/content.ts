import type {
  ContactDetail,
  NavLink,
  Project,
  Service,
  Skill,
  SocialLink,
  Testimonial,
} from "@/src/domain/types";

/**
 * Static site content ("the copy"). Centralised so sections stay presentational
 * and the data is trivial to swap for a CMS later.
 */

/** Contact channels, kept here so every section uses the same source of truth. */
export const EMAIL = "mungai354peter@gmail.com";
/** Display form of the WhatsApp number. */
export const WHATSAPP_DISPLAY = "+254 798 644216";
/** Digits-only form used for `wa.me` links. */
export const WHATSAPP_NUMBER = "254798644216";

export const brand = {
  initials: "PK",
  name: "Peter",
} as const;

export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  availability: "Available for new projects",
  location: "Nairobi, Kenya",
  intro: "Hi, I'm Peter Kinyanjui",
  heading: {
    lead: "I design & build",
    tail: "people love to use.",
  },
  /** Rotated through in the hero headline for a dynamic feel. */
  roles: ["websites", "mobile apps", "brand identities", "user interfaces"],
  description:
    "Computer Science graduate and multidisciplinary developer based in Nairobi · blending graphic design, UI/UX, and full-stack web & mobile development to ship products that look sharp and perform.",
  stats: [
    { value: "BSc", label: "Computer Science" },
    { value: "10+", label: "Projects built" },
    { value: "5★", label: "Client rating" },
  ],
} as const;

export const skillsSection = {
  eyebrow: "My Stack",
  title: "Skills",
  subtitle:
    "The tools and technologies I reach for to take a product from idea to polished, production-ready experience.",
  skills: [
    { name: "React.js", level: 95, icon: "react" },
    { name: "JavaScript", level: 92, icon: "javascript" },
    { name: "HTML & CSS", level: 96, icon: "web-design" },
    { name: "Web Development", level: 94, icon: "web-dev" },
    { name: "UI/UX Design", level: 90, icon: "figma" },
    { name: "Mobile Apps", level: 88, icon: "mobile" },
    { name: "Graphic Design", level: 91, icon: "sketch" },
    { name: "Video Editing", level: 85, icon: "video" },
  ] satisfies readonly Skill[],
} as const;

export const servicesSection = {
  eyebrow: "What I Do",
  title: "Services",
  subtitle:
    "From first concept to final deploy · design and development crafted to help your brand stand out and convert.",
  services: [
    {
      title: "UI/ UX Design",
      description: "Intuitive, user-centred interfaces designed to convert.",
      image: "/images/services/ui-ux.jpg",
    },
    {
      title: "Web Design",
      description: "Pixel-perfect, responsive layouts with a modern aesthetic.",
      image: "/images/services/web-design.jpg",
    },
    {
      title: "Web Development",
      description: "Fast, accessible websites built on a clean architecture.",
      image: "/images/services/web-dev.jpg",
    },
    {
      title: "Graphic Design",
      description: "Logos, brand identities, and visuals that make you memorable.",
      image: "/images/services/graphic-design.jpg",
    },
  ] satisfies readonly Service[],
} as const;

export const projectsSection = {
  eyebrow: "Recent Work",
  title: "Projects",
  subtitle:
    "A selection of live products I've designed and built · click any card to explore the real site.",
  projects: [
    {
      title: "Pill Palace",
      category: "Online Pharmacy",
      image: "/images/projects/pillpalace.png",
      href: "https://pillpalace-eight.vercel.app/",
    },
    {
      title: "JustGotBetter",
      category: "Retail Platform",
      image: "/images/projects/justgotbetter.png",
      href: "https://justgotbetter-temp.vercel.app/",
    },
    {
      title: "KenyaShop",
      category: "E-Commerce",
      image: "/images/projects/kenyashop.png",
      href: "https://kenyashop.vercel.app/",
    },
    {
      title: "Graphibytes",
      category: "Agency / Web Design",
      image: "/images/projects/graphibytes.png",
      href: "https://graphibytes.vercel.app/",
    },
    {
      title: "KSUCU-MC",
      category: "Organization Website",
      image: "/images/projects/ksucu-mc.png",
      href: "https://ksucu-mc.co.ke/",
    },
  ] satisfies readonly Project[],
} as const;

export const contactSection = {
  eyebrow: "Get in touch",
  title: "Let's Talk",
  heading: "Have a project in mind? Let's build something remarkable together.",
  subtitle:
    "Fill in the form and your message opens straight in WhatsApp · or reach me directly through any of the channels below.",
  channels: [
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { label: "WhatsApp", value: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { label: "Location", value: "Nairobi, Kenya" },
  ] satisfies readonly ContactDetail[],
} as const;

// NOTE: placeholder testimonials · swap in real client quotes when available.
export const testimonialsSection = {
  eyebrow: "What Clients",
  title: "Say",
  subtitle:
    "A few words from people I've collaborated with on web, mobile, and design projects.",
  testimonials: [
    {
      name: "James M.",
      role: "Founder, Retail Startup",
      rating: 5,
      quote:
        "Peter turned our idea into a polished, fast online store. Communication was clear and the final product exceeded what we imagined.",
    },
    {
      name: "Aisha N.",
      role: "Product Manager",
      rating: 5,
      quote:
        "Great eye for design and solid engineering. The UI was clean, responsive, and our users immediately found it easier to use.",
    },
    {
      name: "Brian K.",
      role: "Small Business Owner",
      rating: 5,
      quote:
        "Delivered on time and went the extra mile on the details. I'd happily work with Peter again on future projects.",
    },
  ] satisfies readonly Testimonial[],
} as const;

export const footer = {
  description:
    "Computer Science graduate and multidisciplinary developer in Nairobi · crafting clean, high-performing websites, apps, and brand visuals.",
  navigation: navLinks.slice(0, 5),
  contact: [
    { label: "WhatsApp", value: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { label: "Address", value: "Nairobi, Kenya" },
    { label: "Hours", value: "Mon - Sat / 9am - 6pm" },
  ] satisfies readonly ContactDetail[],
  newsletter: {
    heading: "Get the latest information",
    description: "Occasional updates on new projects and what I'm building.",
  },
  copyright: "© 2026 Peter Kinyanjui. All Rights Reserved.",
  legal: [
    { label: "Terms & Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
} as const;

export const socialLinks: readonly SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
];

export const cta = {
  talk: "Let's Talk",
  contactMe: "Contact me",
  downloadResume: "Download my resume",
  seeAll: "See All",
} as const;
