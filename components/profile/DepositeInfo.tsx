"use client";
import React, { useState } from "react";
import { TextInput } from "..";
import { RiAlertFill } from "react-icons/ri";
import Image from "next/image";
import { DEPOSIT_OPTIONS } from "@/constants";

const DepositeInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(DEPOSIT_OPTIONS[0].type);

  return (
    <div className="w-full bg-white p-2">
      <div className="flex flex-row items-center justify-start gap-2 w-full">
        {DEPOSIT_OPTIONS.map((option, index) => (
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
        {isActive === DEPOSIT_OPTIONS[0].type && (
          <div className="flex flex-col items-center justify-center gap-5 p-5 w-full">
            <div className="w-full text-sm p-2 rounded-xl bg-yellow-100 flex items-center justify-start gap-2">
              <span className="text-[28px] text-yellow-300">
                <RiAlertFill />
              </span>
              <p>
                The name associated with your deposit will be used as your
                BetBlitz account name.{" "}
                <b>You will only be able to withdraw back to this name.</b>
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              {DEPOSIT_OPTIONS[0].pictures &&
                DEPOSIT_OPTIONS[0]?.pictures.map((image, index) => (
                  <Image
                    key={index}
                    alt={image}
                    src={image}
                    width={100}
                    height={100}
                    className="object-cover w-16 h-7 rounded-md"
                  />
                ))}
            </div>

            <div>Stripe Card</div>

            <div className="py-2 border-y-2">
              <h2 className="font-bold py-2">Note</h2>
              <ul className="text-xs flex flex-col gap-2 text-slate-500">
                <li>
                  Minimum deposit amount is NGN 100.00 - you can deposit at
                  least NGN 100.00 in one transaction.
                </li>
                <li>
                  Maximum per transaction is NGN 9,999,999.00 - you can deposit
                  up to NGN 9,999,999.00 in one transaction.
                </li>
                <li>
                  Any card details you choose to save are encrypted. We do not
                  store your CVV. We will also ask you to input your Sporty PIN
                  any time you want to use your card after it has been
                  successfully used for the first time and saved.
                </li>
                <li>
                  We do not share your payment information. It is used for
                  transaction verification only.
                </li>
                <li>
                  If you have any issues, please contact customer service. Using
                  too many cards or bank accounts for deposits may cause the
                  deposit to be blocked and your account restricted.
                </li>
                <li>Deposit is free, there are no transaction fees.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositeInfo;
