"use client";
import React, { useState } from "react";
import { TextInputWithLabel, TransactionTable } from "..";
import { BiLoaderCircle } from "react-icons/bi";

import { S_AND_S_OPTIONS } from "@/constants";

const SafetyAndSecurityInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(S_AND_S_OPTIONS[0]);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [deactivateReason, setDeactivateReason] = useState("");

  return (
    <div className="w-full bg-white p-2">
      <div className="flex flex-row items-center justify-start gap-2">
        {S_AND_S_OPTIONS.map((option, index) => (
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
        {isActive === S_AND_S_OPTIONS[0] && (
          <div>
            <p className="text-slate-500">
              Your password must be at least 8 characters long and must contain
              at least one upper case letter, one lower case letter and one
              number.
            </p>
            <div className="flex flex-col items-start justify-center p-5 gap-5">
              <TextInputWithLabel
                label="Old Password"
                error=""
                inputType="password"
                onUpdate={setOldPassword}
                placeholder="Old Password"
                string={oldPassword}
                isDisabled={isLoading}
              />
              <TextInputWithLabel
                label="New Password"
                error=""
                inputType="password"
                onUpdate={setNewPassword}
                placeholder="New Password"
                string={newPassword}
                isDisabled={isLoading}
              />

              <button
                disabled={isLoading}
                onClick={() => setIsLoading(true)}
                className={`
                            flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                            ${
                              !oldPassword || !newPassword
                                ? "bg-gray-200"
                                : "bg-live"
                            }
                        `}
              >
                {isLoading ? (
                  <BiLoaderCircle
                    className="animate-spin"
                    color="#ffffff"
                    size={25}
                  />
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </div>
        )}

        {isActive === S_AND_S_OPTIONS[1] && (
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <p className="text-slate-500">
                You can use this page to deactivate your account. Deactivation
                will freeze all of the funds currently in your account, log out
                anybody currently logged in (including this device), and prevent
                new logins to your account. In order to reactivate your account,
                you will need to verify an OTP and reset your password.
              </p>
              <div className="w-full">
                <div className="py-5">
                  <TextInputWithLabel
                    error=""
                    inputType="text"
                    onUpdate={setDeactivateReason}
                    placeholder="Why do you want to deactivate"
                    string={deactivateReason}
                    isDisabled={isLoading}
                    label="Deactivate Reason"
                  />
                </div>
                <button
                  disabled={isLoading}
                  onClick={() => setIsLoading(true)}
                  className={`
                            flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                            ${!deactivateReason ? "bg-gray-200" : "bg-live"}
                        `}
                >
                  {isLoading ? (
                    <BiLoaderCircle
                      className="animate-spin"
                      color="#ffffff"
                      size={25}
                    />
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyAndSecurityInfo;
