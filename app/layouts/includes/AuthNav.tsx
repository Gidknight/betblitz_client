"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

const AuthNav = () => {
  const route = useRouter();
  const pathname = usePathname();
  return (
    <nav className="flex flex-row items-center justify-between w-full px-20 py-5 bg-primary text-white">
      <button onClick={() => route.back()}>
        <BiArrowBack />
      </button>
      <Link href={"/"} className="font-bold font-poppins text-xl">
        BetBlitz
      </Link>

      {!pathname.includes("login") ? (
        <Link
          href={"/login"}
          className="p-1 border-primary border-b hover:border-white duration-200 transition-all"
        >
          Login instead
        </Link>
      ) : (
        <Link
          href={"/registration/user"}
          className="p-1 border-primary border-b hover:border-white duration-200 transition-all"
        >
          Register
        </Link>
      )}
    </nav>
  );
};

export default AuthNav;
