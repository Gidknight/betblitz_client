"use client";

import Image from "next/image";
import React from "react";

const BioData = ({ staff }) => {
    return (
        <div className="w-1/2 h-full flex flex-col gap-4 bg-gray-50 p-4 rounded-[20px] shadow-lg">
            <div className=" ">
                <Image
                    src={staff?.profilePicture || "/user.png"}
                    alt="profile pic"
                    width={100}
                    height={100}
                    className="object-contain w-100 h-100 border-2 shadow-lg rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className={h2Style}>
                    Staff ID: <span className={spanStyle}> {staff?.id}</span>
                </h2>
                <h2 className={h2Style}>
                    First Name:{" "}
                    <span className={`${spanStyle} capitalize`}>
                        {staff?.firstName}
                    </span>
                </h2>
                <h2 className={h2Style}>
                    Last Name:{" "}
                    <span className={`${spanStyle} capitalize`}>
                        {staff?.lastName}
                    </span>
                </h2>
                <h2 className={h2Style}>
                    Email Address:{" "}
                    <span className={spanStyle}>{staff?.email}</span>
                </h2>
                <h2 className={h2Style}>
                    Role:{" "}
                    <span className={`${spanStyle} capitalize`}>
                        {" "}
                        {staff?.role}
                    </span>
                </h2>
                <h2 className={h2Style}>
                    Salary: <span className={spanStyle}>#{staff?.salary}</span>
                </h2>
            </div>
        </div>
    );
};

export default BioData;
