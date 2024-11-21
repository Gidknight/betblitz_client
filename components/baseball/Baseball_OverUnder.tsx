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
  homeOrAway,
  homeOrDraw,
  awayOrDraw,
  status,
  gameId,
  sportType = "baseball",
  over9_5,
  under9_5,
  over10_5,
  under10_5,
  over11_5,
  under11_5,
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
        <div className="flex flex-row">
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={!over9_5 ? true : false}
            odd={over9_5}
            customFunction={() =>
              handleClick(over9_5, "Over Under", `Over 9.5`)
            }
          />
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={!under9_5 ? true : false}
            odd={under9_5}
            customFunction={() =>
              handleClick(under9_5, "Over Under", `Under 9.5`)
            }
          />
        </div>

        <div className="flex flex-row">
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={!over10_5 ? true : false}
            odd={over10_5}
            customFunction={() =>
              handleClick(over10_5, "Over Under", `Over 10.5`)
            }
          />
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={!under10_5 ? true : false}
            odd={under10_5}
            customFunction={() =>
              handleClick(under10_5, "Over Under", `Under 10.5`)
            }
          />
        </div>

        <div className="flex flex-row">
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={!over11_5 ? true : false}
            odd={over11_5}
            customFunction={() =>
              handleClick(over11_5, "Over Under", `Over 11.5`)
            }
          />
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={!under11_5 ? true : false}
            odd={under11_5}
            customFunction={() =>
              handleClick(under11_5, "Over Under", `Under 11.5`)
            }
          />
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

const Baseball_OverUnder = ({ match, date, sportType }) => {
  const { checkMatchStatus } = useUser();
  const game = match?.game;
  const bookmaker = match?.bookmaker?.bets;
  let OU = bookmaker.find(
    (game) => game?.name.toLowerCase() == "Over/Under".toLowerCase()
  );
  let status = checkMatchStatus(game?.date);
  let matchTime = moment(game?.date).format("HH:mm");

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-evenly w-100 py-2">
        <div className="w-full capitalize font-bold">{date}</div>
        <div className="w-full flex flex-row items-center justify-around px-2 gap-1">
          {/* <div className="w-100 flex flex-row items-center justify-evenly pl-2 gap-12"> */}
          <span className="text-sm text-slate-400 text-center w-full">9.5</span>
          <span className="text-sm text-slate-400 text-center w-full">
            10.5
          </span>
          <span className="text-sm text-slate-400 text-center w-full">
            11.5
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
          homeOrDraw={OU ? OU?.values[0]?.odd : null}
          awayOrDraw={OU ? OU?.values[1]?.odd : null}
          homeOrAway={OU ? OU?.values[2]?.odd : null}
          over9_5={OU ? OU?.values[0]?.odd : null}
          under9_5={OU ? OU?.values[1]?.odd : null}
          over10_5={OU ? OU?.values[2]?.odd : null}
          under10_5={OU ? OU?.values[3]?.odd : null}
          over11_5={OU ? OU?.values[4]?.odd : null}
          under11_5={OU ? OU?.values[5]?.odd : null}
          sportType={sportType}
        />
      </div>
    </div>
  );
};

export default Baseball_OverUnder;
