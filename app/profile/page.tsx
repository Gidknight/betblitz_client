"use client";

import React from "react";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import { AccountDetail, Footer, MainButton, ProfileNav } from "@/components";
import Link from "next/link";
import {
  BiGift,
  BiHistory,
  BiLock,
  BiMessage,
  BiReceipt,
  BiUser,
} from "react-icons/bi";
import { RiAlertFill, RiCustomerServiceLine } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { BsArrowRightCircle } from "react-icons/bs";

const SECONDARY_LINKS = [
  // {
  //   id: 1,
  //   icon: <RiCustomerServiceLine />,
  //   label: "24/7 customer service",
  //   link: "/profile/customer-service",
  // },
  // {
  //   id: 2,
  //   icon: <BiMessage />,
  //   label: "message",
  //   link: "/profile/message",
  // },
  {
    id: 3,
    icon: <BiUser />,
    label: "Profile Info",
    link: "/profile/profile_info",
  },
  {
    id: 4,
    icon: <BiLock />,
    label: "safety & security",
    link: "/profile/safety_&_security",
  },
];

const Link_One = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-0 capitalize p-2 border-2 hover:shadow-lg hover:border-primary rounded-lg shadow-sm w-24 h-24 text-sm text-primary"
    >
      <span className="text-[40px]">{icon}</span>
      <span className="w-fit text-center">{label}</span>
    </Link>
  );
};

const Profile = () => {
  return (
    <ProfileLayout>
      <div className="md:px-20 flex flex-col md:flex-row items-start justify-between pt-5 md:py-5 w-full h-full gap-5">
        <AccountDetail />

        <div className="md:hidden  bg-white rounded-t-3xl w-full h-full p-5 flex flex-col items-center justify-start gap-5">
          <div className="flex flex-row items-center justify-evenly w-full">
            <Link_One
              href={"/profile/bet_history"}
              label={"sport bet history"}
              icon={<BiReceipt />}
            />
            <Link_One
              href={"/profile/transactions"}
              label={"transactions"}
              icon={<BiHistory />}
            />
            <Link_One
              href={"/profile/gifts"}
              label={"gifts"}
              icon={<BiGift />}
            />
          </div>

          <ul className="flex flex-col items-center justify-start gap-2 md:gap-4 w-full">
            {SECONDARY_LINKS.map((item, index) => (
              <Link
                href={item.link}
                key={item.id}
                className="border-2 rounded-xl p-2 flex flex-row items-center justify-between w-full cursor-pointer hover:shadow-md transition-all duration-200"
              >
                <p className="flex items-center justify-start gap-2 capitalize">
                  <span className="text-[22px]">{item.icon}</span>
                  <span>{item.label}</span>
                </p>
                <span>{<BsArrowRightCircle />}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
      <div className="pb-10 md:hidden" />
    </ProfileLayout>
  );
};

export default Profile;
