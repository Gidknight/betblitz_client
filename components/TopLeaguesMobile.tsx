"use client";

import React, { useState, useEffect } from "react";

import { useLeagueStore } from "../stores/store";
import { usePathname } from "next/navigation";

const TopLeaguesMobile = ({ data }: { data: [] }) => {
  const setLeague = useLeagueStore((state) => state.setLeague);
  const league = useLeagueStore((state) => state.league);

  const pathname = usePathname();

  const topLeagues = data;

  const noActive =
    "flex flex-row items-center justify-between border-b border-slate-400 p-2 w-full cursor-pointer capitalize";

  const active =
    "flex flex-row items-center justify-between border-b-2 border-primary text-primary p-2 w-full cursor-pointer capitalize";
  useEffect(() => {
    setLeague(topLeagues[0].name);
  }, []);

  const handleClick = () => {};
  return (
    <div className="sticky top-0 block bg-white bg-opacity-50 md:hidden ">
      <h2 className="text-sm font-bold w-full ">Top Leagues</h2>
      <ul
        className="flex flex-row items-center justify-start bg-white
     w-full overflow-x-auto shadow-lg"
      >
        {topLeagues.map((lg, index) => (
          <a
            key={index}
            onClick={(e) => setLeague(lg?.name)}
            href={`#${lg?.country}`}
            className={league == lg?.name ? active : noActive}
            // className={pathname.includes(lg?.country) ? active : noActive}
          >
            {lg?.country}
            <span>{">"}</span>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default TopLeaguesMobile;
