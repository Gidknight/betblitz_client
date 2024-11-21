"use client";
import React, { useState } from "react";
import { TransactionTable } from "..";
import { BiLoaderCircle } from "react-icons/bi";

import { GIFT_OPTIONS } from "@/constants";

const WhatIsAGift = () => (
  <div>
    <h2 className="font-bold ">What is a gift?</h2>
    <ol className="text-sm text-slate-500 px-2">
      <li className="py-2">
        <ol>
          1. BetBlitz offers three categories of Gifts:
          <li className="ml-4 py-1">
            a) Cash Gift: These can be used without any spending condition
          </li>
          <li className="ml-4 py-1">
            b) Discount Gift: These offer discounts when spending a given amount
            of a stake
          </li>
          <li className="ml-4 py-1">
            c) Free Bet Gift: These can be used without any spending condition.
            The amount of Free Bet Gift used will be deducted from any potential
            winnings. For example, if you have 4.0 odds and use 50 Free Bet
            Gift, your potential win is 150 instead of 200.
          </li>
        </ol>
      </li>
      <li className="py-2">
        2. Gifts can be exchanged for Balance after a Winning Bet which was
        placed with a Gift. For Free Bet Gift, the amount of the Free Bet Gift
        used will be deducted from the winnings.
      </li>

      <li className="py-2">
        3. Gifts may have a period during which they are valid and after which
        the Gifts will expire.
      </li>

      <li className="py-2">
        4. Players can get gifts from promotions provided by BetBlitz. If you
        are interested in the latest promotions, please go to "Promotions" page
        to view more campaigns.
      </li>

      <li className="py-2">
        5. BetBlitz reserves the right to cancel, revoke, expire, and/or remove
        any Gift at any time.
      </li>
    </ol>
  </div>
);

const GiftInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(GIFT_OPTIONS[0]);

  const [payPalID, setPayPalID] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full bg-white p-2">
      <div className="flex flex-row items-center justify-start gap-2">
        {GIFT_OPTIONS.map((option, index) => (
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
      <div className="bg-white w-full flex flex-col p-5">
        {isActive === GIFT_OPTIONS[0] && (
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              Currently no available gift.
            </div>
            <WhatIsAGift />
          </div>
        )}

        {isActive === GIFT_OPTIONS[1] && (
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              Currently no Used/Expired gift.
            </div>
            <WhatIsAGift />
          </div>
        )}

        {isActive === GIFT_OPTIONS[2] && (
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              Screenshots of how to use
            </div>
            <div className="text-sm text-slate-500">
              <h3 className="text-base font-bold text-black">FAQ</h3>
              <div className="flex flex-col items-start justify-center gap-4">
                <div>
                  <p className="font-bold text-sm text-slate-800">
                    1. How many different types of "Gifts" are there?
                  </p>
                  <ul className="pl-4">
                    <li className="">
                      a) Cash Gift: These can be used without any spending
                      condition.
                    </li>
                    <li className="pt-2">
                      b) Discount Gift: These offer discounts when spending a
                      given amount of a stake.
                    </li>

                    <li className="pt-2">
                      c) Free Bet Gift: These can be used without any spending
                      condition. The amount of Free Bet Gift used will be
                      deducted from any potential winnings. For example, if you
                      have 4.0 odds and use 50 Free Bet Gift, your potential win
                      is 150 instead of 200.
                    </li>
                  </ul>
                </div>

                {/* question 2 */}
                <div>
                  <p className="font-bold text-sm text-slate-800">
                    2. What constraints/conditions for Gifts are there? Do
                    "Gifts" expire?
                  </p>
                  <ul className="pl-4">
                    <li>
                      Gifts can be exchanged for Balance after a Winning Bet
                      which was placed with a Gift. Besides the amount of Free
                      Bet Gift will be deducted. Gifts may have a period during
                      which they are valid and after which the Gifts will
                      expire. Read through a Gift's information to view all
                      details concerning usage conditions and the valid period.
                    </li>
                  </ul>
                </div>

                {/* question 3 */}
                <div>
                  <p className="font-bold text-sm text-slate-800">
                    3. Can I simultaneously use different "Gifts"?
                  </p>
                  <ul className="pl-4">
                    <li>Only 1 "Gift" can be used per transaction.</li>
                  </ul>
                </div>

                {/* question 4 */}
                <div>
                  <p className="font-bold text-sm text-slate-800">
                    4. Is it possible to cashout a "Gift"?
                  </p>
                  <ul className="pl-4">
                    <li>No, it is not possible.</li>
                  </ul>
                </div>

                {/* question 5 */}
                <div>
                  <p className="font-bold text-sm text-slate-800">
                    5. How can I get gifts?
                  </p>
                  <ul className="pl-4">
                    <li>
                      Players can get Gifts from promotions provided by
                      BetBlitz. If you are interested in the latest promotions,
                      please go to "Promotions" page to view more campaigns.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftInfo;
