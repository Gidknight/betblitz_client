"use client";

import { LoadingSpinner } from ".";

const FormButton = ({ text, isLoading, type }) => {
  return (
    <button
      className={`flex gap-2 items-center bg-live font-bold text-lg p-2 text-white  cursor-pointer hover:bg-gray1 hover:text-none hover:shadow-lg  transition-all duration-300 capitalize ${
        isLoading && "hover:bg-red-500 cursor-text scale-105"
      }`}
      disabled={isLoading}
      type={type}
    >
      {text}
    </button>
  );
};

export default FormButton;
