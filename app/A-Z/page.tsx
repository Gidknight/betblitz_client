"use client";

import React, { useState } from "react";
import A_Z_Layout from "@/app/layouts/A_Z_Layout";
import { SPORT_LINKS } from "@/constants";
import { SiLivewire } from "react-icons/si";
import { MdEventAvailable, MdSports } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { AZ_Popular, PromotionCard } from "@/components";

const my_response = {
  football: {
    id: 1,
    name: "football",
    data: [
      "football 1",
      "football 2",
      "football 3",
      "football 4",
      "football 5",
      "football 6",
      "football 7",
      "football 8",
      "football 9",
      "football 10",
      "football 11",
      "football 12",
      "football 13",
      "football 14",
      "football 15",
      "football 16",
      "football 17",
      "football 18",
      "football 19",
      "football 20",
      "football 21",
      "football 22",
      "football 23",
      "football 24",
      "football 25",
      "football 26",
    ],
  },
  cricket: {
    id: 2,
    name: "cricket",
    data: ["cricket 1", "cricket 2", "cricket 3"],
  },
  basketball: {
    id: 3,
    name: "basketball",
    data: ["basketball 1", "basketball 2", "basketball 3"],
  },
  tennis: {
    id: 4,
    name: "tennis",
    data: ["tennis 1", "tennis 2", "tennis 3"],
  },
  "table tennis": {
    id: 5,
    name: "table tennis",
    data: ["table tennis 1", "table tennis 2", "table tennis 3"],
  },
  boxing: {
    id: 6,
    name: "boxing",
    data: ["boxing 1", "boxing 2", "boxing 3"],
  },
  "ice hockey": {
    id: 7,
    name: "ice hockey",
    data: ["ice hockey 1", "ice hockey 2", "ice hockey 3"],
  },
  volleyball: {
    id: 8,
    name: "volleyball",
    data: ["volleyball 1", "volleyball 2", "volleyball 3"],
  },
  "beach volley": {
    id: 8,
    name: "beach volley",
    data: ["beach volley 1", "beach volley 2", "beach volley 3"],
  },
  popular: {
    id: 9,
    name: "popular",
    data: [
      "My Favourites",
      "Today's Football",
      "Football In Next 3 Hours",
      "England Premier League",
      "FA CUP",
      "Laliga",
      "Serie A",
      "Bundesliga",
      "Ligue 1",
      "Champions League",
      "Europa League",
      "Conference League",
      "NBA",
      "Indian Wells",
    ],
  },
};

