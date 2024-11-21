"use client";

import { PersonOffOutlined, Search } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Image from "next/image";

import SearchCard from "./SearchCard";
import database from "@/dummy/database";
import { ErrorCard } from ".";

const SearchPage = ({ setSearchbar }) => {
    const searchRef = useRef();
    const router = useRouter();
    const [searchWord, setSearchWord] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setSearchWord(event.target.value);
    };
    const handleSearch = (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (searchWord) {
            let staff = database.filter((user) => user?.id === searchWord);
            if (staff.length !== 0) {
                setErrorMessage("");
                setSearchResult(staff);
            } else {
                setSearchResult(null);
                setErrorMessage("Staff Not Found");
            }
        } else {
            setErrorMessage("Invalid Input: Staff Id Must Be A Number");
        }
        setIsLoading(false);
        // console.log(searchResult);
    };

    useEffect(() => {
        searchRef.current.focus();
    }, []);
    return (
        <div className="flex flex-col">
            <div className="m-auto">
                <form
                    onSubmit={handleSearch}
                    className="flex flex-col items-center gap-2 pb-4"
                >
                    <h2 className="font-semibold text-primary">
                        Find a staff member
                    </h2>
                    <fieldset className="flex flex-row gap-2 border-2 rounded-2xl shadow">
                        <input
                            type="text"
                            onChange={handleChange}
                            ref={searchRef}
                            placeholder="Search by Staff-ID"
                            className="text-gray2 py-2 px-4 rounded-2xl focus:border-secondary"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-secondary p-2 text-none rounded-2xl hover:bg-gray2 hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                            <Search /> Search
                        </button>
                    </fieldset>
                </form>
            </div>

            {isLoading && (
                <div className="w-full">
                    <hr />
                    <div className="flex flex-col items-center justify-center p-2">
                        <LoadingSpinner />
                    </div>
                </div>
            )}

            {searchResult && (
                <div className="flex flex-col">
                    <hr />
                    <div className="flex flex-col items-center justify-center p-2">
                        {/* card */}
                        <SearchCard
                            data={searchResult}
                            setSearchbar={setSearchbar}
                        />
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="flex flex-col w-max-[350px] m-auto p-2">
                    {/* <p className="text-[20px] font-bold text-gray2 m-auto capitalize">
                        {errorMessage}
                    </p> */}
                    <ErrorCard errorMessage={errorMessage} />
                </div>
            )}
        </div>
    );
};

export default SearchPage;
