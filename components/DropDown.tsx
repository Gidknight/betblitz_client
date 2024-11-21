"use client";

import React from "react";

interface DropType {
  value: string | number;
  id?: string;
  setValue: (value: string | number) => void;
  options: {
    id: string | number;
    title?: string | number;
  }[];
}

const DropDown = ({ value, setValue, options, id }: DropType) => {
  return (
    <div className="block md:hidden">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded-[12px] p-2 w-fit flex flex-col items-end justify-end  outline-slate-400 bg-transparent"
        id={id}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option?.title}
            className={
              value === option?.title
                ? "font-bold capitalize relative text-xs text-right bg-slate-300"
                : `capitalize relative text-xs text-right bg-slate-300`
            }
            onClick={() => setValue(option?.title)}
          >
            {option?.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
