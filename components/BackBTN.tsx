"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackBTN = () => {
  const route = useRouter();
  return (
    <button
      onClick={() => route.back()}
      className="flex flex-row items-center justify-center gap-2 p-2 rounded-lg text-white font-bold hover:shadow-lg hover:scale-105 hover:text-live transition-all duration-200"
    >
      <span className="text-[22px]">
        <BiArrowBack />
      </span>
      {/* <span>Go Back</span> */}
    </button>
  );
};

export default BackBTN;
