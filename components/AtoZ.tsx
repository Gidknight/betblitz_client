"use client";

import React, { useState, useEffect } from "react";
import { dummyFootballLeagues } from "@/dummy/dummyLeagues";
import { useLeagueStore } from "../stores/store";
import Image from "next/image";
import Link from "next/link";

const ListItem = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const noActive =
    "text-xs flex flex-col items-center justify-between border-b border-slate-400  w-full cursor-pointer capitalize";

  const active =
    "text-sm flex flex-col items-center justify-between border-b-2 border-primary text-primary  w-full cursor-pointer capitalize";

  let id = "#" + data?.leagueID;
  // console.log(id);
  return (
    <li
      // onClick={(e) => setLeague(lg?.name)}

      className={toggle ? active : noActive}
    >
      <button
        className="flex items-center justify-between w-full bg-white p-2 disabled:cursor-not-allowed"
        onClick={() => {
          setToggle(!toggle);
        }}
        disabled={data.leagues.length < 1 ? true : false}
      >
        <div className="flex flex-row items-center justify-start gap-2">
          {/* <Image
            src={data.flag || "/images/headshot.jpg"}
            alt={`${data.name}-flag`}
            width={20}
            height={20}
            className="rounded-full h-5 w-5 object-cover"
          /> */}
          <p>
            {data.name}
            {/* <span> ({data.subMenu.length})</span> */}
          </p>
        </div>
        <span
          className={`${
            data.leagues.length > 0 && "font-bold"
          } rounded-full hover:rotate-90 duration-200 transition-all `}
        >
          {data.leagues.length > 0 ? data.leagues.length : ""}
        </span>
      </button>
      {toggle && (
        <ul className="text-xs w-full bg-slate-200 flex flex-col items-start justify-start gap-1 text-slate-800">
          {data.leagues.map((item: any, index: number) => (
            <Link
              href={id}
              key={index}
              className="flex flex-row justify-between items-center border-b border-slate-300 w-56 hover:border-primary hover:text-primary p-2 transition-all duration-150"
            >
              {/* <Image
                src={item.logo || "/images/headshot.jpg"}
                alt={`${item.name}-logo`}
                width={20}
                height={20}
                className="rounded-full h-5 w-5 object-cover"
              /> */}
              <p className="truncate">{item.name}</p>
              <span>{item.fixtures.length}</span>
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
};

const AtoZ = ({ data }: { data: [] }) => {
  const setLeague = useLeagueStore((state) => state.setLeague);
  const league = useLeagueStore((state) => state.league);
  // const [leagues, setLeagues] = useState(data.leagueGames);
  const countries = data;
  // console.log(data);
  const [toggle, setToggle] = useState(data[0]?.name);
  let matchCount = 28;

  const getGames = async () => {
    const response = await fetch(
      "http://localhost:5000/api/v1/football/front/get-a-to-z",
      {
        cache: "no-cache",
        // next: { revalidate: 6000 },
      }
    );
    setLeagues(response?.preparedData);
  };

  const noActive =
    "text-xs flex flex-col items-center justify-between border-b border-slate-400 p-2 w-full cursor-pointer capitalize";

  const active =
    "flex flex-col items-center justify-between border-b-2 border-primary text-primary p-2 w-full cursor-pointer capitalize";

  const handleClick = () => {};
  return (
    <div className="w-full">
      <div
        className="flex flex-col items-start rounded-lg
    shadow-lg w-full"
      >
        <h2 className="text-sm font-bold border-b-2 p-2 w-full text-center bg-white">
          A - Z
        </h2>
        <ul
          className="flex flex-col items-start  rounded-lg
     w-full"
        >
          {countries.map((cty, index) => {
            return <ListItem key={index} data={cty} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AtoZ;
