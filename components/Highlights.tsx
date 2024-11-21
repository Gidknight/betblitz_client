"use client";

import React, { useEffect, useState } from "react";
import { SPORT_LINKS } from "@/constants";
import LiveGames from "./LiveGames";
import { ComboBox, DropDown } from ".";

const Highlights = ({ footballData }: { footballData: [] }) => {
  const [sportType, setSportType] = useState("Football");

  const activeStyle =
    "p-2 border-b-2 border-green-500 cursor-pointer text-center font-bold w-full";
  const noActiveStyle =
    "p-2 border-b-2 hover:border-b-2 hover:border-green-500 cursor-pointer w-full text-center font-semibold transition-all duration-300";

  let availableGames = [];
  const fetchLiveGames = () => {
    // const response = fetch("https://www");
    // const response = [];
    // availableGames = response;
    // return response;
  };

  useEffect(() => {
    fetchLiveGames();
  }, [sportType]);

  return (
    <div className="p-3 md:p-5 w-full bg-white text-black flex flex-col overflow-x-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-2">
          <span className="p-3 bg-live rounded-full"></span>

          <h1 className="text-lg md:text-2xl font-bold">Highlights</h1>
        </div>

        <DropDown
          options={SPORT_LINKS}
          setValue={setSportType}
          value={sportType}
        />
      </div>

      <div>
        <div className="w-full flex flex-col">
          <div className="pt-5 hidden md:flex flex-row items-center justify-evenly w-full">
            {SPORT_LINKS.map((sport, index) => (
              <h4
                key={sport.id}
                className={
                  sportType == sport?.title ? activeStyle : noActiveStyle
                }
                onClick={() => setSportType(sport.title)}
              >
                {sport?.title}
              </h4>
            ))}
          </div>
          <div className="w-full">
            {sportType == "Football" &&
              footballData.map((match, index) => (
                <div className="w-full flex flex-col">
                  <LiveGames leagueName="Premeire league" />
                  <LiveGames leagueName="Spanish League" />
                </div>
              ))}
            {sportType == "Cricket" && (
              <div>
                <LiveGames leagueName="India league" />
                <LiveGames leagueName="world Cup" />
              </div>
            )}
            {sportType == "Basketball" && (
              <div>
                <LiveGames leagueName="world Cup" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
