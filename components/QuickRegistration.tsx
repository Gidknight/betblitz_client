"use client";

import React, { useState } from "react";

const QuickRegistration = () => {
  const [mobileNumber, setMobileNumber] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    if (mobileNumber == null) {
      setErrorMsg("Must input a number");
    }
    alert("submitted");
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg
    shadow-lg p-5 w-full"
    >
      <h2 className="text-xl font-bold">Quick Registration</h2>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h3 className="text-sm text-center text-green-700 font-bold">
          Make A Deposit And Start Betting!
        </h3>
        <input
          type="number"
          placeholder="903xxxxxxx9"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="p-2 border-2 rounded-lg"
          required
        />
      </div>
      <button
        className="bg-live hover:bg-liveHover text-lg text-white px-10 py-2"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

export default QuickRegistration;
