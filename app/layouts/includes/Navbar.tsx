"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { SPORT_LINKS } from "@/constants";
import { useNavigationStore } from "@/stores/useNavStore";
import { useAuthStore } from "@/stores/authStore";
import { usePathname, useRouter } from "next/navigation";
import { BsPerson } from "react-icons/bs";
import { MdSettings, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { FaDollarSign, FaHome } from "react-icons/fa";
import toast from "react-hot-toast";
import { PiRecord } from "react-icons/pi";
import { useUser } from "@/context/user";
// import toast from "react-hot-toast";

const Navbar = () => {
  const route = useRouter();
  const pathname = usePathname();
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const { gideon, currentTime } = useUser();

  const activeMenu = useNavigationStore((state) => state.activeMenu);
  const setActiveMenu = useNavigationStore((state) => state.setActiveMenu);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showAmount, setShowAmount] = useState(false);
  const activeStyle = `flex flex-row gap-1 items-center justify-center bg-white w-full px-2 py-2 text-primary font-bold capitalize`;
  const notActive = `flex flex-row gap-1 items-center justify-center w-full h-full px-2 py-2 text-white font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 capitalize`;

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName == "admin" && password == "admin") {
      login();
    } else {
      toast.error("Wrong Credentials");
    }
  };

  return (
    <div className="hidden px-5 lg:px-20 bg-primary text-white w-full sticky top-0 md:flex flex-col items-center justify-evenly z-20">
      <div className="flex flex-row items-center justify-between w-full py-5">
        <div>
          <h1 className="font-bold text-3xl">BetBlitz</h1>
          <p>{currentTime}</p>
        </div>

        {!isSignedIn ? (
          <div>
            <form onSubmit={handleLogin} className="flex flex-row">
              {/* login inputs */}
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="bg-red-800 color-white p-2 border-none focus:border-none"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-red-800 color-white p-2 border-none focus:border-none"
                  required
                />
              </div>

              {/* buttons */}
              <div className="flex flex-row gap-4">
                <button className="bg-red-900 p-2" type="submit">
                  Login
                </button>
                {activeMenu != "register" && (
                  <Link href={"registration/user"}>
                    <button
                      onClick={() => setActiveMenu("register")}
                      className="bg-transparent  border-2 p-2 hover:bg-white hover:text-red-500 transition-all"
                    >
                      Register
                    </button>
                  </Link>
                )}
              </div>
            </form>

            <div className="flex flex-row items-center justify-start gap-10 pt-1 text-slate-300">
              <div className="flex flex-row gap-2 items-center justify-center ">
                <input type="checkbox" />
                <label>Keep me signed in?</label>
              </div>
              <p>Forgot Password?</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <div className="flex flex-row-reverse items-center justify-between border-x px-2">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setShowAmount(!showAmount)}
                  className="text-white text-[22px]"
                >
                  {showAmount ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
                <span>Current Balance</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-500 ">
                  {gideon.currency}{" "}
                  <span>{showAmount ? gideon.balance : "******"}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              {/* <Link href={"/profile"}> */}
              <Link
                className={
                  pathname.includes("profile")
                    ? "flex flex-row items-center justify-start gap-2 bg-white text-primary font-semibold px-2 rounded-sm"
                    : "flex flex-row items-center justify-start gap-2 text-sm hover:border-b-2"
                }
                href={"/profile/profile_info"}
                onClick={() => {
                  setActiveMenu("profile");
                  // route.push("/profile");
                }}
              >
                <BsPerson />
                <span>Hello, User</span>
              </Link>

              <Link
                className={
                  pathname.includes("bets")
                    ? "flex flex-row items-center justify-start gap-2 bg-white text-primary font-semibold px-2 rounded-sm"
                    : "flex flex-row items-center justify-start gap-2 text-sm hover:border-b-2"
                }
                href={"/bets"}
                onClick={() => {
                  setActiveMenu("bets");
                  // route.push("/bets");
                }}
              >
                <PiRecord />
                <span>Open Bets</span>
              </Link>
              {/* </Link> */}

              <button
                className="flex flex-row items-center justify-start gap-2 text-sm hover:border-b-2"
                onClick={logout}
              >
                <BiLogOut />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-between w-full gap-1">
        <Link href={"/"}>
          <button
            onClick={() => setActiveMenu("/")}
            className={pathname === "/" ? activeStyle : notActive}
          >
            <FaHome className="text-[22px] hidden xl:block" /> <span>Home</span>
          </button>
        </Link>
        {SPORT_LINKS.map((link, index) => (
          <Link key={link.id} href={link.link}>
            <button
              onClick={() => setActiveMenu(link?.title)}
              className={
                pathname.includes(link?.link) ? activeStyle : notActive
              }
            >
              <span className="text-[22px] hidden xl:block">{link?.icon}</span>

              {link.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
