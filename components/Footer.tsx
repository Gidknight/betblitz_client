"use client";

import Link from "next/link";
import { useState } from "react";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { PAYMENT_METHODS } from "@/constants";
import Image from "next/image";

const footerLink = (title, to) => {
  return (
    <Link href={to}>
      <span>{title}</span>
    </Link>
  );
};

const FooterDropDown = ({ header, body }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-4">
        <button onClick={() => setShow(!show)}>
          {show ? <MdArrowDropDown /> : <MdArrowRight />}
        </button>
        <h3>{header}</h3>
      </div>
      {show && (
        <div className="flex flex-col w-fit">
          <p className="truncate">{body}</p>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="md:px-20 w-full bg-slate-800 md:p-5 md:py-2 flex flex-col md:flex-col-reverse text-white items-center justify-between">
      <div className="bg-dark md:bg-transparent w-full flex items-center justify-between py-2 px-4">
        <h2 className="text-xl md:text-2xl font-extrabold font-mono">18+</h2>

        <p className="text-white text-xs md:text-base">
          © 2024 All rights reserved by Lustrous Digitals.
        </p>
      </div>

      {/* Payment methods */}
      <div className="p-5 w-100 m-auto">
        <h2 className="text-base font-bold text-center">Payment Methods</h2>
        <div className="w-full flex flex-row items-center justify-center gap-2 md:gap-4">
          {PAYMENT_METHODS.map((method, index) => (
            <Image
              key={index}
              src={method?.imgSrc}
              alt={method?.name}
              width={300}
              height={300}
              className="w-20 h-15 md:w-40 md:h-30 rounded-xl shadow-xl object-cover"
            />
          ))}
        </div>
      </div>

      {/*   */}
      <div className="px-8 md:px-20">
        <p className="text-xs md:text-base text-center">
          Age 18 and above only to register or play at BetBlitz. Play
          Responsibly. Betting is addictive and can be psychologically harmful.
        </p>
        <p className="text-center">Play Responsibly</p>
      </div>

      {/* connect with us */}
      {/* <div>
        <h2 className="text-base font-bold">Connect With Us</h2>
        <p>Telephone: 23495893929</p>
        <p>Email: dev.gideonknight@gmail.com</p>
        <div className="flex flex-row items-center justify-evenly gap-2">
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaInstagram />
          </button>
        </div>
      </div> */}
      <div className="pb-16 md:hidden" />
    </footer>
  );
};

export default Footer;
