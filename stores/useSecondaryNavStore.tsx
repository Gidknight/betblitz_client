import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

interface NavStore {
  activeMenu: string;
  setActiveMenu: (value: string) => void;
}

export const useSecondaryNavigationStore = create<NavStore>()(
  devtools(
    persist(
      (set, get) => ({
        activeMenu: "/",
        setActiveMenu: (value) => {
          set((state) => ({ activeMenu: value }));
        },
      }),

      {
        name: "secondary-nav-page",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
