"use client";

import { GameOddTypes } from "@/app/types";
import { useSlipStore } from "@/stores/useSlipStore";
import { checkMatchStatus, setMatchTime } from "@/utils";
import React from "react";
import { MdSports } from "react-icons/md";
import { OddButton } from ".";

const Fixture = ({
  gameId,
  sportType,
  time,
  status,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeOdd,
  awayOdd,
}) => {
  const addToSlip = useSlipStore((state) => state.addToSlip);
  const mySlip = useSlipStore((state) => state.mySlip);
  const removeSlip = useSlipStore((state) => state.removeSlip);

  const handleClick = (
    value: number | string,
    type: string,
    category: string
  ) => {
    const uniqueID = gameId + "_" + value;
    let allIds = [];
    for (let i = 0; i < mySlip.length; i++) {
      // if (mySlip[i].uniqueID == uniqueID) {
      //   allIds.push(uniqueID);
      // }
      let id = mySlip[i].uniqueID;
      allIds.push(id);
    }
    if (allIds.includes(uniqueID)) {
      removeSlip(uniqueID);
    } else {
      addToSlip({
        id: gameId,
        uniqueID: uniqueID,
        homeTeam: homeTeam,
        awayTeam: awayTeam,
        odd: value,
        sport: sportType,
        oddType: type,
        oddCategory: category,
      });
    }
  };
  return (
    <div className="w-full flex flex-row items-center justify-start gap-2 border-b border-slate-600 text-sm md:text-base">
      <div className="flex flex-row gap-5 items-center justify-between w-1/2">
        <div className="flex flex-col items-start justify-start pr-5">
          <span className="font-semibold">{time}</span>
          <span className="text-xs md:text-base text-slate-400">{status}</span>
        </div>
        <div className="flex flex-col items-start justify-start text-live capitalize ">
          <span>{homeTeam}</span>
          <span>{awayTeam}</span>
        </div>
        {/* <MdSports /> */}
        <div className="flex flex-col items-start justify-start pr-5">
          <span>{homeScore}</span>
          <span>{awayScore}</span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-1/2">
        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={homeOdd == "" || homeOdd == null ? true : false}
          odd={homeOdd}
          customFunction={() => handleClick(homeOdd, "Draw No Goal", `Yes`)}
        />

        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={awayOdd == "" || awayOdd == null ? true : false}
          odd={awayOdd}
          customFunction={() => handleClick(awayOdd, "Draw No Goal", `Yes`)}
        />
      </div>
    </div>
  );
};

const DrawNoBet = ({ match, date, sportType }: GameOddTypes) => {
  let DNB = match?.odds.find(
    (game) => game?.name.toLowerCase() == "Scoring Draw".toLowerCase()
  );
  let matchTime = setMatchTime(match?.fixture?.date);
  let status = checkMatchStatus(match?.fixture?.date);
  return (
    <div className="w-full">
      <div className="flex flex-row items-evenly justify-evenly w-full py-2">
        <div className="w-1/2 capitalize font-bold">{date}</div>
        <div className="w-1/2 flex flex-row items-center justify-evenly">
          {/* <div className="w-100 flex flex-row items-center justify-evenly pl-2 gap-12"> */}
          <span className="text-sm text-slate-400 text-center w-full">1</span>
          <span className="text-sm text-slate-400 text-center w-full">2</span>

          {/* </div> */}
        </div>
      </div>
      <div>
        <Fixture
          gameId={match.fixtureID}
          sportType={sportType}
          status={status}
          time={matchTime}
          homeTeam={match?.teams?.home?.name}
          awayTeam={match?.teams?.away?.name}
          homeScore={0}
          awayScore={0}
          homeOdd={DNB ? DNB?.values[0]?.odd : null}
          awayOdd={DNB ? DNB?.values[0]?.odd : null}
        />
      </div>
    </div>
  );
};

export default DrawNoBet;
