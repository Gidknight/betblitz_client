"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./includes/MobileNav";
import Navbar from "./includes/Navbar";
import MobileTopBar from "./includes/MobileTopBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex flex-col items-center justify-start w-full h-screen md:h-full`}
      >
        <Navbar />
        <MobileTopBar />
        {children}
        <MobileNav />
      </div>
    </>
  );
}
