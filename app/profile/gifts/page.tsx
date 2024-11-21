"use client";

import React from "react";
import ProfileLayout from "@/app/layouts/ProfileLayout";
import { Footer, ProfileNav, GiftInfo } from "@/components";

const Gifts = () => {
  return (
    <ProfileLayout>
      <div className="md:px-20 flex flex-col md:flex-row items-start justify-between pt-5 md:py-5 w-full h-full gap-5">
        <ProfileNav isActive="gifts" />
        <div className="flex-1 w-full">
          <GiftInfo />
        </div>
      </div>
      <Footer />
      <div className="pb-10 md:hidden" />
    </ProfileLayout>
  );
};

export default Gifts;
