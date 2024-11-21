"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/user";
import ClientOnly from "@/components/ClientOnly";
import { useGeneralStore } from "@/stores/general";
import { SPORT_LINKS } from "@/constants";
import { motion, useCycle } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

interface MobileNavType {
  text: string;
  link: string;
  icon: any;
  isActive: boolean;
}

const NavItem = ({ text, link, icon, isActive }: MobileNavType) => {
  const activeStyle =
    "h-full w-full flex flex-col items-center justify-center text-primary bg-white p-2 font-bold";
  const normalStyle =
    "h-full w-full flex flex-col items-center justify-center text-white p-2";

  return (
    <Link href={link} className={isActive ? activeStyle : normalStyle}>
      {/* <button className="flex flex-col items-center justify-center text-white p-2 font-semibold"> */}
      <span className="text-[28px]"> {icon}</span>
      <span className="text-sm capitalize">{text}</span>
      {/* </button> */}
    </Link>
  );
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileTopBar() {
  const [toggle, setToggle] = useState(false);

  const activeStyle =
    " flex flex-row gap-2 items-center justify-start text-xl font-bold p-4 bg-white text-primary w-full rounded-xl";
  const normalStyle =
    " flex flex-row gap-2 items-center justify-start text-xl p-4 w-full bg-primaryHover";
  const contextUser = useUser();
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="md:hidden bg-primary fixed w-screen shadow-lg z-20">
      <div className="flex flex-row items-center justify-between h-20 text-white w-full px-10">
        <h2 className="font-bold text-xl uppercase font-poppins">BetBlitz</h2>
        {!toggle ? (
          <div className="flex items-center justify-center gap-2">
            <button className="flex flex-col-reverse items-center justify-center text-xs gap-0">
              Bets
              <span className="bg-white text-primary px-1 rounded-sm">
                {"0"}
              </span>
            </button>
            <button className="font-bold" onClick={() => setToggle(true)}>
              <BiMenu size="30" />
            </button>
          </div>
        ) : (
          // <div className="absolute inset-0 top-0 bg-black z-30">
          <div className="absolute right-0 top-0 w-3/4 bg-primary z-30 drop-shadow-xl">
            <div className="flex flex-row items-center justify-between px-10 pt-10 ">
              <p>
                Signed In As: <span className="header-text">{"username"}</span>
              </p>
              <button onClick={() => setToggle(false)}>
                <MdClose size="30" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 p-2 ">
              {SPORT_LINKS.map((sport, index) => (
                <Link
                  key={index}
                  href={sport.link}
                  className={
                    pathname.includes(sport?.link) ? activeStyle : normalStyle
                  }
                >
                  <span className="text-xl">{sport?.icon}</span>
                  {sport?.title}
                </Link>
              ))}
            </div>
          </div>
          // </div>
        )}
      </div>
    </div>

    // <motion.nav
    //   initial={false}
    //   animate={isOpen ? "open" : "closed"}
    //   custom={height}
    //   className={`fixed z-20 w-screen top-0 shadow-lg md:hidden ${
    //     isOpen ? "" : "pointer-events-none"
    //   }`}
    //   ref={containerRef}
    // >
    //   <motion.div
    //     className="absolute inset-0 right-0 w-full bg-white"
    //     variants={sidebar}
    //   />
    //   <motion.ul
    //     variants={variants}
    //     className="absolute grid w-full gap-3 px-10 py-16"
    //   >
    //     {sportsLinks.map((item, index) => {
    //       const isLastItem = index === sportsLinks.length - 1; // Check if it's the last item

    //       return (
    //         <div key={index}>
    //           <MenuItem>
    //             <Link
    //               href={item.link}
    //               onClick={() => toggleOpen()}
    //               className={`flex w-full text-2xl ${
    //                 item.link === pathname ? "font-bold" : ""
    //               }`}
    //             >
    //               {item.title}
    //             </Link>
    //           </MenuItem>

    //           {!isLastItem && (
    //             <MenuItem className="my-3 h-px w-full bg-gray-300" />
    //           )}
    //         </div>
    //       );
    //     })}
    //   </motion.ul>
    //   <MenuToggle toggle={toggleOpen} />
    // </motion.nav>
  );
}

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[14px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
