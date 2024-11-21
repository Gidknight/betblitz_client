"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./includes/MobileNav";
import Navbar from "./includes/Navbar";
import MobileTopBar from "./includes/MobileTopBar";
import { AZHeader } from "@/components";

export default function A_Z_Layout({
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
        <AZHeader />
        {children}
        <MobileNav />
      </div>
    </>
  );
}
