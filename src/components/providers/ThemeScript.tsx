import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/src/stores/theme-store";

/**
 * Blocking inline script that applies the persisted theme class before the
 * first paint, preventing a light/dark flash on load. Reads the same
 * localStorage key that the zustand `persist` middleware writes.
 */
export function ThemeScript() {
  const script = `(function(){try{var t=${JSON.stringify(DEFAULT_THEME)};var raw=localStorage.getItem(${JSON.stringify(
    THEME_STORAGE_KEY,
  )});if(raw){var v=JSON.parse(raw);if(v&&v.state&&v.state.theme){t=v.state.theme;}}var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.style.colorScheme=t;}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
