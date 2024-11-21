"use client";

import React, { useState, useRef } from "react";
import { BiLock } from "react-icons/bi";

const OddButton = ({
  odd,
  customFunction,
  isDisabled,
  lock,
}: {
  odd: number | string;
  customFunction: () => void;
  isDisabled?: boolean;
  lock?: boolean;
}) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    customFunction();
    setActive(!active);
  };
  return (
    <button
      onClick={handleClick}
      className={
        active && !isDisabled
          ? "bg-liveHover p-1 md:p-1.5 text-black font-semibold w-full text-center"
          : !active && !isDisabled
          ? "p-1 md:p-1.5 text-white font-semibold bg-live w-full text-center"
          : " bg-gray-400 p-1 md:p-1.5 text-white font-semibold w-full text-center"
      }
      disabled={isDisabled || lock}
    >
      {!lock ? odd : <BiLock size="22" />}
    </button>
  );
};

export default OddButton;
