import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

interface SlipStore {
  // game: {};
  mySlip: {
    id: any;
    uniqueID: any;
    homeTeam: string;
    awayTeam: string;
    sport: string;
    odd: number | string;
    oddType: string | number;
    oddCategory: string | number;
  }[];
  addToSlip: (game: {
    id: any;
    uniqueID: any;
    homeTeam: string;
    awayTeam: string;
    sport: string;
    odd: number | string;
    oddType: string | number;
    oddCategory: string | number;
  }) => void;
  removeSlip: (gameId: number | string) => void;
  removeAll: () => void;
}

export const useSlipStore = create<SlipStore>()(
  devtools(
    persist(
      (set, get) => ({
        mySlip: [],
        addToSlip: (game) => {
          if (!game) return;
          set((state) => ({
            mySlip: [game, ...state.mySlip],
          }));
        },
        removeSlip: (gameId) => {
          set((state) => {
            let slip = state.mySlip;
            let newSlip = [];
            for (let i = 0; i < slip.length; i++) {
              if (slip[i].uniqueID !== gameId) {
                newSlip.push(slip[i]);
              }
            }
            return { mySlip: newSlip };
          });
        },
        removeAll: () => {
          set((state) => ({ mySlip: [] }));
        },
      }),

      {
        name: "bet-slip",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
