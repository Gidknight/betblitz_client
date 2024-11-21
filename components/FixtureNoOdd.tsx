import { useUser } from "@/context/user";
import { setMatchTime } from "@/utils";
import React from "react";

const FixtureNoOdd = ({ match, date, sportType }) => {
  const { checkMatchStatus } = useUser();
  let matchTime = setMatchTime(match?.fixture?.date);
  let status = checkMatchStatus(match?.fixture?.date);
  return (
    <div className="flex flex-row items-center justify-start w-full gap-1 md:gap-5 bg-black bg-opacity-50 p-2">
      <div className="text-xs w-1/6">
        <p>{matchTime}</p>
        <p className="font-semibold">{status}</p>
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <div
          className={`w-1/2  text-left ${
            status != "FT" && status != "NS" ? "text-live" : "text-slate-400"
          } `}
        >
          {match?.teams?.home?.name}
        </div>
        <div className="flex flex-row items-center justify-center gap-1 md:gap-3">
          <span>{0}</span>
          <p className="font-bold">VS</p>
          <span>{0}</span>
        </div>
        <div
          className={`w-1/2  text-right ${
            status != "FT" && status != "NS" ? "text-live" : "text-slate-400"
          } `}
        >
          {match?.teams?.away?.name}
        </div>
      </div>
    </div>
  );
};

export default FixtureNoOdd;
