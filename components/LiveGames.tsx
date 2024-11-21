import { useSlipStore } from "@/stores/useSlipStore";
import React from "react";
import { OddButton } from ".";
import moment from "moment";
import { useUser } from "@/context/user";
import { GameOddTypes } from "@/app/types";
import { setMatchTime } from "@/utils";

const Fixture = ({
  time = "00:00",
  status = "NS",
  homeTeam = "Team One",
  awayTeam = "Team Two",
  homeScore = "0",
  awayScore = "0",
  homeWinOdd = "1.1",
  drawOdd = "3.4",
  awayWinOdd = "2.6",
  under2_5 = "2.3",
  over2_5 = "6.2",
  gameId = "234",
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
      <div className="flex flex-row gap-2 w-1/2">
        <div className="flex flex-col items-start justify-start pr-5">
          <span className="font-semibold capitalize">{time}</span>
          <span>{status}</span>
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

      {/*  */}
      <div className="flex flex-row items-start justify-evenly w-1/2 gap-2">
        <div className="flex flex-row items-center justify-evenly w-1/2 rounded-lg">
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={homeWinOdd == "" || homeWinOdd == null ? true : false}
            odd={homeWinOdd}
            customFunction={() => handleClick(homeWinOdd, "1x2", "Home")}
          />
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={drawOdd == "" || drawOdd == null ? true : false}
            odd={drawOdd}
            customFunction={() => handleClick(drawOdd, "1x2", "Draw")}
          />
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={awayWinOdd == "" || awayWinOdd == null ? true : false}
            odd={awayWinOdd}
            customFunction={() => handleClick(awayWinOdd, "1x2", "Away")}
          />
        </div>
        <div className="flex flex-row items-center justify-evenly w-1/2 rounded-lg ">
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={over2_5 == "" || over2_5 == null ? true : false}
            odd={over2_5}
            customFunction={() =>
              handleClick(over2_5, "Over/Under", `Over 2.5`)
            }
          />
          <OddButton
            isDisabled={status == "FT" ? true : false}
            lock={under2_5 == "" || under2_5 == null ? true : false}
            odd={under2_5}
            customFunction={() =>
              handleClick(under2_5, "Over/Under", `Under 2.5`)
            }
          />
        </div>
      </div>
    </div>
  );
};

const LiveGames = ({
  date = "DD/MM, dddd",
  match,
  sportType,
}: GameOddTypes) => {
  const { checkMatchStatus } = useUser();
  let MW = match?.odds.find(
    (game) => game?.name.toLowerCase() == "Match Winner".toLowerCase()
  );
  // console.log(match);

  let GOU = match?.odds.find(
    (game) => game?.name.toLowerCase() == "Goals Over/Under".toLowerCase()
  );
  // console.log(MW);

  let matchTime = setMatchTime(match?.fixture?.date);
  let status = checkMatchStatus(match?.fixture?.date);

  return (
    <div className="flex flex-col w-full items-center justify-start gap-1">
      <div className="w-full flex flex-row items-center justify-start gap-2 ">
        <div className="w-1/2 capitalize font-bold">{date}</div>
        <div className="w-1/2 flex flex-row items-center justify-evenly text-slate-400 gap-2">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h4 className="text-sm xl:text-base">3 Way</h4>
            <div className="w-full bg-slate-700 flex flex-row items-center justify-evenly text-xs xl:text-base gap-1 md:gap-2">
              <span className="text-xs xl:text-sm">1</span>
              <span className="text-xs xl:text-sm">X</span>
              <span className="text-xs xl:text-sm">2</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h4 className="text-sm xl:text-base"> Over/Under</h4>
            <div className="w-full bg-slate-700 bg-opacity-20 flex flex-row items-center justify-evenly text-xs xl:text-base gap-1 md:gap-2">
              {/* <span className="text-xs xl:text-sm">1/X</span> */}
              <span className="text-xs xl:text-sm">Over 2.5</span>
              <span className="text-xs xl:text-sm">Under 2.5</span>
            </div>
          </div>
        </div>
      </div>

      {/* {liveMatches.map((match, index) => (
        <Fixture key={index} />
      ))} */}
      <Fixture
        gameId={match?.fixtureID}
        time={matchTime}
        status={status}
        homeTeam={match?.teams?.home?.name}
        awayTeam={match?.teams?.away?.name}
        homeWinOdd={MW?.values[0]?.odd}
        drawOdd={MW?.values[1]?.odd}
        awayWinOdd={MW?.values[2]?.odd}
        over2_5={GOU?.values[0]?.odd}
        under2_5={GOU?.values[1]?.odd}
        sportType={sportType}
      />
    </div>
  );
};

export default LiveGames;
