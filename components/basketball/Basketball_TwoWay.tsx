"use client";

import React from "react";
import { BiLock } from "react-icons/bi";
import { useUser } from "@/context/user";
import { OddButton } from "..";
import { useSlipStore } from "@/stores/useSlipStore";
import moment from "moment";

const Fixture = ({
  time,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  home,

  away,
  status,
  gameId,
  sportType = "basketball",
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
      <div className="flex flex-row lg:gap-5 items-center justify-between w-1/2">
        <div className="flex flex-col items-start justify-start pr-0 lg:pr-5">
          <span className="font-semibold">{time}</span>
          <span className="text-xs md:text-base text-slate-400">{status}</span>
        </div>
        <div
          className={`truncate flex flex-col items-start justify-start text-live capitalize text-sm lg:text-base`}
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

      <div className=" flex flex-row items-center justify-evenly w-1/2 gap-1">
        {/* <div className="flex flex-row"> */}

        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={!home ? true : false}
          odd={home}
          customFunction={() => handleClick(home, "2Way", `Home`)}
        />
        <OddButton
          isDisabled={status == "FT" ? true : false}
          lock={!away ? true : false}
          odd={away}
          customFunction={() => handleClick(away, "2Way", `Away`)}
        />

        {/* </div> */}
      </div>
    </div>
  );
};

const Basketball_TwoWay = ({ match, date, sportType }) => {
  const { checkMatchStatus } = useUser();
  const game = match?.game;
  const bookmaker = match?.bookmaker?.bets;
  let OP = bookmaker.find(
    (game) => game?.name.toLowerCase() == "Home/Away".toLowerCase()
  );
  let status = checkMatchStatus(game?.date);
  let matchTime = moment(game?.date).format("HH:mm");

  return (
    <div className="w-full ">
      <div className="flex flex-row items-center justify-evenly w-100 py-2">
        <div className="w-full capitalize font-bold">{date}</div>
        <div className="w-full flex flex-row items-center justify-arOPnd px-2 gap-1">
          {/* <div className="w-100 flex flex-row items-center justify-evenly pl-2 gap-12"> */}
          <span className="text-sm text-slate-400 text-center w-full">
            Home
          </span>
          <span className="text-sm text-slate-400 text-center w-full">
            Away
          </span>

          {/* </div> */}
        </div>
      </div>
      <div>
        <Fixture
          gameId={game?.id}
          time={matchTime}
          status={status}
          homeTeam={game.teams?.home?.name}
          awayTeam={game.teams?.away?.name}
          homeScore={0}
          awayScore={0}
          home={OP ? OP?.values[0]?.odd : null}
          away={OP ? OP?.values[1]?.odd : null}
          sportType={sportType}
        />
      </div>
    </div>
  );
};

export default Basketball_TwoWay;
