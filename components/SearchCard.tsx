"use client";

import Image from "next/image";
import { ContactMail } from "@mui/icons-material";
import Link from "next/link";

const SearchCard = ({ data, setSearchbar }) => {
    const spanStyle = "font-semibold text-lg truncate";
    return (
        <div className="flex flex-row w-100 gap-5 rounded-2xl border-2 shadow-lg p-5 hover:scale-105 transition-all duration-200 my-2">
            <div>
                <Image
                    src={data[0]?.profilePicture || "/user.png"}
                    alt="profile picture"
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-white shadow"
                />
            </div>
            <hr />
            <div className="flex flex-col gap-2">
                <h3>
                    StaffID: <span className={spanStyle}>{data[0]?.id}</span>
                </h3>
                <h2>
                    Name:{" "}
                    <span className={`${spanStyle} capitalize`}>
                        {data[0]?.lastName + " " + data[0]?.firstName}
                    </span>
                </h2>
                <h3>
                    Email: <span className={spanStyle}>{data[0]?.email}</span>
                </h3>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
                <Link href={`/all-staffs/${data[0]?.id}`}>
                    <button
                        className="flex flex-row items-center font-semibold gap-2 bg-gray2 text-none h-100 p-2 rounded-2xl hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 capitalize transition-all duration-200"
                        onClick={() => setSearchbar(false)}
                    >
                        <ContactMail />
                        view profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SearchCard;
