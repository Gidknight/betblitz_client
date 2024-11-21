import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

interface NavStore {
  activeMenu: string;
  setActiveMenu: (value: string) => void;
}

export const useNavigationStore = create<NavStore>()(
  devtools(
    persist(
      (set, get) => ({
        activeMenu: "/",
        setActiveMenu: (value) => {
          set((state) => ({ activeMenu: value }));
        },
      }),

      {
        name: "nav-page",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
