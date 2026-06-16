import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/src/domain/types";

export const THEME_STORAGE_KEY = "saira-theme";
export const DEFAULT_THEME: Theme = "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: DEFAULT_THEME,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set({ theme: get().theme === "dark" ? "light" : "dark" }),
    }),
    { name: THEME_STORAGE_KEY },
  ),
);
