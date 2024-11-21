"use client";

import React from "react";
import ClientOnly from "../ClientOnly";
import { LoginBTN, MainButton } from "..";
import Link from "next/link";

const OpenBets = () => {
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

export default OpenBets;
