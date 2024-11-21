"use client";
import React, { useState } from "react";
import { TextInput, TextInputWithLabel } from "..";
import { BiLoaderCircle } from "react-icons/bi";

const ProfileInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="w-full bg-white p-2">
      <h1 className="font-bold text-xl p-2 border-b-2 border-live">Profile</h1>
      <div className="flex w-full md:w-2/3 flex-col items-center justify-center gap-2 p-5">
        <TextInputWithLabel
          error=""
          inputType="text"
          onUpdate={setUserName}
          placeholder="Username"
          string={userName}
          isDisabled={isLoading}
          label="User Name"
        />
        <TextInputWithLabel
          error=""
          inputType="text"
          onUpdate={setFirstName}
          placeholder="First Name"
          string={firstName}
          isDisabled={isLoading}
          label="First Name"
        />
        <TextInputWithLabel
          error=""
          inputType="text"
          onUpdate={setLastName}
          placeholder="Last Name"
          string={lastName}
          isDisabled={isLoading}
          label="Last Name"
        />
        <TextInputWithLabel
          error=""
          inputType="date"
          onUpdate={setDob}
          placeholder="mm/dd/yyyy"
          string={dob}
          isDisabled={isLoading}
          label="Date Of Birth"
        />
        <TextInputWithLabel
          error=""
          inputType="email"
          onUpdate={setEmail}
          placeholder="example@email.com"
          string={email}
          isDisabled={isLoading}
          label="Email Address"
        />
        <TextInputWithLabel
          error=""
          inputType="text"
          onUpdate={setPhoneNumber}
          placeholder="Phone Number"
          string={phoneNumber}
          isDisabled={isLoading}
          label="Phone Number"
        />

        <div className="px-6 pb-2 mt-6 w-full">
          <button
            disabled={isLoading}
            onClick={() => setIsLoading(true)}
            className={`
                            flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                            ${
                              !email || !phoneNumber ? "bg-gray-200" : "bg-live"
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
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
