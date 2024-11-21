"use client";

import React from "react";
import { SiLivewire } from "react-icons/si";

const LiveFixture = ({
  time,
  gameID,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeToWin,
  draw,
  awayToWin,
  goals,
  over,
  under,
}) => {
  return (
    <div className="flex flex-row items-center justify-evenly w-100 border-b-2 gap-5">
      <div className="flex flex-row gap-5 items-center justify-between w-1/2">
        <div className="flex flex-col">
          <p className="font-bold text-normal">{time}</p>
          <p className="text-sm text-slate-400">ID: {gameID}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-normal">{homeTeam}</p>
          <p className="text-normal">{awayTeam}</p>
        </div>
        <SiLivewire />
        <div className="flex flex-col">
          <p className="text-normal">{homeScore}</p>
          <p className="text-normal">{awayScore}</p>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-between gap-2 w-1/2">
        <div className="flex flex-row">
          <span className="bg-live py-2 px-3 text-white hover:bg-liveHover rounded-l-lg">
            {homeToWin}
          </span>
          <span className="bg-live py-2 px-3 text-white hover:bg-liveHover">
            {draw}
          </span>
          <span className="bg-live py-2 px-3 text-white hover:bg-liveHover rounded-r-lg">
            {awayToWin}
          </span>
        </div>

        <div className="flex flex-row">
          <span className="bg-live py-2 px-3 text-white hover:bg-liveHover rounded-l-lg">
            {goals}
          </span>
          <span className="bg-live py-2 px-3 text-white hover:bg-liveHover">
            {over}
          </span>
          <span className="bg-live py-2 px-3 text-white hover:bg-liveHover rounded-r-lg">
            {under}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveFixture;
