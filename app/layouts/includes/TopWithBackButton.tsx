"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const TopWithBackButton = () => {
  const route = useRouter();
  const pathname = usePathname();
  return (
    <div className="md:hidden sticky top-0 z-20 bg-primary w-full  flex flex-row items-center justify-between p-5 text-white">
      {pathname === "/profile/profile_info" ||
      pathname === "/profile/bet_history" ||
      pathname === "/profile/deposit" ||
      pathname === "/profile/gifts" ||
      pathname === "/profile/transactions" ||
      pathname === "/profile/safety_&_security" ||
      pathname === "/profile/withdraw" ? (
        <button onClick={() => route.back()} className="text-[40px]">
          <BiArrowBack />
        </button>
      ) : (
        <button className="font-bold text-base">BetsBlitz</button>
      )}

      <Image
        alt="profile picture"
        src={"/images/headshot.jpg"}
        width={100}
        height={100}
        className="rounded-full border-5 border-white shadow-lg w-14 h-14"
      />
    </div>
  );
};

export default TopWithBackButton;
