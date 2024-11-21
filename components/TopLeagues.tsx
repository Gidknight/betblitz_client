"use client";

import React, { useState, useEffect } from "react";

import { useLeagueStore } from "../stores/store";

const TopLeagues = ({ data }: { data: [] }) => {
  const setLeague = useLeagueStore((state) => state.setLeague);
  const league = useLeagueStore((state) => state.league);
  const [topLeagues, setTopLeagues] = useState([]);

  // const topLeagues = fetchFunction();

  const noActive =
    "flex flex-row items-center justify-between border-b border-slate-400 p-2 w-full cursor-pointer capitalize";

  const active =
    "flex flex-row items-center justify-between border-b-2 border-primary text-primary p-2 w-full cursor-pointer capitalize";
  useEffect(() => {
    const response = data;
    if (response.length > 1) {
      setTopLeagues(response);
      setLeague(response[0]);
    }
  }, []);

  const handleClick = () => {};
  return (
    <div className="w-full">
      <div
        className="flex flex-col items-start bg-white rounded-lg
    shadow-lg w-full"
      >
        <h2 className="text-sm font-bold border-b-2 p-2 w-full text-center">
          Top Leagues
        </h2>
        <ul
          className="flex flex-col items-start bg-white rounded-lg
     w-full"
        >
          {topLeagues.map((lg, index) => (
            <a
              key={index}
              onClick={(e) => setLeague(lg)}
              className={league == lg ? active : noActive}
              href={`#${lg}`}
            >
              {lg}
              <span>{">"}</span>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopLeagues;
