"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/src/stores/theme-store";

/**
 * Keeps the `<html>` class in sync with the persisted theme store.
 * The initial (pre-hydration) class is set by `ThemeScript` to avoid a flash,
 * so this only handles updates after the user toggles the theme.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  return <>{children}</>;
}
