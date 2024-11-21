"use client";

const ProfileButton = ({ icon, text, customFunction }) => {
    return (
        <button
            className={`flex flex-row items-center gap-2 p-2 hover:shadow-xl hover:scale-105 hover:font-semibold transition-all duration-300 ${
                text === "cancel"
                    ? "bg-white text-secondary hover:bg-secondary hover:text-white "
                    : "bg-secondary text-white hover:bg-white hover:text-secondary "
            } rounded-lg capitalize`}
            onClick={customFunction}
        >
            {icon}
            {text}
        </button>
    );
};

export default ProfileButton;
