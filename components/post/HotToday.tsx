"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface HotFixtureType {
  homeTeam: string;
  awayTeam: string;
  homeLogo?: string;
  awayLogo?: string;
  homeScore: number | string;
  homeOdd: number | string;
  awayScore: number | string;
  awayOdd: number | string;
  drawOdd: number | string;
}

const HotFixture = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeLogo = "/images/user.png",
  awayLogo = "/images/user.png",
  homeOdd,
  awayOdd,
  drawOdd,
}: HotFixtureType) => {
  return (
    <div className="w-full h-full bg-white p-1 md:p-5 rounded-xl shadow-lg flex flex-col items-center justify-center md:gap-2">
      {/* <h2 id="league">league name</h2> */}

      <div className="w-full h-full flex flex-row items-center justify-evenly">
        <div
          id="home_team"
          className="p-2 w-full h-full flex flex-col items-center justify-between "
        >
          <Image
            alt={homeTeam + " logo"}
            src={homeLogo}
            width={200}
            height={200}
            className="rounded-full w-10 h-10 md:w-20 md:h-20 object-cover"
          />
          <h4 className="font-bold capitalize text-sm md:text-lg text-center">
            {homeTeam}
          </h4>
        </div>
        <div className="flex flex-row items-center justify-between gap-5 md:gap-10 text-2xl text-slate-700">
          <h2>{homeScore}</h2>
          <h1 className="text-lg md:text-4xl font-extrabold text-black">VS</h1>
          <h2>{awayScore}</h2>
        </div>
        {/* away team */}
        <div
          id="away_team"
          className="p-2 w-full h-full flex flex-col items-center justify-between"
        >
          <Image
            alt={awayTeam + " logo"}
            src={awayLogo}
            width={200}
            height={200}
            className="rounded-full w-10 h-10 md:w-20 md:h-20 object-cover"
          />
          <h4 className="font-bold capitalize text-sm md:text-lg text-center">
            {awayTeam}
          </h4>
        </div>
      </div>
      <div
        id="odds"
        className="w-full flex flex-row items-center justify-around text-sm md:text-base"
      >
        <p className="pl-2 md:pl-2 bg-slate-100">
          1 <span className="pl-4 text-slate-600 bg-white">{homeOdd}</span>
        </p>
        <p className="pl-2 md:pl-2 bg-slate-100">
          X <span className="pl-4 text-slate-600 bg-white">{homeOdd}</span>
        </p>
        <p className="pl-2 md:pl-2 bg-slate-100">
          2 <span className="pl-4 text-slate-600 bg-white">{homeOdd}</span>
        </p>
      </div>
    </div>
  );
};

const leagues = [
  {
    id: 1,
    name: "premeire league",
    fixture: {
      homeTeam: "manchester united",
      awayTeam: "leichester city",
      homeLogo: "/images/headshot.jpg",
      awayLogo: "/images/headshot.jpg",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
  {
    id: 2,
    name: "la liga",
    fixture: {
      homeTeam: "real madrid",
      awayTeam: "barcelona",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
  {
    id: 3,
    name: "ligue 1",
    fixture: {
      homeTeam: "home team",
      awayTeam: "away team",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
  {
    id: 4,
    name: "seria a",
    fixture: {
      homeTeam: "AC milan",
      awayTeam: "inter milan",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
  {
    id: 5,
    name: "bundes liga",
    fixture: {
      homeTeam: "bayern munich",
      awayTeam: "borussia dortmont",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
  {
    id: 6,
    name: "champions league",
    fixture: {
      homeTeam: "manchester city",
      awayTeam: "juventus",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
  {
    id: 7,
    name: "world cup",
    fixture: {
      homeTeam: "brazil",
      awayTeam: "france",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
  {
    id: 7,
    name: "Africa cup",
    fixture: {
      homeTeam: "nigeria",
      awayTeam: "south africa",
      homeScore: 3,
      awayScore: 0,
      homeOdd: 1.3,
      awayOdd: 4.3,
      drawOdd: 2.2,
    },
  },
];

const HotToday = () => {
  const [isClicked, setIsClicked] = useState(leagues[0]?.name);
  const [game, setGame] = useState<HotFixtureType>({
    homeTeam: "",
    awayOdd: "",
    awayScore: "",
    awayTeam: "",
    drawOdd: "",
    homeOdd: "",
    homeScore: "",
  });

  const activeStyle =
    "inline-block p-1 border-2 font-semibold bg-dark text-white rounded-lg capitalize text-xs md:text-base cursor-pointer shadow-sm scale-[105%]";

  const normalStyle =
    "inline-block p-1 border-2 font-semibold rounded-lg capitalize text-xs md:text-base cursor-pointer hover:shadow-sm hover:scale-[102%] transition-all duration-200";

  const changeFixture = (num: number) => {
    setTimeout(() => {
      if (num === leagues.length) return;
      setIsClicked(leagues[num]?.name);
      num = num + 1;
      return changeFixture(num);
    }, 2000);
  };

  useEffect(() => {
    const selectFixture = () => {
      const selected = leagues.find((value) => value.name === isClicked);
      if (selected) {
        setGame(selected.fixture);
      }
      // console.log(selected?.fixture);
    };

    selectFixture();
  }, [isClicked]);
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold capitalize ">Hot Today</h1>
      <ul className="bg-white flex flex-row items-center justify-between gap-2 overflow-x-auto scroll-p-1 p-2">
        {leagues.map((league, index) => {
          let text = league.name.split(" ");
          let tex = text[0];
          return (
            <li
              key={index}
              className={isClicked == league?.name ? activeStyle : normalStyle}
              onClick={() => setIsClicked(league?.name)}
            >
              {tex}
            </li>
          );
        })}
      </ul>
      <div className="px-5">
        {game && (
          <HotFixture
            awayOdd={game?.awayOdd}
            awayScore={game?.awayScore}
            awayTeam={game?.awayTeam}
            drawOdd={game?.drawOdd}
            homeOdd={game?.homeOdd}
            homeScore={game?.homeScore}
            homeTeam={game?.homeTeam}
            awayLogo={game?.awayLogo}
            homeLogo={game?.homeLogo}
          />
        )}
      </div>
    </div>
  );
};

export default HotToday;
