"use client";

import React, { useState } from "react";
import { ComboBox, FormButton, TextInput } from "@/components";
import Register from "@/components/auth/Register";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import AuthLayout from "@/app/layouts/AuthLayout";
// import RegBanner from "../../widgets/RegBanner";

const countries = [
  {
    id: 1,
    name: "Nigeria",
  },
  {
    id: 2,
    name: "Ghana",
  },
];

const UserRegistration = () => {
  const [step, setStep] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  //   first form date
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState(null);
  const [promoCode, setPromoCode] = useState("");

  //   second form data
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phoneNumner, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  //   FUNCTIONS
  const makeFirstSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // run the logic

    // quit and move to the next step
    setIsLoading(false);
    setStep(2);
  };

  const makeSecondSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // run the logic

    // quit and move to the next step
    setIsLoading(false);
    setStep(3);
  };

  const makeThirdSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // run the logic

    // quit and move to the next step
    setIsLoading(false);
    setStep(1);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col  w-full p-20 ">
        {/* <div className="m-auto py-10"> */}
        <div className="flex flex-row items-center justify-between w-full">
          <Image
            alt="login image"
            src={"/images/headshot.jpg"}
            height={400}
            width={400}
            className="object-cover"
          />
          <Register />
        </div>
        {/* </div> */}
      </div>
    </AuthLayout>
  );
};

export default UserRegistration;
