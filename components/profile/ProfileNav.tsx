"use client";
import { useUser } from "@/context/user";
import Link from "next/link";
import React from "react";
import {
  BiGift,
  BiHistory,
  BiLock,
  BiMoneyWithdraw,
  BiTransfer,
  BiUser,
  BiWallet,
} from "react-icons/bi";
import { PiWallet } from "react-icons/pi";

const PROFILE_NAV_LINKS = [
  { label: "my account info", icon: <BiUser />, link: "profile_info" },
  { label: "deposit", icon: <BiWallet />, link: "deposit" },
  { label: "withdraw", icon: <BiMoneyWithdraw />, link: "withdraw" },
  { label: "Bet history", icon: <BiHistory />, link: "bet_history" },
  { label: "transactions", icon: <BiTransfer />, link: "transactions" },
  { label: "gifts", icon: <BiGift />, link: "gifts" },
  { label: "safety & security", icon: <BiLock />, link: "safety_&_security" },
];

const ProfileNav = ({ isActive }: { isActive: string }) => {
  const { gideon } = useUser();
  return (
    <div className="hidden md:flex flex-col gap-4 items-center justify-center w-1/6 ">
      <div className="bg-white shadow-lg w-full">
        <div className="w-full bg-dark text-white p-2">User Id</div>
        <div className="w-full p-2">
          <p>Balance:</p>
          <p>
            <span className="font-bold">{gideon.currency}</span>{" "}
            <span>{gideon.balance}</span>
          </p>
        </div>
      </div>

      <nav className="flex flex-col items-center justify-start gap-1 bg-white w-full">
        {PROFILE_NAV_LINKS.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`p-2 pr-5 flex items-center justify-start capitalize gap-2 w-full hover:bg-liveHover transition-all duration-200 ${
              isActive == item.link &&
              "bg-live font-semibold hover:bg-live cursor-not-allowed"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ProfileNav;
