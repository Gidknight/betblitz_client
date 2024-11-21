"use client";

import { useUser } from "@/context/user";
import moment from "moment";
import React from "react";
import { MdSports } from "react-icons/md";
import { OddButton } from ".";
import { useSlipStore } from "@/stores/useSlipStore";
import { GameOddTypes } from "@/app/types";

interface GoalNoGoalType {
  gameId: string;
  status: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  gg: number | string;
  ng: number | string;
  sportType: string;
}

const Fixture = ({
  gameId,
  status,
  time,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  gg,
  ng,
  sportType,
}: GoalNoGoalType) => {
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
        {/* <div className="flex flex-row"> */}
        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={gg == "" || gg == null ? true : false}
          odd={gg}
          customFunction={() => handleClick(gg, "Both Teams Score", `Yes`)}
        />

        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={ng == "" || ng == null ? true : false}
          odd={ng}
          customFunction={() => handleClick(ng, "Both Teams Score", `No`)}
        />

        {/* </div> */}
      </div>
    </div>
  );
};

const GoalGNoGoal = ({
  match,
  date = "DD/MM, dddd",
  sportType,
}: GameOddTypes) => {
  const { checkMatchStatus } = useUser();
  let GNG = match?.odds.find(
    (game) => game?.name.toLowerCase() == "Both Teams Score".toLowerCase()
  );
  let matchTime = moment(match?.fixture?.date).format("HH:mm");
  let status = checkMatchStatus(match?.fixture?.date);
  return (
    <div className="w-full">
      <div className="flex flex-row items-evenly justify-evenly w-full py-2">
        <div className="w-1/2 capitalize font-bold">{date}</div>
        <div className="w-1/2 flex flex-row items-center justify-evenly">
          {/* <div className="w-100 flex flex-row items-center justify-evenly pl-2 gap-12"> */}
          <span className="text-sm text-slate-400 text-center w-full">GG</span>
          <span className="text-sm text-slate-400 text-center w-full">NG</span>

          {/* </div> */}
        </div>
      </div>
      <div>
        <Fixture
          gameId={match?.fixtureID}
          status={status}
          time={matchTime}
          homeTeam={match?.teams?.home?.name}
          awayTeam={match?.teams?.away?.name}
          homeScore={"0"}
          awayScore={"0"}
          gg={GNG ? GNG?.values[0]?.odd : null}
          ng={GNG ? GNG?.values[1]?.odd : null}
          sportType={sportType}
        />
      </div>
    </div>
  );
};

export default GoalGNoGoal;
