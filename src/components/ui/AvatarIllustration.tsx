/**
 * Flat illustrated avatar used as the portrait placeholder (curly hair, yellow
 * glasses, pink hoodie) — stands in for a photo in this MVP. Decorative.
 */
export function AvatarIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Portrait of Peter Kinyanjui">
      <defs>
        <clipPath id="avatar-clip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <g clipPath="url(#avatar-clip)">
        <rect width="200" height="200" fill="#e9edf5" />
        {/* hair back */}
        <ellipse cx="100" cy="92" rx="62" ry="60" fill="#9a5a36" />
        {/* shoulders / hoodie */}
        <path d="M40 200v-28c0-26 27-42 60-42s60 16 60 42v28Z" fill="#ff8fa3" />
        <path d="M84 150h32l-6 18a10 10 0 0 1-20 0Z" fill="#ffd1da" />
        {/* neck */}
        <rect x="90" y="128" width="20" height="22" rx="8" fill="#f0b89a" />
        {/* face */}
        <ellipse cx="100" cy="104" rx="34" ry="38" fill="#f7c9a8" />
        {/* curly hair front */}
        <path
          d="M64 96c-6-30 18-50 36-50s42 20 36 50c-3-14-10-22-10-22s-4 10-14 12c-12 2-30-6-30-6s-2 12-10 18c-6 4-7-2-8 0Z"
          fill="#a9633b"
        />
        {/* glasses */}
        <g fill="none" stroke="#f6c544" strokeWidth="5">
          <rect x="74" y="96" width="22" height="16" rx="6" fill="#fde7a0" />
          <rect x="104" y="96" width="22" height="16" rx="6" fill="#fde7a0" />
          <path d="M96 104h8" />
        </g>
        {/* smile */}
        <path d="M90 124c4 4 16 4 20 0" stroke="#c8806a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
