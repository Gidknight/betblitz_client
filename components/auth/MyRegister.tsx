import React from "react";

const MyRegister = () => {
  return (
    <div className="w-100 p-5 m-5 bg-transparent rounded-xl flex flex-col gap-5">
      <h1 className="text-center font-bold text-xl uppercase">Open Account</h1>
      {/* Bread Crum */}
      <div className="mx-auto flex flex-row gap-5 bg-white p-5 rounded-xl shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <span
            className={`p-1 rounded-full ${
              step == 1 || 2 ? "bg-live" : "bg-slate-400"
            } text-white `}
          >
            <MdDone />
          </span>
          <span>Step 1</span>
        </div>

        <div
          className={`w-[70px] h-[3px] my-auto ${
            step == 1 || 2 ? "bg-liveHover" : "bg-slate-300"
          }`}
        />

        <div className="flex flex-col items-center justify-center">
          <span
            className={`p-1 rounded-full ${
              step == 2 || 3 ? "bg-live" : "bg-slate-400"
            } text-white `}
          >
            <MdDone />
          </span>
          <span>Step 2</span>
        </div>

        <div
          className={`w-[70px] h-[3px] my-auto ${
            step == 2 || 3 ? "bg-liveHover" : "bg-slate-300"
          }`}
        />

        <div className="flex flex-col items-center justify-center">
          <span
            className={`p-1 rounded-full ${
              step == 3 ? "bg-live" : "bg-slate-400"
            } text-white `}
          >
            <MdDone />
          </span>
          <span>Step 3</span>
        </div>
      </div>

      <div className="mx-auto flex flex-row items-center justify-start h-100 w-100">
        {/* First Form Step */}
        {step == 1 && (
          <form
            className="flex flex-col items-center gap-4 bg-white p-10 "
            onSubmit={makeFirstSubmit}
          >
            <div className="flex flex-row gap-5">
              <TextInput
                id={"surname"}
                label={"Surname"}
                type={"text"}
                setValue={setSurname}
                value={surname}
                subLabel={"Enter Your Surname as on your ID"}
                placeholder={"Surname"}
              />
              <TextInput
                id={"firstName"}
                label={"First Name"}
                type={"text"}
                setValue={setFirstName}
                value={firstName}
                subLabel={"Enter Your First name as on your ID"}
                placeholder={"exampleemail@gmail.com"}
              />
            </div>

            <div className="flex flex-row gap-5">
              <TextInput
                id={"email"}
                label={"Email"}
                type={"email"}
                setValue={setEmail}
                value={email}
                subLabel={"A valid Email is required to move funds"}
                placeholder={"exampleemail@gmail.com"}
              />
              <TextInput
                id={"dob"}
                label={"Date Of Birth"}
                type={"date"}
                setValue={setDob}
                value={dob}
                subLabel={"Enter Your Date of birth as on your ID"}
                placeholder={""}
              />
            </div>

            <FormButton
              text={"Continue"}
              type={"submit"}
              isLoading={isLoading}
            />
          </form>
        )}

        {/* Second Form Step */}
        {step == 2 && (
          <form
            className="flex flex-col items-center gap-4 bg-white p-10  "
            onSubmit={makeSecondSubmit}
          >
            <div className="flex flex-row gap-5">
              <TextInput
                id={"address1"}
                label={"Address One"}
                type={"text"}
                setValue={setAddress1}
                value={address1}
                subLabel={"Enter Your Home Address"}
                placeholder={"Home Address"}
              />
              <TextInput
                id={"address2"}
                label={"Address Two: (Optional)"}
                type={"text"}
                setValue={setAddress2}
                value={address2}
                subLabel={"Enter Your Second Address"}
                placeholder={"Second Address"}
              />
            </div>

            <div className="flex flex-row gap-5">
              <ComboBox
                id={"email"}
                label={"Country"}
                subLabel={"Select Resident Country"}
                options={countries}
                defaultMessage={"-- Select Your Country --"}
                onSelect={setCountry}
              />
              <TextInput
                id={"phoneNumner"}
                label={"Phone Number"}
                type={"number"}
                value={phoneNumner}
                setValue={setPhoneNumber}
                subLabel={"Enter Your valid phone Number to receive OTP"}
                placeholder={""}
              />
            </div>

            <FormButton
              text={"Continue"}
              type={"submit"}
              isLoading={isLoading}
            />
          </form>
        )}

        {/* Third Form Step */}
        {step == 3 && (
          <form
            className="flex flex-col items-center gap-4 bg-white p-10 "
            onSubmit={makeThirdSubmit}
          >
            <h1 className="text-xl font-bold uppercase">OTP Verification</h1>
            <h2>input the six digits sent to {phoneNumner}</h2>
            <div className="flex flex-row gap-5">
              <input type="number" />
            </div>

            <FormButton
              isLoading={isLoading}
              text={"Confirm"}
              type={"submit"}
            />
          </form>
        )}

        {/* <RegBanner /> */}
      </div>
    </div>
  );
};

export default MyRegister;
