import { create } from "zustand";
import { persist } from "zustand/middleware";

const themeStore = create(
  persist(
    (set) => ({
      isDark: true,

      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: "theme-storage", // storage key
    }
  )
);

export default themeStore;
