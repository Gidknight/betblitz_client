"use client";

import React, { useState } from "react";

const ComboBox = ({
  options,
  onSelect,
  defaultMessage,
  id,
  label,
  subLabel,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const optionStyle = `capitalize`;
  return (
    <div className="flex flex-col w-fit">
      <label
        htmlFor={id}
        className="capitalize text-lg text-slate-800 font-semibold pb-2"
      >
        {`${label}:`}
      </label>
      <select
        value={selectedOption}
        onChange={(e) => handleOptionSelect(e.target.value)}
        className="border-2 rounded-t-[12px] p-2 w-80"
        id={id}
      >
        <option value="" className={optionStyle}>
          {defaultMessage}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option?.value} className={optionStyle}>
            {option?.name}
          </option>
        ))}
      </select>
      {subLabel && (
        <p className="text-sm italic font-thin bg-slate-300 w-100 p-1 concat">
          {subLabel}
        </p>
      )}
    </div>
  );
};

export default ComboBox;
