"use client";

import { MdSports } from "react-icons/md";

const Fixture = ({
  time = "00:00",
  half = "FT",
  homeTeam = "Team One",
  awayTeam = "Team Two",
  homeScore = "0",
  awayScore = "0",
  oneOdd = "1.1",
  xOdd = "3.4",
  twoOdd = "2.6",
  homeGoalNext = "3.4",
  noGoalNext = "2.3",
  awayGoalNext = "6.2",
}) => (
  <div className="w-full flex flex-row items-center justify-start gap-2 border-b border-slate-600 text-sm md:text-base">
    <div className="flex flex-row gap-2 w-1/2">
      <div className="flex flex-col items-start justify-start pr-5">
        <span className="font-semibold capitalize">{time}</span>
        <span>{half}</span>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start text-live capitalize">
          <span>{homeTeam}</span>
          <span>{awayTeam}</span>
        </div>
        <div className="flex flex-col items-start justify-start pr-5">
          <span>{homeScore}</span>
          <span>{awayScore}</span>
        </div>
      </div>
    </div>
    <MdSports />
    {/*  */}
    <div className="flex flex-row items-start justify-evenly w-1/2 gap-2">
      <div className="flex flex-row items-center justify-evenly w-full rounded-lg">
        <span className="p-1 md:p-2 text-white font-semibold bg-live w-full text-center hover:bg-liveHover cursor-pointer rounded-l-md">
          {oneOdd}
        </span>
        <span className="p-1 md:p-2 text-white font-semibold bg-live w-full text-center hover:bg-liveHover cursor-pointer">
          {xOdd}
        </span>
        <span className="p-1 md:p-2 text-white font-semibold bg-live w-full text-center hover:bg-liveHover cursor-pointer rounded-r-md">
          {twoOdd}
        </span>
      </div>
      <div className="flex flex-row items-center justify-evenly w-full rounded-lg ">
        <span className="p-1 md:p-2 text-white font-semibold bg-live w-full text-center hover:bg-liveHover cursor-pointer rounded-l-md">
          {homeGoalNext}
        </span>
        <span className="p-1 md:p-2 text-white font-semibold bg-live w-full text-center hover:bg-liveHover cursor-pointer">
          {noGoalNext}
        </span>
        {/* <span className="p-2 text-white font-semibold bg-live w-full text-center hover:bg-liveHover cursor-pointer"></span> */}
        <span className="p-1 md:p-2 text-white font-semibold bg-live w-full text-center hover:bg-liveHover cursor-pointer rounded-r-md">
          {awayGoalNext}
        </span>
      </div>
    </div>
  </div>
);

export default Fixture;
