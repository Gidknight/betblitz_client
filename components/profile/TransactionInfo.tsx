"use client";
import React, { useState } from "react";
import { TransactionTable } from "..";
import { BiLoaderCircle } from "react-icons/bi";

import { TRANSACTION_OPTIONS } from "@/constants";

const TransactionInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(TRANSACTION_OPTIONS[0]);

  const [payPalID, setPayPalID] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full flex flex-col items-center  justify-center gap-1 md:gap-5">
      <div className="w-full bg-white p-2">
        <div className="hidden md:flex flex-row items-center justify-start gap-2">
          {TRANSACTION_OPTIONS.map((option, index) => (
            <button
              key={index}
              className={
                isActive === option
                  ? "p-2 text-xl font-bold capitalize border-b-2 border-live"
                  : "capitalize p-2 text-xl border-b-2 border-transparent"
              }
              onClick={() => setIsActive(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-end w-full">
          <select
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            className="font-bold capitalize rounded-[12px] p-2 w-fit flex flex-col items-end justify-end  outline-slate-400 bg-transparent"
          >
            {TRANSACTION_OPTIONS.map((option, index) => (
              <option
                key={index}
                value={option}
                className={
                  isActive === option
                    ? "font-bold capitalize relative text-xs text-right bg-slate-300"
                    : `capitalize relative text-xs text-right bg-slate-300`
                }
                onClick={() => setIsActive(option)}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* tables */}
      <div className="bg-white w-full flex flex-col p-2 md:p-5">
        {isActive === TRANSACTION_OPTIONS[0] && (
          <TransactionTable
            title={TRANSACTION_OPTIONS[0] + " Table"}
            data={[]}
          />
        )}

        {isActive === TRANSACTION_OPTIONS[1] && (
          <TransactionTable
            title={TRANSACTION_OPTIONS[1] + " Table"}
            data={[]}
          />
        )}

        {isActive === TRANSACTION_OPTIONS[2] && (
          <TransactionTable
            title={TRANSACTION_OPTIONS[2] + " Table"}
            data={[1, 2, 3, 4]}
          />
        )}

        {isActive === TRANSACTION_OPTIONS[3] && (
          <TransactionTable
            title={TRANSACTION_OPTIONS[3] + " Table"}
            data={[1, 2, 3, 4]}
          />
        )}
        {isActive === TRANSACTION_OPTIONS[4] && (
          <TransactionTable
            title={TRANSACTION_OPTIONS[4] + " Table"}
            data={[1, 2, 3, 4]}
          />
        )}
      </div>
    </div>
  );
};

export default TransactionInfo;
