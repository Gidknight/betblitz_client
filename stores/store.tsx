import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface LeagueStore {
  league: string;
  setLeague: (value: string) => void;
}

interface SportStore {
  sportType: string;
  setSportType: (value: string) => void;
}

export const useLeagueStore = create<LeagueStore>()(
  persist(
    (set, get) => ({
      league: "spanish league",
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

export const useSportStore = create<SportStore>()(
  persist(
    (set, get) => ({
      sportType: "football",
      setSportType: (value) => {
        set((state) => ({ sportType: value }));
      },
    }),

    {
      name: "sport-type",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
