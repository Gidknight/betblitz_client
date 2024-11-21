"use client";

import React from "react";

interface BtnType {
  label: string;
  isLoading: boolean;
  customFunction: () => void;
  icon?: any;
}

const MainButton = ({ label, isLoading, customFunction, icon }: BtnType) => {
  return (
    <button
      className="w-full capitalize flex items-center justify-center gap-2 bg-dark text-white py-2 px-4 font-semibold rounded-2xl disabled:bg-slate-400 hover:shadow-lg duration-200 transition-all hover:scale-105"
      disabled={isLoading}
      onClick={customFunction}
    >
      <span className="text-28">{icon}</span>
      {label}
    </button>
  );
};

export default MainButton;
