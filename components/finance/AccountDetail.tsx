"use client";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { MainButton } from "..";
import { BiMoneyWithdraw, BiWallet } from "react-icons/bi";
import { useState } from "react";
import { useUser } from "@/context/user";
import { useRouter } from "next/navigation";

const AccountDetail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();
  const { gideon } = useUser();
  return (
    <div className="w-full md:hidden flex flex-col items-center justify-center px-5">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center justify-start gap-2">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-[28px]"
          >
            {!isVisible ? <MdVisibility /> : <MdVisibilityOff />}
          </button>
          <p>Total Balance</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <p className="uppercase font-bold">{gideon.currency}</p>
          <p>{isVisible ? gideon.balance : "****"}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-8 py-2">
        <MainButton
          isLoading={isLoading}
          customFunction={() => route.push("profile/deposit")}
          label="Deposit"
          icon={<BiWallet />}
        />
        <MainButton
          isLoading={isLoading}
          customFunction={() => route.push("profile/withdraw")}
          label="Withdraw"
          icon={<BiMoneyWithdraw />}
        />
      </div>
    </div>
  );
};

export default AccountDetail;
