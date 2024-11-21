"use client";

import React from "react";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import {
  AccountDetail,
  Footer,
  MainButton,
  ProfileInfo,
  ProfileNav,
} from "@/components";
import Link from "next/link";
import { BiGift, BiHistory, BiMessage, BiReceipt } from "react-icons/bi";
import { RiAlertFill, RiCustomerServiceLine } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { BsArrowRightCircle } from "react-icons/bs";

const SECONDARY_LINKS = [
  {
    id: 1,
    icon: <RiCustomerServiceLine />,
    label: "24/7 customer service",
    link: "/profile/customer-service",
  },
  {
    id: 2,
    icon: <BiMessage />,
    label: "message",
    link: "/profile/message",
  },
  {
    id: 3,
    icon: <RiAlertFill />,
    label: "how to play",
    link: "/profile/how-to-play",
  },
  {
    id: 4,
    icon: <SiAboutdotme />,
    label: "about us",
    link: "/profile/customer-service",
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
        <ProfileNav isActive="profile_info" />
        <div className="flex-1 bg-white w-full">
          <ProfileInfo />
        </div>
      </div>
      <Footer />
      <div className="pb-10 md:hidden" />
    </ProfileLayout>
  );
};

export default Profile;
