"use client";

import { useUser } from "@/context/user";
import { useSlipStore } from "@/stores/useSlipStore";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const SlipCard = ({
  homeTeam,
  awayTeam,
  odd,
  gameId,
  deleteCard,
  sportType,
  oddType,
  oddCategory,
}: {
  homeTeam: string;
  awayTeam: string;
  odd: number;
  gameId: number | string;
  deleteCard: () => void;
  sportType: string;
  oddType: string | number;
  oddCategory: string | number;
}) => {
  return (
    <div
      id={"slip_card_" + gameId}
      className="flex flex-row items-center justify-center w-full p-1 border-y border-slate-400"
    >
      <div className="w-1/12">
        <input
          type="checkbox"
          className="bg-live text-live p-1 cursor-pointer"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-11/12">
        <div className="w-full flex flex-row items-center justify-between">
          <p>
            <span>{sportType}</span> <span>{oddCategory}</span>
          </p>
          <button onClick={deleteCard}>
            <MdClose />
          </button>
        </div>
        <div className="w-full truncate">
          <p className="w-100 truncate text-sm">
            <span className="bg-live text-slate-100 mr-2">Live</span>
            <span className="truncate">
              {homeTeam} vs {awayTeam}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between w-full">
          <p className="text-xs">{oddType}</p>
          <p className="font-bold text-base">{odd}</p>
        </div>
      </div>
    </div>
  );
};

