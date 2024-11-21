"use client";

import Link from "next/link";
import { debounce } from "debounce";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@/app/context/user";
import { useGeneralStore } from "@/app/stores/general";
import useCreateBucketUrl from "@/hooks/useCreateBucketUrl";
import { RandomUsers } from "@/app/types";
import useSearchProfilesByName from "@/hooks/useSearchProfilesByName";

import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { navLinks } from "@/constants";
import { useNavStore } from "@/app/stores/useNavStore";
import { MdEmail, MdLocationPin } from "react-icons/md";

const NavLink = ({ title, active, link }: string | any | boolean) => {
  const activeStyle =
    "text-white font-bold py-1 my-2 border-b-4 border-white duration-300";
  const normalStyle =
    "text-white py-1 my-2 border-b border-transparent hover:border-white duration-300 transition-all";
  return (
    <Link href={link} className={active == title ? activeStyle : normalStyle}>
      {title}
    </Link>
  );
};

export default function TopNav() {
  const userContext = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const [searchProfiles, setSearchProfiles] = useState<RandomUsers[]>([]);
  let [showMenu, setShowMenu] = useState<boolean>(false);
  let { setIsLoginOpen, setIsEditProfileOpen } = useGeneralStore();
  const active = useNavStore((state) => state.active);
  const setActive = useNavStore((state) => state.setActive);

  useEffect(() => {
    setIsEditProfileOpen(false);
  }, []);

  const goTo = () => {
    if (!userContext?.user) return setIsLoginOpen(true);
    router.push("/upload");
  };

  return (
    <>
      <div
        id="TopNav"
        className="fixed z-30 flex flex-col items-center w-full border-b h-[80px] "
      >
        <div className="px-10 bg-dark w-full  h-full text-white flex flex-row items-center justify-between text-sm">
          <div className="w-1/3 flex flex-row items-center justify-start gap-4">
            <p className="flex flex-row items-center justify-start gap-2">
              <MdLocationPin color="white" />
              Trzaska cesta 300, 1000, Slovenia
            </p>
            <p className="flex flex-row items-center justify-start gap-2">
              {" "}
              <MdEmail color="white" />
              info@lukaslabe.com
            </p>
          </div>
          <div className="flex flex-row items-center justify-center w-1/3">
            <Image
              alt="50% off"
              src={"/images/50_off_neon_signs.png"}
              width={500}
              height={500}
              className="min-w-[200px] w-[400px]"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-2 w-1/3">
            <p>Custom Signs Now</p>
          </div>
        </div>

        <div
          className={`my-gradient flex items-center justify-between gap-6 w-full mx-auto px-10 py-2`}
        >
          {/* logo */}
          <Link href="/">
            <Image
              alt="Neonlove.com"
              className="min-w-[50px] w-[80px]"
              src="/images/logo.png"
              width={200}
              height={200}
              loading="lazy"
            />
          </Link>

          <div className="relative hidden md:flex flex-row items-center justify-between p-1 max-w-[830px] w-full">
            {navLinks.map((link, index) => (
              <button
                key={link?.id}
                onClick={() => {
                  setActive(link?.title);
                }}
              >
                <NavLink
                  title={link?.title}
                  active={active}
                  link={link?.link}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-52">
            <button
              onClick={() => goTo()}
              className="flex items-center p-1 hover:border hover:border-white rounded-full transition-all duration-200"
            >
              <GoPerson color="#fff" size="22" />
            </button>
            <button
              onClick={() => goTo()}
              className="flex items-center p-1 hover:border hover:border-white rounded-full transition-all duration-200"
            >
              <RiShoppingCartLine color="#fff" size="22" />
            </button>
            <button
              onClick={() => goTo()}
              className="flex items-center rounded-sm py-[6px] text-white"
            >
              USD
            </button>
            <button
              onClick={() => goTo()}
              className="flex items-center rounded-sm py-[6px] text-white"
            >
              <Image
                className="rounded-full"
                alt="language"
                src={""}
                width={10}
                height={10}
              />
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
