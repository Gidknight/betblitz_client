import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isSignedIn: false,
      login: () => set({ isSignedIn: true }),
      logout: () => set({ isSignedIn: false }),
    }),

    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
