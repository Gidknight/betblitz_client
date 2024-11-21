"use client";

import React, { useState } from "react";
import Threeways from "./Threeways";
import DoubleChance from "./DoubleChance";
import GoalGNoGoal from "./GoalGNoGoal";
import DrawNoBet from "./DrawNoBet";
import { DropDown } from ".";
import { MATCH_CHANCES } from "@/constants";
import { useLeagueStore } from "@/stores/store";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import LiveGames from "./LiveGames";
import { Match } from "@/app/types";

const WeekGames = ({
  data,
  date,
  sportType,
}: {
  data: { leagueID: string; leagueName: string }[];
  date: string;
  sportType: string;
}) => {
  const league = useLeagueStore((state) => state.league);
  const [matches, setMatches] = useState(true);
  const [subMatch, setSubMatch] = useState(0);
  const [chanceType, setChanceType] = useState(MATCH_CHANCES[0]?.title);
  const [showAll, setShowAll] = useState(false);

  const activeStyle =
    "text-lg font-bold text-slate-800 text-center border-b-2 border-green-500 w-full cursor-pointer";
  const notActive =
    "text-lg  text-slate-800 text-center border-b-2  w-full cursor-pointer hover:border-green-200 hover:font-bold transition-all duration-200";

  const sActiveStyle =
    "text-sm font-bold text-slate-800 text-center border-b-2 border-green-500 w-full cursor-pointer";
  const sNotActive =
    "text-sm  text-slate-800 text-center border-b-2  w-full cursor-pointer hover:border-green-200 hover:font-bold transition-all duration-200";

  const toggleDropDown = () => {
    setShowAll(!showAll);
  };

  let id = "#" + data[0].leagueID;

  // console.log(data);

  return (
    <div id={id} className="w-full bg-white p-3">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-full flex flex-row gap-5 items-center justify-start">
          <button onClick={toggleDropDown}>
            {showAll ? <MdArrowDropDown /> : <MdArrowRight />}
          </button>
          <h2 className="text-2xl text-black capitalize">
            {data[0]?.leagueName}
          </h2>
        </div>
        <div>
          <p>{data.length}</p>
        </div>
      </div>
      {showAll && (
        <div className="w-full">
          {matches && (
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
                data.map((match: any, index: number) => (
                  <LiveGames
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
              {chanceType == MATCH_CHANCES[1].title &&
                data.map((match: any, index) => (
                  <DoubleChance
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
              {chanceType == MATCH_CHANCES[2].title &&
                data.map((match: any, index) => (
                  <GoalGNoGoal
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
              {chanceType == MATCH_CHANCES[3].title &&
                data.map((match: any, index) => (
                  <DrawNoBet
                    match={match}
                    date={date}
                    key={index}
                    sportType={sportType}
                  />
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeekGames;
