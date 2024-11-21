"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  WeekGames,
  QuickRegistration,
  TopLeagues,
  AtoZ,
} from "@/app/components";
import {
  dummyCricketLeagues,
  dummyFootballLeagues,
} from "@/dummy/dummyLeagues";
import MainLayout from "../layouts/MainLayout";

const Cricket = () => {
  return (
    <MainLayout>
      <div className="px-20 pt-5 mt-1 flex flex-row gap-5 items-start justify-between w-full h-full bg-neutral">
        {/* left */}
        <div className="h-full w-[20%] pl-5 flex flex-col items-center justify-start gap-5">
          {/*  */}
          <div
            className="flex flex-col items-start bg-white rounded-lg
    shadow-lg w-56"
          >
            <p className="border-b border-slate-400 px-2 py-3 w-full cursor-pointer">
              Today's Game
            </p>
            <p className="border-b border-slate-400 px-2 py-3 w-full cursor-pointer">
              Upcoming Games
            </p>
            <p className="px-2 py-3 w-full cursor-pointer">Outrights</p>
          </div>
          {/* Top Leagues */}
          <TopLeagues fetchFunction={() => dummyCricketLeagues} />
          <AtoZ />
        </div>

        {/* middle */}
        <div className="flex-1 flex flex-col gap-5">
          {/* header */}
          <div className="bg-dark text-white p-3 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <h2 className="text-2xl">Live Betting</h2>
              <span className="px-1 text-green-400 bg-slate-600 text-sm">
                2
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <h2 className="text-lg">All Live</h2>
              <span className="px-1 text-green-400 bg-slate-600 text-sm">
                100
              </span>
            </div>
          </div>

          {/* Matches */}

          <WeekGames />
        </div>
        {/* right */}
        <div className="h-100 w-[20%] pr-5 flex flex-col items-center justify-start">
          <QuickRegistration />
        </div>
      </div>
    </MainLayout>
  );
};

export default Cricket;
