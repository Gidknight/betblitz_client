"use client";

import React from "react";

const SendButton = ({ text, icon, cusFunc }) => {
    return (
        <button
            className="flex flex-row items-center justify-center gap-2 p-2 bg-send text-white text-lg font-semibold capitalize rounded-xl hover:scale-105 hover-shadow-lg hover:text-send hover:bg-white transition-all duration-300"
            onClick={cusFunc}
        >
            {icon}
            {text}
        </button>
    );
};

export default SendButton;
