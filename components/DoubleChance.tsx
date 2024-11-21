"use client";

import React from "react";
import { BiLock } from "react-icons/bi";
import { useUser } from "@/context/user";
import { OddButton } from ".";
import { useSlipStore } from "@/stores/useSlipStore";
import moment from "moment";

const Fixture = ({
  time,
  id_or_half,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeOrAway,
  homeOrDraw,
  awayOrDraw,
  status,
  gameId,
  sportType = "soccer",
}) => {
  const addToSlip = useSlipStore((state) => state.addToSlip);
  const mySlip = useSlipStore((state) => state.mySlip);
  const removeSlip = useSlipStore((state) => state.removeSlip);

  const handleClick = (value: number, type: string, category: string) => {
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
        <div
          className={`flex flex-col items-start justify-start text-live capitalize`}
        >
          <span>{homeTeam}</span>
          <span>{awayTeam}</span>
        </div>
        {/* <MdSports /> */}
        <div className="flex flex-col items-start justify-start pr-5">
          <span>{homeScore}</span>
          <span>{awayScore}</span>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-evenly w-1/2">
        {/* <div className="flex flex-row"> */}
        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={homeOrDraw == "" || homeOrDraw == null ? true : false}
          odd={homeOrDraw}
          customFunction={() =>
            handleClick(homeOrDraw, "Double Chance", `Home/Draw`)
          }
        />
        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={homeOrAway == "" || homeOrAway == null ? true : false}
          odd={homeOrAway}
          customFunction={() =>
            handleClick(homeOrAway, "Double Chance", `Home/Away`)
          }
        />
        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={awayOrDraw == "" || awayOrDraw == null ? true : false}
          odd={awayOrDraw}
          customFunction={() =>
            handleClick(awayOrDraw, "Double Chance", `Home/Draw`)
          }
        />

        {/* </div> */}
      </div>
    </div>
  );
};

const DoubleChance = ({ match, date, sportType }) => {
  const { checkMatchStatus } = useUser();
  let DC = match?.odds.find(
    (game) => game?.name.toLowerCase() == "Double Chance".toLowerCase()
  );
  let matchTime = moment(match?.fixture?.date).format("HH:mm");
  let status = checkMatchStatus(match?.fixture?.date);

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-evenly w-100 py-2">
        <div className="w-full capitalize font-bold">{date}</div>
        <div className="w-full flex flex-row items-center justify-evenly px-2">
          {/* <div className="w-100 flex flex-row items-center justify-evenly pl-2 gap-12"> */}
          <span className="text-sm text-slate-400 text-center w-full">1X</span>
          <span className="text-sm text-slate-400 text-center w-full">12</span>
          <span className="text-sm text-slate-400 text-center w-full">2X</span>
          {/* </div> */}
        </div>
      </div>
      <div>
        <Fixture
          gameId={match?.fixtureID}
          id_or_half={match?.fixtureID}
          time={matchTime}
          status={status}
          homeTeam={match?.teams?.home?.name}
          awayTeam={match?.teams?.away?.name}
          homeScore={0}
          awayScore={0}
          homeOrDraw={DC ? DC?.values[0]?.odd : null}
          awayOrDraw={DC ? DC?.values[1]?.odd : null}
          homeOrAway={DC ? DC?.values[2]?.odd : null}
          sportType={sportType}
        />
      </div>
    </div>
  );
};

export default DoubleChance;
