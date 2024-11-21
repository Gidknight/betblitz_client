"use client";

import React, { useEffect, useRef } from "react";

const TextInputWithRef = ({
    type,
    placeholder,
    customFunc,
    label,
    subLabel,
    id,
    value,
}) => {
    const textRef = useRef();
    useEffect(() => {
        textRef.current.focus();
    }, []);
    return (
        <fieldset className="flex flex-col gap-1">
            <label
                htmlFor={id}
                className="capitalize text-lg text-slate-800 font-semibold"
            >
                {label}{" "}
                <span className="text-sm italic font-thin">{subLabel}</span>
            </label>
            <input
                ref={textRef}
                value={value}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={customFunc}
                autoComplete="false"
                autoCorrect="false"
                autoCapitalize="true"
                required
                className="border-2 rounded-[12px] p-2 w-80 placeholder:capitalize"
            />
        </fieldset>
    );
};

export default TextInputWithRef;
