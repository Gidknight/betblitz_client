"use client";

import React from "react";

const DashCard = ({
    title,
    icon,
    titleColor = "slate-200",
    iconColor,
    count,
}) => {
    return (
        <div className=" bg-white flex flex-row gap-2 p-2 md:p-5 w-32 md:w-48 items-center justify-evenly shadow-lg rounded-md">
            <div className="flex flex-col">
                <h3
                    className={`text-lg font-semibold md:font-bold uppercase text-${titleColor}`}
                >
                    {title}
                </h3>
                <h4>{count}</h4>
            </div>
            <div className={`bg-${iconColor} text-white rounded-full md:p-2`}>
                {icon}
            </div>
        </div>
    );
};

export default DashCard;
