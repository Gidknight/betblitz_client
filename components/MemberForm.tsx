"use client";

import React, { useState } from "react";
import TextInput from "./TextInput";
import { CancelButton, ComboBox, Header, MainButton, SubButton } from ".";
import { notificationTypes, titles } from "@/constants";
import { Upload } from "@mui/icons-material";
import toast from "react-hot-toast";
import {
    readDataFromMembersFile,
    writeDataToMembersFile,
} from "@/database/database";
import { useRouter } from "next/router";

const MemberForm = () => {
    const route = useRouter();
    const [title, setTitle] = useState("");
    const [surname, setSurname] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [notify, setNotify] = useState(true);
    const [notificationType, setNotificationType] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const clearForm = () => {
        setEmail("");
        setFirstName("");
        setGender("");
        setMiddleName("");
        setNotificationType("");
        setPhoneNumber("");
        setSurname("");
        setTitle("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormData({
            title: title,
            surname: surName,
            firstName: firstName,
            middleName: middleName,
            phoneNumber: phoneNumber,
            gender: gender,
        });
        const data = readDataFromMembersFile();
        data.push(formData);
        writeDataToMembersFile(data);
        setFormData({
            title: "",
            surname: "",
            firstName: "",
            middleName: "",
            phoneNumber: "",
            gender: "",
        });
        toast.success("Member Added Successfully");
        setIsLoading(false);
    };

    const handleCancel = () => {
        clearForm();
        route.back();
    };

    return (
        <div className={`flex bg-neutral flex-col h-full w-full  md:p-10`}>
            <Header
                title={"member registration"}
                subtext={""}
            />
            <h1 className="text-lg font-bold text-center uppercase text-primary">
                Membership Form
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-2"
            >
                <fieldset className="flex flex-col gap-1">
                    <label
                        htmlFor={"title"}
                        className="capitalize text-lg text-slate-800 font-semibold"
                    >
                        title
                        <span className="text-sm italic font-thin">
                            {" "}
                            Required
                        </span>
                    </label>

                    <ComboBox
                        options={titles}
                        onSelect={setTitle}
                        defaultMessage={"select a title"}
                    />
                </fieldset>
                <TextInput
                    label={"Surname"}
                    id={"surName"}
                    type={"text"}
                    subLabel={"required"}
                    placeholder={"input your surname"}
                    customFunc={(e) => setSurname(e.target.value)}
                    value={surname}
                />
                <TextInput
                    label={"First Name"}
                    id={"firstName"}
                    type={"text"}
                    subLabel={"required"}
                    placeholder={"input your first name"}
                    customFunc={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />
                <TextInput
                    label={"Middle Name"}
                    id={"middleName"}
                    type={"text"}
                    subLabel={"required"}
                    placeholder={"input your middle name"}
                    customFunc={(e) => setMiddleName(e.target.value)}
                    value={middleName}
                />

                <TextInput
                    label={"Phone Number"}
                    id={"phoneNumber"}
                    type={"number"}
                    subLabel={"required"}
                    placeholder={"input your phone number"}
                    customFunc={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                />
                <TextInput
                    label={"Email Address"}
                    id={"email"}
                    type={"email"}
                    subLabel={"required"}
                    placeholder={"input your email address"}
                    customFunc={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <fieldset className="flex flex-col gap-1">
                    <label
                        htmlFor={"notificationType"}
                        className="capitalize text-lg text-slate-800 font-semibold"
                    >
                        notification type
                        <span className="text-sm italic font-thin">
                            {" "}
                            Required
                        </span>
                    </label>

                    <ComboBox
                        options={notificationTypes}
                        onSelect={setNotificationType}
                        defaultMessage={"select your notification type"}
                    />
                </fieldset>

                <div className="flex flex-row items-center justify-between gap-5">
                    <CancelButton
                        text={"cancel"}
                        type={"button"}
                        customFunc={handleCancel}
                    />
                    <SubButton
                        type={"submit"}
                        customFunc={null}
                        icon={<Upload />}
                        text={"submit"}
                        isLoading={isLoading}
                    />
                </div>
            </form>
        </div>
    );
};

export default MemberForm;
