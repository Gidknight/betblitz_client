"use client";

import React, { useState } from "react";
import Threeways from "./Threeways";
import DoubleChance from "./DoubleChance";
import GoalGNoGoal from "./GoalGNoGoal";
import DrawNoBet from "./DrawNoBet";
import { DropDown, FixtureNoOdd } from ".";
import { MATCH_CHANCES } from "@/constants";
import { useLeagueStore } from "@/app/stores/store";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import LiveGamesWithLeagueName from "./LiveGamesWithLeagueName";
import { time } from "console";

const NicheLiveBetting = ({ data, date, sportType }) => {
  const [matches, setMatches] = useState(true);
  const [subMatch, setSubMatch] = useState(0);
  const [chanceType, setChanceType] = useState(MATCH_CHANCES[0]?.title);
  const [showAll, setShowAll] = useState(true);

  const [withOdds, setWithOdds] = useState(data.withOdds);
  const [withoutOdds, setWithoutOdds] = useState(data.withoutOdds);

  const activeStyle =
    "text-lg font-bold text-slate-800 text-center border-b-2 border-green-500 w-full cursor-pointer";
  const notActive =
    "text-lg  text-slate-800 text-center border-b-2  w-full cursor-pointer hover:border-green-200 hover:font-bold transition-all duration-200";

  const sActiveStyle =
    "text-sm font-bold text-center border-b-2 border-green-500 w-full cursor-pointer";
  const sNotActive =
    "text-sm  text-center border-b-2  w-full cursor-pointer hover:border-green-200 hover:font-bold transition-all duration-200";

  const toggleDropDown = () => {
    setShowAll(!showAll);
  };

  return (
    <div id={"live_betting"} className="w-full bg-dark p-3 text-white">
      <div className="w-full flex flex-row gap-5 items-center justify-start">
        <button onClick={toggleDropDown}>
          {showAll ? <MdArrowDropDown /> : <MdArrowRight />}
        </button>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center justify-center gap-2">
            <h2 className="text-2xl">Live Betting</h2>
            <button
              className="px-1 text-green-400 bg-slate-600 text-sm"
              onClick={() => setMatches(true)}
            >
              {withOdds.length}
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <h2 className="text-lg">All Live</h2>
            <button
              className="px-1 text-green-400 bg-slate-600 text-sm"
              onClick={() => setMatches(false)}
            >
              {withOdds.length + withoutOdds.length}
            </button>
          </div>
        </div>
      </div>
      {showAll && (
        <div className="w-full">
          {matches && withOdds.length >= 1 && (
            <div className="w-full flex flex-col">
              <div className="pt-5 hidden md:flex flex-row items-center justify-evenly w-full">
                {MATCH_CHANCES.map((chance, index) => (
                  <h4
                    key={chance.id}
                    className={
                      chanceType == chance?.title ? sActiveStyle : sNotActive
                    }
                    onClick={() => setChanceType(chance.title)}
                  >
                    {chance?.title}
                  </h4>
                ))}
              </div>
              <div className="flex flex-row items-center justify-between md:hidden">
                <h2 className="font-bold">Bet Chances</h2>
                <DropDown
                  options={MATCH_CHANCES}
                  setValue={setChanceType}
                  value={chanceType}
                />
              </div>
              {chanceType == MATCH_CHANCES[0].title &&
                withOdds.map((match, index) => (
                  <LiveGamesWithLeagueName
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
              {chanceType == MATCH_CHANCES[1].title &&
                withOdds.map((match: any, index) => (
                  <DoubleChance
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
              {chanceType == MATCH_CHANCES[2].title &&
                withOdds.map((match: any, index) => (
                  <GoalGNoGoal
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
              {chanceType == MATCH_CHANCES[3].title &&
                withOdds.map((match: any, index) => (
                  <DrawNoBet
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
            </div>
          )}

          {!matches && withoutOdds.length >= 1 && (
            <div className="w-full flex flex-col items-center justify-start gap-2">
              {withoutOdds.map((match, index) => (
                <FixtureNoOdd
                  key={index}
                  match={match}
                  date={date}
                  sportType={"soccer"}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NicheLiveBetting;
