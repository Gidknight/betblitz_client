"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/user";
import ClientOnly from "@/components/ClientOnly";
import { useGeneralStore } from "@/stores/general";
import { NavItemTypes } from "@/app/types";
import { FaDollarSign, FaHome } from "react-icons/fa";
import { BsPerson, BsRecord } from "react-icons/bs";
import { MdAccountBox, MdSettings } from "react-icons/md";
import { useSecondaryNavigationStore } from "@/stores/useSecondaryNavStore";
import { PiRecord } from "react-icons/pi";
import { BiMenu } from "react-icons/bi";

interface MobileNavType {
  text: string;
  link: string;
  icon: any;
  isActive: boolean;
}

const NavItem = ({ text, link, icon, isActive }: MobileNavType) => {
  const activeStyle =
    "h-full w-full flex flex-col items-center justify-center text-primary bg-white p-2 font-bold";
  const normalStyle =
    "h-full w-full flex flex-col items-center justify-center text-white p-2";

  return (
    <Link href={link} className={isActive ? activeStyle : normalStyle}>
      {/* <button className="flex flex-col items-center justify-center text-white p-2 font-semibold"> */}
      <span className="text-[28px]"> {icon}</span>
      <span className="text-sm capitalize">{text}</span>
      {/* </button> */}
    </Link>
  );
};

export default function MobileNav() {
  // let { setRandomUsers, randomUsers } = useGeneralStore();

  const contextUser = useUser();
  const pathname = usePathname();

  // if pathname =="/" ? isActive = true : isActive = false

  useEffect(() => {
    // setRandomUsers();
  }, []);
  return (
    <div className="md:hidden bg-primary fixed w-screen bottom-0 shadow-lg z-20">
      <div className="flex flex-row items-center justify-evenly h-20 w-full">
        <NavItem
          icon={<FaHome />}
          text="home"
          link="/"
          isActive={pathname == "/" ? true : false}
        />
        <NavItem
          icon={<BiMenu />}
          text="A-Z Menu"
          link="/A-Z"
          isActive={pathname.includes("/A-Z") ? true : false}
        />
        <NavItem
          icon={<PiRecord />}
          text="open bets"
          link="/bets"
          isActive={pathname == "/bets" ? true : false}
        />
        <NavItem
          icon={<BsPerson />}
          text="me"
          link="/profile"
          isActive={pathname.includes("/profile") ? true : false}
        />
        {/* <NavItem
          icon={<MdSettings />}
          text="settings"
          link="settings"
          isActive={pathname == "/settings" ? true : false}
        /> */}
      </div>
    </div>
  );
}
