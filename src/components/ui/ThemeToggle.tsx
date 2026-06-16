"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@/src/components/ui/icons";
import { useThemeStore } from "@/src/stores/theme-store";

/** True once the persisted theme has rehydrated from localStorage on the client. */
function useHydrated() {
  return useSyncExternalStore(
    (onChange) => useThemeStore.persist.onFinishHydration(onChange),
    () => useThemeStore.persist.hasHydrated(),
    () => false,
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const hydrated = useHydrated();

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={
        "inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-lg text-foreground transition-colors hover:text-primary " +
        (className ?? "")
      }
    >
      {hydrated && isDark ? <Moon /> : <Sun />}
    </button>
  );
}
