"use client";
import React, { useState } from "react";
import { TextInput, TextInputWithLabel } from "..";
import { BiLoaderCircle } from "react-icons/bi";
import { GoAlert } from "react-icons/go";
import { AiFillAlert } from "react-icons/ai";
import { RiAlertFill } from "react-icons/ri";
import Image from "next/image";
import { WITHDRAW_OPTIONS } from "@/constants";

const WithdrawInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(WITHDRAW_OPTIONS[0].type);
  const [payPalID, setPayPalID] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full bg-white p-2">
      <div className="flex flex-row items-center justify-start gap-2 w-full">
        {WITHDRAW_OPTIONS.map((option, index) => (
          <button
            key={index}
            className={
              isActive === option.type
                ? "p-2 text-xl font-bold capitalize border-b-2 border-live"
                : "capitalize p-2 text-xl border-b-2 border-transparent"
            }
            onClick={() => setIsActive(option.type)}
          >
            {option.type}
          </button>
        ))}
      </div>

      <div className="w-full">
        {isActive === WITHDRAW_OPTIONS[0].type && (
          <div className="w-full flex flex-col items-start justify-center gap-5 p-5">
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <h2 className="font-bold">Bank Account Info</h2>
              <div className="w-full flex flex-col md:flex-row items-center justify-start gap-5">
                <TextInputWithLabel
                  label="Paypal ID"
                  inputType="text"
                  placeholder="Paypal Id"
                  string={payPalID}
                  onUpdate={setPayPalID}
                  isDisabled={isLoading}
                  error=""
                />
                <TextInputWithLabel
                  label="Amount (USD)"
                  inputType="text"
                  placeholder="Minimum 10 USD"
                  string={amount}
                  onUpdate={setAmount}
                  isDisabled={isLoading}
                  error=""
                />
              </div>

              <div className="px-6 pb-2 mt-6 w-full">
                <button
                  disabled={isLoading}
                  onClick={() => setIsLoading(true)}
                  className={`
                            flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                            ${!amount || !payPalID ? "bg-gray-200" : "bg-live"}
                        `}
                >
                  {isLoading ? (
                    <BiLoaderCircle
                      className="animate-spin"
                      color="#ffffff"
                      size={25}
                    />
                  ) : (
                    "Withdraw"
                  )}
                </button>
              </div>
            </div>

            <div className="py-2 border-y-2 w-full">
              <h2 className="font-bold py-2">Note</h2>
              <ul className="text-xs flex flex-col gap-2 text-slate-500">
                <li>Minimum per transaction is USD 10.00.</li>
                <li>Maximum per transaction is USD 1,000,000.00.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawInfo;
