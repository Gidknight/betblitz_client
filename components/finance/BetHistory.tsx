"use client";

import React from "react";
import { LoginBTN } from "..";
import ClientOnly from "../ClientOnly";

const BetHistory = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 p-5">
        <p className="text-center">
          Please Log In to see your Open Bets and Cashout Bets
        </p>
        <LoginBTN />
      </div>
      <ClientOnly>
        <div>
          <div>list of bets</div>
        </div>
      </ClientOnly>
    </div>
  );
};

export default BetHistory;
