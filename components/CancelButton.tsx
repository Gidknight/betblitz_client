"use client";

import { CancelOutlined } from "@mui/icons-material";

const CancelButton = ({ text, customFunc, type }) => {
    return (
        <button
            className={`flex gap-2 items-center bg-white  text-lg p-2 text-secondary rounded-xl cursor-pointer hover:bg-gray1 hover:text-white hover:shadow-lg  transition-all duration-300 capitalize `}
            onClick={customFunc}
            type={type}
        >
            <CancelOutlined />
            {text}
        </button>
    );
};

export default CancelButton;
