"use client";

import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";

const HeaderNavigation = () => {
  const router = useRouter();
  return (
    <div className="w-full py-2 flex flex-row items-between justify-between">
      <button
        className="flex flex-row items-center justify-center text-gray2 hover:text-gray1 hover:font-bold  hover:shadow-sm rounded-[20px] p-2 gap-2 transition-all duration-200"
        onClick={() => router.back()}
      >
        <MdArrowBack /> Back
      </button>
      {/* <button
                className="flex flex-row items-center justify-center hover:text-primary hover:font-bold hover:scale-105 hover:shadow-sm rounded-[20px] p-2 gap-2 transition-all duration:300"
                onClick={() => router.forward()}
            >
                Forward <ArrowForwardIos />
            </button> */}
    </div>
  );
};

export default HeaderNavigation;
