"use client";

import React, { useState } from "react";
import { MainButton } from "..";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";

const MakeADeposit = () => {
  const [toggle, setToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="bg-white w-full hover:shadow-md duration-200 transition-all">
      <div
        className="p-2 flex flex-row items-center justify-between font-bold cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <h2>Make A Deposit</h2>
        <p>{toggle ? <BsArrowUp /> : <GoArrowDown />}</p>
      </div>
      {toggle && (
        <form className="bg-slate-100 p-2 flex flex-col items-center justify-start">
          <MainButton
            customFunction={handleDeposit}
            isLoading={isLoading}
            label={isLoading ? "Loading..." : "Make a Deposit"}
          />
        </form>
      )}
    </div>
  );
};

export default MakeADeposit;
