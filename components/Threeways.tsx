"use client";

import React from "react";
import Fixture from "./Fixture";

const Threeways = ({ date = "12/16, Friday" }) => {
  return (
    <div>
      <Fixture
        gameID={23}
        time={"12:00"}
        homeTeam={"Manchester United"}
        awayTeam={"Chelsea"}
        homeScore={0}
        awayScore={0}
        homeToWin={12.3}
        draw={5.3}
        awayToWin={4.5}
        goals={5.5}
        over={3.5}
        under={1.5}
      />
      <Fixture
        gameID={23}
        time={"12:00"}
        homeTeam={"Manchester United"}
        awayTeam={"Chelsea"}
        homeScore={0}
        awayScore={0}
        homeToWin={12.3}
        draw={5.3}
        awayToWin={4.5}
        goals={5.5}
        over={3.5}
        under={1.5}
      />
      <Fixture
        gameID={23}
        time={"12:00"}
        homeTeam={"Manchester United"}
        awayTeam={"Chelsea"}
        homeScore={0}
        awayScore={0}
        homeToWin={12.3}
        draw={5.3}
        awayToWin={4.5}
        goals={5.5}
        over={3.5}
        under={1.5}
      />
      <Fixture
        gameID={23}
        time={"12:00"}
        homeTeam={"Manchester United"}
        awayTeam={"Chelsea"}
        homeScore={0}
        awayScore={0}
        homeToWin={12.3}
        draw={5.3}
        awayToWin={4.5}
        goals={5.5}
        over={3.5}
        under={1.5}
      />
    </div>
  );
};

export default Threeways;
