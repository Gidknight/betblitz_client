"use client";

import React from "react";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import {
  AccountDetail,
  Footer,
  ProfileNav,
  TransactionInfo,
  BetSlip,
} from "@/components";
import Link from "next/link";
import { BiGift, BiHistory, BiMessage, BiReceipt } from "react-icons/bi";

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

const Transactions = () => {
  return (
    <ProfileLayout>
      <div className="md:px-20 flex flex-col md:flex-row items-start justify-between pt-5 md:py-5 w-full h-full gap-5">
        <ProfileNav isActive="transactions" />
        <div className="flex-1 w-full">
          <TransactionInfo />
        </div>

        <div>
          <BetSlip />
        </div>
      </div>
      <Footer />
      <div className="pb-10 md:hidden" />
    </ProfileLayout>
  );
};

export default Transactions;
