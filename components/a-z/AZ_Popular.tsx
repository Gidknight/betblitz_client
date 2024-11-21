"use client";

import React from "react";

const my_data = ["number one item", "number two item", "number three item"];

const AZ_Popular = ({ data = my_data }: any) => {
  return (
    <ul className="w-full overflow-y-auto h-full pb-5">
      {data.map((item, index: number) => (
        <li
          key={index}
          className="py-2 capitalize border-b border-slate-400 text-slate-800 font-semibold text-base"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default AZ_Popular;
