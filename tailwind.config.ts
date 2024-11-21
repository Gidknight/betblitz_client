import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: "#E4E4E4",
        // primary: "#f29d15",
        primary: "#D60707",
        secondary: "#3554D1",
        tertiary: "#CECDCD",
        live: "#05AC26",
        liveHover: "#36D856",
        dark: "#141223",
        send: "#0F996D",
        gray1: "#7D7F81",
        gray2: "#2F2F2F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for collapsed sidebar layout
      },
    },
    // screens: {
    //     xs: "480px",
    //     ss: "620px",
    //     sm: "768px",
    //     md: "1060px",
    //     lg: "1200px",
    //     xl: "1700px",
    // },
  },
  plugins: [],
};
export default config;
