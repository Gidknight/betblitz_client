"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./includes/MobileNav";
import Navbar from "./includes/Navbar";
import MobileTopBar from "./includes/MobileTopBar";
import Image from "next/image";

export default function BetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex flex-col items-center justify-start w-screen h-screen md:h-full`}
      >
        <Navbar />
        {/* <MobileTopBar /> */}
        <div
          id="profile_avatar"
          className="md:px-20 sticky top-0 flex items-center justify-end w-full gap-3 bg-black bg-opacity-10 p-2"
        >
          {/* <Image
            alt="profile picture"
            src={"/images/headshot.jpg"}
            width={100}
            height={100}
            className="rounded-full border-5 border-white shadow-lg w-16 h-16"
          /> */}
          <h2 className="header-text">{"Username"}</h2>
        </div>
        {children}
        <MobileNav />
      </div>
    </>
  );
}
