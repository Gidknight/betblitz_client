"use client";

import Link from "next/link";
import { useState } from "react";
import Login from "./auth/Login";

const LoginBTN = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Link
        href={"/login"}
        className="w-full md:w-fit text-center p-2 font-bold border-live text-live border-2 hover:bg-live hover:text-white hover:shadow-md transition-all duration-200"
      >
        Login
      </Link>
      {/* <button
        className="w-full md:w-fit text-center p-2 font-bold border-live text-live border-2 hover:bg-live hover:text-white hover:shadow-md transition-all duration-200"
        onClick={() => setIsLogin(true)}
      >
        Login
      </button> */}

      {/* {isLogin && (
        <div className="inset-0">
          <Login />
        </div>
      )} */}
    </div>
  );
};

export default LoginBTN;