const AToZMenu = () => {
  const [layer, setLayer] = useState("sports");
  const [isActive, setIsActive] = useState("popular");
  const [response, setResponse] = useState(my_response);

  const activeLayer =
    "flex flex-row items-center justify-center gap-1 py-2 text-live font-semibold border-b-2 border-live w-full cursor-cell";
  const normalLayer =
    "flex flex-row items-center justify-center gap-1 py-2 text-black w-full border-b-2 border-slate-300 cursor-pointer";

  const activeStyle =
    "flex flex-row items-center justify-start px-2 py-1 gap-3 text-live font-bold border-b-2 border-live w-full cursor-cell";
  const normalStyle =
    "flex flex-row items-center justify-start px-2 py-1 gap-3 text-black w-full border-b-2 cursor-pointer";
  return (
    <A_Z_Layout>
      <div className="w-full h-screen px-1 md:px-20 py-24 md:py-5 flex flex-col gap-0 items-start justify-start md:justify-between bg-neutral">
        <div className="sticky top-0 w-full">
          <ul className="w-full flex flex-row items-center justify-evenly">
            <li
              className={layer === "sports" ? activeLayer : normalLayer}
              onClick={() => setLayer("sports")}
            >
              <span className="text-[18px]">
                <MdSports />
              </span>
              Sports
            </li>
            <li
              className={layer === "live" ? activeLayer : normalLayer}
              onClick={() => setLayer("live")}
            >
              <span className="text-[18px]">
                <SiLivewire />
              </span>
              Live ({234})
            </li>
            <li
              className={layer === "promotions" ? activeLayer : normalLayer}
              onClick={() => setLayer("promotions")}
            >
              <span className="text-[18px]">
                <MdEventAvailable />
              </span>
              Promotions ({9})
            </li>
          </ul>
        </div>
        {layer === "sports" && (
          <div className="flex flex-row items-start justify-between w-full h-full pb-10">
            <div className="flex flex-col items-start justify-start h-full w-1/3 bg-white overflow-y-auto">
              <button
                onClick={() => setIsActive("popular")}
                className={isActive === "popular" ? activeStyle : normalStyle}
              >
                <AiFillBank />
                Popular
              </button>
              {SPORT_LINKS.map((sport, index) => (
                <button
                  key={index}
                  onClick={() => setIsActive(sport?.title)}
                  className={
                    isActive === sport?.title ? activeStyle : normalStyle
                  }
                >
                  <span>{sport?.icon}</span>
                  {sport?.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col items-start w-2/3 px-2 h-full">
              {isActive === "Football" ? (
                <AZ_Popular data={response?.football?.data} />
              ) : isActive === "Cricket" ? (
                <AZ_Popular data={response?.cricket?.data} />
              ) : isActive === "Basketball" ? (
                <AZ_Popular data={response?.basketball?.data} />
              ) : isActive === "Tennis" ? (
                <AZ_Popular data={response?.tennis?.data} />
              ) : isActive === "Table Tennis" ? (
                <AZ_Popular data={response?.["table tennis"]?.data} />
              ) : isActive === "Boxing" ? (
                <AZ_Popular data={response?.boxing?.data} />
              ) : isActive === "Ice Hockey" ? (
                <AZ_Popular data={response?.["ice hockey"]?.data} />
              ) : isActive === "Volleyball" ? (
                <AZ_Popular data={response?.volleyball?.data} />
              ) : isActive === "Beach Volley" ? (
                <AZ_Popular data={response?.["beach volley"]?.data} />
              ) : isActive === "popular" ? (
                <AZ_Popular data={response?.popular?.data} />
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        {layer === "live" && (
          <div className="flex flex-row items-start justify-between w-full h-full pb-10">
            <div className="flex flex-col items-start justify-start h-full w-1/3 bg-white overflow-y-auto">
              {/* <button
                onClick={() => setIsActive("popular")}
                className={isActive === "popular" ? activeStyle : normalStyle}
              >
                <AiFillBank />
                Popular
              </button> */}
              {SPORT_LINKS.map((sport, index) => (
                <button
                  key={index}
                  onClick={() => setIsActive(sport?.title)}
                  className={
                    isActive === sport?.title ? activeStyle : normalStyle
                  }
                >
                  <span>{sport?.icon}</span>
                  {sport?.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col items-start w-2/3 px-2 h-full">
              {isActive === "Football" ? (
                <AZ_Popular data={response?.football?.data} />
              ) : isActive === "Cricket" ? (
                <AZ_Popular data={response?.cricket?.data} />
              ) : isActive === "Basketball" ? (
                <AZ_Popular data={response?.basketball?.data} />
              ) : isActive === "Tennis" ? (
                <AZ_Popular data={response?.tennis?.data} />
              ) : isActive === "Table Tennis" ? (
                <AZ_Popular data={response?.["table tennis"]?.data} />
              ) : isActive === "Boxing" ? (
                <AZ_Popular data={response?.boxing?.data} />
              ) : isActive === "Ice Hockey" ? (
                <AZ_Popular data={response?.["ice hockey"]?.data} />
              ) : isActive === "Volleyball" ? (
                <AZ_Popular data={response?.volleyball?.data} />
              ) : isActive === "Beach Volley" ? (
                <AZ_Popular data={response?.["beach volley"]?.data} />
              ) : isActive === "popular" ? (
                <AZ_Popular data={response?.popular?.data} />
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        {layer === "promotions" && (
          <div className=" flex flex-col items-center justify-start gap-5 h-full w-full overflow-y-auto">
            <PromotionCard
              imgSrc={"/images/carousel/team-durant.jpg"}
              details="NBA Durant to score"
            />
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
          </div>
        )}
      </div>
    </A_Z_Layout>
  );
};

export default AToZMenu;
