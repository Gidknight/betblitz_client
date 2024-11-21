import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLeagueStore = create(
  persist(
    (set, get) => ({
      league: "",
      setLeague: (value) => {
        set((state) => ({ league: value }));
      },
    }),

    {
      name: "league",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
