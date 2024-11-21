"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const AZHeader = () => {
  return (
    <div className="md:hidden bg-primary fixed w-screen shadow-lg z-20 p-5">
      <form className="flex flex-row items-center justify-center rounded-xl bg-dark bg-opacity-40 p-1">
        <input
          required
          placeholder="Search by gameid"
          type="text"
          className="bg-transparent placeholder:text-slate-400 px-3 text-white focus:outline-none w-full"
        />
        <button className="text-[22px] p-2 text-white w">
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default AZHeader;
