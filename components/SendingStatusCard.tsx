"use client";

import React, { useState } from "react";
import Line from "./Line";
import { Error, MarkEmailRead } from "@mui/icons-material";
import LoadingSpinner from "./LoadingSpinner";
import database from "../../dummy/database";

const SendingStatusCard = ({ setEmailing, status }) => {
  const [total, setTotal] = useState(database.length);
  const [sending, setSending] = useState(1);
  const [successCount, setSuccessCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);

  const goHome = () => {
    status(false);
    setEmailing(false);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightWhite opacity-100 p-6 rounded-xl shadow-lg border-2">
      <div className="w-80 text-center">
        <h1 className="font-bold text-lg text-primary uppercase mb-4">
          Status Card
        </h1>
        <Line />
        <div className="w-full border-2 rounded-xl">
          <LoadingSpinner />
          <h2 className="text-center font-semibold text-gray1">
            Sending Emails
          </h2>
        </div>
        <Line />
        <div className="flex flex-row gap-2 w-full justify-start text-gray2">
          <h2 className="font-semibold">Sending:</h2>
          <h3 className="">
            <span className="text-green-500 font-semibold">{sending}</span> of{" "}
            <span className="text-green-500 font-semibold">{total}</span> emails
          </h3>
        </div>
        <div className="flex flex-col gap-2 w-full">
          {successCount !== 0 && (
            <div className="px-4 py-2 border-2 border-green-300 flex flex-row items-center justify-between bg-green-100 rounded-lg">
              <h3 className="capitalize text-green-600">
                <MarkEmailRead /> success count:
              </h3>
              <h3 className="font-bold text-green-600 text-lg ">
                {successCount}
              </h3>
            </div>
          )}

          {errorCount !== 0 && (
            <div className="px-4 py-2 border-2 border-red-300 flex flex-row items-center justify-between bg-red-100 rounded-lg">
              <h3 className="capitalize text-red-500">
                <Error /> error count:
              </h3>
              <h3 className="font-bold text-red-500 text-lg ">{errorCount}</h3>
            </div>
          )}
        </div>
        <div className="mt-4">
          <button
            className="text-white bg-primary p-2 hover:bg-white hover:text-primary hover:font-bold hover:shadow-lg border-2 border-primary transition-all duration-300 rounded-xl cursor-pointer"
            onClick={goHome}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendingStatusCard;