const BetSlip = () => {
  const [isBetslip, setIsBetslip] = useState(true);
  const [isSingle, setIsSingle] = useState(true);
  const [stake, setStake] = useState(5);
  const [totalOdds, setTotalOdds] = useState(0);
  const [pLowWins, setPLowWins] = useState(0);
  // const [pLowWins, setPLowWins] = useState(0);
  const [pWins, setPWins] = useState(0);
  const { gideon } = useUser();

  // store
  const mySlip = useSlipStore((state) => state.mySlip);
  const removeSlip = useSlipStore((state) => state.removeSlip);
  const removeAll = useSlipStore((state) => state.removeAll);

  const calculateBonus = (totalOdd: number) => {
    let bonus = 0;

    if (totalOdd < 10) {
      bonus = (totalOdd / 100) * 50;
    } else if (totalOdd > 10 && totalOdd <= 20) {
      bonus = (totalOdd / 100) * 60;
    }

    return bonus;
  };

  const getPotentialWinforSingle = () => {
    if (mySlip.length === 0) {
      setTotalOdds(0);
      setPLowWins(0);
      setPWins(0);
      return;
    }
    let result = [];
    for (let i = 0; i < mySlip.length; i++) {
      let currentOdd = mySlip[i].odd;
      let posWin = parseFloat(currentOdd) * stake;
      result.push(posWin);
    }
    let sortedResult = result.sort();

    let possibleLow = sortedResult[0].toFixed(2);
    setPLowWins(possibleLow);
    // console.log("posible low: " + possibleLow);

    // let possibleHigh = 0;
    // for (let i = 0; i < sortedResult.length; i++) {
    //   possibleHigh = sortedResult[i] + possibleHigh;
    // }

    // console.log("possible high: " + possibleHigh.toFixed(2));
  };

  const getPotentialWinforMultiple = () => {
    if (mySlip.length === 0) {
      setTotalOdds(0);
      setPWins(0);
    }

    let totalOdd = 0.0;
    for (let i = 0; i < mySlip.length; i++) {
      let currentOdd = mySlip[i].odd;
      // Parse the string to a float with two decimal places
      // const floatValue = parseFloat(numericString).toFixed(2);
      totalOdd = parseFloat(currentOdd) + totalOdd;
    }
    let bonus = calculateBonus((totalOdd = totalOdd));
    setTotalOdds(totalOdd.toFixed(2));
    // console.log("total odds: " + totalOdd);
    let potential = totalOdd * stake;
    let final = potential.toFixed(2);
    // console.log("potential: " + potential);
    setPWins(final);
    // return potential;
  };

  useEffect(() => {
    getPotentialWinforMultiple();
    getPotentialWinforSingle();
  }, [stake, mySlip]);

  return (
    <div className="w-56 bg-dark p-1 text-sm sticky top-0 hidden md:block z-10">
      <div className="flex flex-row items-center justify-evenly p-2 text-white">
        <button
          onClick={() => setIsBetslip(true)}
          className={`w-1/2 border-b-2 ${
            isBetslip ? "border-live" : "border-transparent"
          } pb-2`}
        >
          Betslip{" "}
          <span className="bg-slate-500 rounded-full px-1">
            {mySlip.length}
          </span>
        </button>
        <button
          onClick={() => setIsBetslip(false)}
          className={`w-1/2 border-b-2 ${
            !isBetslip ? "border-live" : "border-transparent"
          } pb-2`}
        >
          Cashout
        </button>
      </div>

      <div className="w-full bg-slate-50">
        {isBetslip ? (
          <div className="w-full">
            <div className="w-full flex justify-evenly items-center">
              <button
                onClick={() => setIsSingle(true)}
                className={`w-1/2 ${
                  isSingle ? "bg-slate-50 text-black" : "bg-live text-white"
                } p-2`}
              >
                Single
              </button>
              <button
                onClick={() => setIsSingle(false)}
                className={`w-1/2 ${
                  !isSingle ? "bg-slate-50 text-black" : "bg-live text-white"
                } p-2`}
              >
                Multiple
              </button>
            </div>
            {mySlip.length > 1 && (
              <div className="flex justify-end w-full ">
                <button
                  className="text-right text-xs border rounded-xl p-1 hover:shadow-md transition-all duration-200"
                  onClick={() => removeAll()}
                >
                  Remove All
                </button>
              </div>
            )}
            {isSingle ? (
              <div className="flex flex-col items-center justify-start gap-2 w-full">
                {/* slip card */}
                <div className="flex flex-col items-center justify-start gap-1 w-full p-1">
                  {mySlip &&
                    mySlip.map((game, index) => (
                      <SlipCard
                        key={index}
                        awayTeam={game.awayTeam}
                        gameId={game.id}
                        homeTeam={game.homeTeam}
                        odd={game.odd}
                        sportType={game.sport}
                        oddCategory={game.oddCategory}
                        oddType={game.oddType}
                        deleteCard={() => removeSlip(game?.uniqueID)}
                      />
                    ))}
                </div>

                {/* calculator */}
                <div className="flex flex-col items-center justify-start gap-1 w-full p-1 text-sm">
                  <div className="flex flex-row items-center justify-between font-semibold w-full">
                    <p className="">Type</p>
                    <p className="">No.</p>
                    <p className="">Stake ({gideon.currency})</p>
                  </div>

                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="w-1/3">Single</p>
                    <p className="w-1/3">{mySlip.length}</p>
                    <input
                      type="number"
                      className="w-1/3 outline-1 outline-primary"
                      value={stake}
                      onChange={(e) => setStake(e.target.value)}
                      placeholder="min. 5"
                    />
                  </div>

                  <div className="flex flex-row items-center justify-between w-full">
                    <p>Total Stake</p>
                    <p>{stake * mySlip.length}</p>
                  </div>

                  <div className="font-bold text-xs flex flex-row items-center justify-between w-full">
                    <p>Potential Win</p>
                    <p className="text-live">
                      {mySlip.length <= 1 ? pLowWins : pLowWins + " - " + pWins}
                    </p>
                  </div>

                  <div className="w-full">
                    <button className="bg-live text-white font-semibold w-full p-2 hover:shadow-md transition-all duration-200">
                      Place Bet
                    </button>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between text-live">
                    <button>Book Bet</button>
                    <button>Print</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-start gap-2 w-full">
                {/* slip card */}
                <div className="flex flex-col items-center justify-start gap-1 w-full p-1">
                  {mySlip &&
                    mySlip.map((game, index) => (
                      <SlipCard
                        key={index}
                        awayTeam={game.awayTeam}
                        gameId={game.id}
                        homeTeam={game.homeTeam}
                        odd={game.odd}
                        sportType={game.sport}
                        oddCategory={game.oddCategory}
                        oddType={game.oddType}
                        deleteCard={() => removeSlip(game?.uniqueID)}
                      />
                    ))}
                </div>

                {/*  multiple calculator */}
                <div className="flex flex-col items-center justify-start gap-1 w-full p-1 text-sm">
                  <div className="flex flex-row items-center justify-between font-semibold w-full">
                    <p className="">Type</p>
                    <p className="">No.</p>
                    <p className="">Stake ({gideon.currency})</p>
                  </div>

                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="w-1/3">Multiple</p>
                    <p className="w-1/3">{mySlip.length}</p>
                    <input
                      type="number"
                      className="w-1/3 outline-1 outline-primary"
                      value={stake}
                      onChange={(e) => setStake(e.target.value)}
                      placeholder="min. 5"
                    />
                  </div>

                  <div className="flex flex-row items-center justify-between w-full">
                    <p>Total Stake</p>
                    <p>{stake * mySlip.length}</p>
                  </div>

                  <div className="flex flex-row items-center justify-between w-full">
                    <p>Total Odds</p>
                    <p>{totalOdds}</p>
                  </div>

                  <div className="font-bold text-xs flex flex-row items-center justify-between w-full">
                    <p>Potential Win</p>
                    <p className="text-live ">{pWins}</p>
                  </div>

                  <div className="w-full ">
                    <button className="bg-live text-white font-semibold w-full p-2 hover:shadow-md transition-all duration-200">
                      Place Bet
                    </button>
                  </div>

                  <div className="w-full flex flex-row items-center justify-between text-live">
                    <button>Book Bet</button>
                    <button>Print</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>Cashout </div>
        )}
      </div>
    </div>
  );
};

export default BetSlip;
