import type { SkillIcon as SkillIconKey } from "@/src/domain/types";

/**
 * Stylised, brand-coloured icons for the skills grid. Decorative — the skill
 * name is rendered as text alongside, so these are `aria-hidden`.
 */
const icons: Record<SkillIconKey, React.ReactNode> = {
  figma: (
    <g>
      <path fill="#f24e1e" d="M8.5 3H12v6H8.5a3 3 0 0 1 0-6Z" />
      <path fill="#a259ff" d="M8.5 9H12v6H8.5a3 3 0 0 1 0-6Z" />
      <path fill="#ff7262" d="M12 3h3.5a3 3 0 0 1 0 6H12Z" />
      <path fill="#1abcfe" d="M12 15h3.5a3 3 0 1 1-3.5 3Z" />
      <circle cx="8.5" cy="18" r="3" fill="#0acf83" />
    </g>
  ),
  wordpress: (
    <g>
      <circle cx="12" cy="12" r="10" fill="#21759b" />
      <path
        fill="#fff"
        d="M6 9.5h1.6l1.5 4.4 1.2-4.4h1.3l1.2 4.4 1.5-4.4H17l-2.4 6.6h-1.4l-1.2-4.1-1.2 4.1H9.4Z"
      />
    </g>
  ),
  "web-dev": (
    <g>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" fill="#2563eb" />
      <path stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" d="m9 10-2.5 2L9 14m6-4 2.5 2L15 14m-2-5-2 6" />
    </g>
  ),
  "web-design": (
    <g>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" fill="#f97316" />
      <path fill="#fff" d="M6 8h12v2H6zM6 12h7v2H6zM6 16h5v1.5H6z" />
    </g>
  ),
  sketch: (
    <g>
      <path fill="#fdb300" d="m6 4 6-1 6 1 3 4-9 12L3 8Z" />
      <path fill="#ea6c00" d="m3 8 9 12L6 4Zm18 0-9 12 6-16Z" opacity=".7" />
      <path fill="#fdad00" d="M6 4h12l3 4H3Z" opacity=".5" />
    </g>
  ),
  xd: (
    <g>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#470137" />
      <path fill="#ff61f6" d="M8.8 8 10 10.3 11.2 8h1.6l-2 3.4 2.1 3.6h-1.7L10 12.6 8.6 15H7l2.1-3.6L7.1 8Zm6.7 0h1.5v7h-1.5Z" />
    </g>
  ),
  video: (
    <g>
      <rect x="2.5" y="5" width="14" height="14" rx="3" fill="#ff6636" />
      <path fill="#ffb38f" d="m18 9 3.5-2v10L18 15Z" />
      <path fill="#fff" d="m8 9 4 3-4 3Z" />
    </g>
  ),
  mobile: (
    <g>
      <rect x="6" y="2.5" width="12" height="19" rx="3" fill="#10b981" />
      <rect x="8" y="5" width="8" height="11" rx="1" fill="#d1fae5" />
      <circle cx="12" cy="18.5" r="1" fill="#d1fae5" />
    </g>
  ),
  react: (
    <g fill="none" stroke="#61dafb">
      <circle cx="12" cy="12" r="2" fill="#61dafb" stroke="none" />
      <g strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </g>
  ),
  javascript: (
    <g>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#f7df1e" />
      <path
        fill="#11141f"
        d="M12.2 16.6c.4.7 1 1.2 2 1.2.8 0 1.3-.4 1.3-1 0-.6-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2 .4 2.6 1.5l-1.4.9c-.3-.6-.6-.8-1.2-.8s-.9.3-.9.8c0 .5.3.8 1.1 1.1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.9-.8-3.4-1.9Zm-5.4.2c.3.5.6.9 1.2.9s1-.2 1-1.1v-5.8h1.8v5.8c0 1.9-1.1 2.7-2.7 2.7-1.5 0-2.3-.8-2.7-1.7Z"
      />
    </g>
  ),
};

export function SkillIcon({ name, ...props }: { name: SkillIconKey } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden {...props}>
      {icons[name]}
    </svg>
  );
}
