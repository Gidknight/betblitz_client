"use client";

import { popularClicks } from "@/constants";

import HeroCarousel from "./HeroCarousel";

const Header = () => {
  const active = "";

  return (
    <div className="md:px-20 w-full md:flex flex-col md:flex-row gap-2 items-start justify-between">
      {/* popular */}
      <div className="hidden md:block">
        <h2 className="text-lg font-semibold">Popular</h2>
        <ul className="">
          {popularClicks.map((item, index) => (
            <li
              key={index}
              className="flex flex-row items-start justify-between border-t border-slate-600 py-2 cursor-pointer hover:border-t-0 hover:border-b-2 hover:border-b-green-600 hover:text-green-600"
            >
              {item.title}
              <span>{">"}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* carousal */}
      <HeroCarousel />
    </div>
  );
};

export default Header;
