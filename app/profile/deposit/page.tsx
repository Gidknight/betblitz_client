"use client";

import React from "react";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import { DepositeInfo, Footer, ProfileNav } from "@/components";

const Deposite = () => {
  return (
    <ProfileLayout>
      <div className="md:px-20 flex flex-col md:flex-row items-start justify-between pt-5 md:py-5 w-full h-full gap-5">
        <ProfileNav isActive="deposit" />
        <div className="flex-1  w-full">
          <DepositeInfo />
        </div>
      </div>
      <Footer />
      <div className="pb-10 md:hidden" />
    </ProfileLayout>
  );
};

export default Deposite;
