"use client";
import React, { useState } from "react";
import { BetsTable, TextInput } from "..";
import { BiLoaderCircle } from "react-icons/bi";

import { BET_HISTORY_OPTIONS } from "@/constants";

const BetHistoryInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(BET_HISTORY_OPTIONS[0].type);
  const [activeSubmenu, setActiveSubmenu] = useState(
    BET_HISTORY_OPTIONS[0].subMenu[0]
  );
  const [payPalID, setPayPalID] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full flex flex-col items-center  justify-center gap-1 md:gap-5">
      <div className="w-full bg-white p-2">
        <div className="flex flex-row items-center justify-start gap-2">
          {BET_HISTORY_OPTIONS.map((option, index) => (
            <button
              key={index}
              className={
                isActive === option.type
                  ? "p-2 text-xl font-bold capitalize border-b-2 border-live"
                  : "capitalize p-2 text-xl border-b-2 border-transparent"
              }
              onClick={() => setIsActive(option.type)}
            >
              {option.type}
            </button>
          ))}
        </div>
        <div className="w-full">
          {isActive === BET_HISTORY_OPTIONS[0].type && (
            <div className="w-full flex flex-col items-start justify-center gap-1 md:gap-5 p-1 md:p-5">
              <div className="w-fit text-sm md:p-2 rounded-xl flex items-center justify-start gap-5 md:gap-2">
                {BET_HISTORY_OPTIONS[0].subMenu?.map((menu, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubmenu(menu)}
                    className={
                      activeSubmenu === menu
                        ? "p-2 bg-live text-white shadow"
                        : "p-2 bg-transparent text-slate-600 border-b shadow"
                    }
                  >
                    {menu}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* tables */}
      <div className="bg-white w-full flex flex-col p-5">
        {activeSubmenu === BET_HISTORY_OPTIONS[0].subMenu[0] && (
          <BetsTable title="All Bets Table" data={[]} />
        )}

        {activeSubmenu === BET_HISTORY_OPTIONS[0].subMenu[1] && (
          <BetsTable title="Settled Bets Table" data={[]} />
        )}

        {activeSubmenu === BET_HISTORY_OPTIONS[0].subMenu[2] && (
          <BetsTable title="Unsettled Bets Table" data={[1, 2, 3, 4]} />
        )}
      </div>
    </div>
  );
};

export default BetHistoryInfo;
