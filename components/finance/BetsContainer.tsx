"use client";

import React, { useState } from "react";
import { BetHistory, OpenBets } from "..";

const BetsContainer = () => {
  const [openBets, setOpenBets] = useState(true);

  const activeStyle =
    "p-2 text-dark w-full bg-white font-bold shadow-md cursor-not-allowed";
  const normalStyle =
    "p-2 bg-transparent border-y text-black border-dark w-full cursor-pointer";
  return (
    <div className="w-full flex flex-col items-center justify-start gap-1 md:gap-5">
      <div className="w-full flex flex-row items-center justify-evenly mx-2">
        <button
          className={openBets ? activeStyle : normalStyle}
          onClick={() => setOpenBets(true)}
        >
          Open Bets
        </button>
        <button
          className={!openBets ? activeStyle : normalStyle}
          onClick={() => setOpenBets(false)}
        >
          Bet History
        </button>
      </div>

      <div className=" w-full">{openBets ? <OpenBets /> : <BetHistory />}</div>
    </div>
  );
};

export default BetsContainer;
