import type { SocialIcon as SocialIconKey } from "@/src/domain/types";

const paths: Record<SocialIconKey, React.ReactNode> = {
  facebook: (
    <path d="M14 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H8.5v3h2V22h3v-7.5H16l.5-3h-3V9.5c0-.6.4-1 1-1Z" />
  ),
  twitter: (
    <path d="M18.5 3h3l-6.6 7.5L22.5 21h-6l-4.3-5.6L7.2 21H4l7-8L3.5 3h6.2l3.9 5.1Zm-1 16h1.6L8.6 4.8H6.9Z" />
  ),
  linkedin: (
    <path d="M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM4.8 9.5h3.4V21H4.8Zm6 0H14v1.6c.5-.9 1.7-1.8 3.4-1.8 2.7 0 3.8 1.7 3.8 4.6V21h-3.4v-6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V21h-3.4Z" />
  ),
  instagram: (
    <path d="M12 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm0 5.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm2.8 12a2.8 2.8 0 0 1-2.8 2.8H8A2.8 2.8 0 0 1 5.2 16V8A2.8 2.8 0 0 1 8 5.2h8A2.8 2.8 0 0 1 18.8 8Zm-2.4-8.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z" />
  ),
};

export function SocialIcon({ name, ...props }: { name: SocialIconKey } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden {...props}>
      {paths[name]}
    </svg>
  );
}
