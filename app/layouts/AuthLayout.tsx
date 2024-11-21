"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./includes/MobileNav";

import AuthNav from "./includes/AuthNav";

export default function AuthLayout({
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
        <AuthNav />
        {children}
        <MobileNav />
      </div>
    </>
  );
}
