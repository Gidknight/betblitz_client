import {
  MdSportsBaseball,
  MdSportsBasketball,
  MdSportsHandball,
  MdSportsHockey,
  MdSportsMotorsports,
  MdSportsRugby,
  MdSportsSoccer,
  MdSportsVolleyball,
} from "react-icons/md";

export const navLinks = [
  {
    id: 1,
    title: "Sports",
    link: "/sports",
  },
  {
    id: 2,
    title: "Casino",
    link: "/casino",
  },
  {
    id: 3,
    title: "Live Betting",
    link: "/live-betting",
  },
  {
    id: 4,
    title: "Instant Virtuals",
    link: "/instant-virtuals",
  },
  {
    id: 5,
    title: "Scheduled Virtuals",
    link: "/scheduled-virtuals",
  },
  {
    id: 6,
    title: "Jackpot",
    link: "/jackpot",
  },
  {
    id: 7,
    title: "Livescore",
    link: "/livescore",
  },
  {
    id: 8,
    title: "Results",
    link: "/results",
  },
  {
    id: 9,
    title: "Promotions",
    link: "/promotions",
  },
  {
    id: 10,
    title: "App",
    link: "/app-download",
  },
];

export const SPORT_LINKS = [
  {
    id: 1,
    title: "Football",
    link: "/football",
    icon: <MdSportsSoccer />,
  },
  {
    id: 2,
    title: "Baseball",
    link: "/baseball",
    icon: <MdSportsBaseball />,
  },
  {
    id: 3,
    title: "Basketball",
    link: "/basketball",
    icon: <MdSportsBasketball />,
  },
  {
    id: 4,
    title: "Handball",
    link: "/handball",
    icon: <MdSportsHandball />,
  },
  {
    id: 5,
    title: "Hockey",
    link: "/hockey",
    icon: <MdSportsHockey />,
  },
  {
    id: 6,
    title: "Rugby",
    link: "/rugby",
    icon: <MdSportsRugby />,
  },
  {
    id: 7,
    title: "Formula-1",
    link: "/formula-1",
    icon: <MdSportsMotorsports />,
  },
  {
    id: 8,
    title: "Volleyball",
    link: "volleyBall",
    icon: <MdSportsVolleyball />,
  },
  // {
  //   id: 9,
  //   title: "Beach Volley",
  //   link: "beachVolley",
  //   icon: <FaUmbrellaBeach />,
  // },
];

export const MATCH_CHANCES = [
  {
    id: 1,
    title: "3 Way & O/U",
  },
  {
    id: 2,
    title: "Double Chance",
  },
  {
    id: 3,
    title: "GG/NG",
  },
  {
    id: 4,
    title: "Draw No Goal",
  },
  // {
  //   id: 5,
  //   title: "Other Markets",
  // },
];

export const BASEBALL_MATCH_CHANCES = [
  {
    id: 1,
    title: "3 Way",
  },
  {
    id: 2,
    title: "U/O",
  },
];

export const BASKETBALL_MATCH_CHANCES = [
  {
    id: 1,
    title: "3 Way",
  },
  {
    id: 2,
    title: "2 Way",
  },
  {
    id: 3,
    title: "U/O",
  },
  // {
  //   id: 4,
  //   title: "Draw No Bet",
  // },
];

export const popularClicks = [
  {
    id: 1,
    title: "Today's Football",
  },
  {
    id: 2,
    title: "Upcoming Games",
  },
  {
    id: 3,
    title: "England Premier League",
  },
];

export const PAYMENT_METHODS = [
  {
    id: 1,
    name: "master card",
    imgSrc: "/images/payment/mastercard-logo.jpg",
  },
  {
    id: 2,
    name: "visa",
    imgSrc: "/images/payment/visa-logo.jpg",
  },
  {
    id: 3,
    name: "verve",
    imgSrc: "/images/payment/verve-logo.png",
  },
];

export const DEPOSIT_OPTIONS = [
  {
    id: 1,
    type: "card",
    pictures: [
      "/images/payment/mastercard-logo.jpg",
      "/images/payment/verve-logo.png",
      "/images/payment/visa-logo.jpg",
    ],
  },
  { id: 2, type: "bank transfer" },
  { id: 3, type: "direct bank" },
];

export const WITHDRAW_OPTIONS = [
  {
    id: 1,
    type: "bank",
  },
  // { id: 2, type: "partner" },
  // { id: 3, type: "transfer to friend" },
];

export const BET_HISTORY_OPTIONS = [
  {
    id: 1,
    type: "Sport Bets",
    hasSubmenu: true,
    subMenu: ["All", "Settled", "Unsettled"],
  },
  {
    id: 2,
    type: "Jackpot",
    hasSubmenu: false,
    subMenu: [],
  },
];

export const TRANSACTION_OPTIONS = [
  "all categories",
  "deposits",
  "withdrawals",
  "bets",
  "winnings",
];

export const GIFT_OPTIONS = ["Valid", "Used/Expired", "How To Use"];

export const S_AND_S_OPTIONS = ["Change Password", "Deactivate"];

export const monthsArray = [
  {
    id: "1",
    month: "january",
  },
  {
    id: "2",
    month: "february",
  },
  {
    id: "3",
    month: "march",
  },
  {
    id: "4",
    month: "april",
  },
  {
    id: "5",
    month: "may",
  },
  {
    id: "6",
    month: "june",
  },
  {
    id: "7",
    month: "july",
  },
  {
    id: "8",
    month: "august",
  },
  {
    id: "9",
    month: "september",
  },
  {
    id: "10",
    month: "october",
  },
  {
    id: "11",
    month: "november",
  },
  {
    id: "12",
    month: "december",
  },
];

export const heroImages = [
  {
    id: 1,
    imgSrc: "/images/carousel/lebron-james.jpg",
    description: "lebron james",
  },
  {
    id: 2,
    imgSrc: "/images/carousel/team-durant.jpg",
    description: "Team durant",
  },
  {
    id: 3,
    imgSrc: "/images/carousel/team-durant-blue.jpg",
    description: "Durant blue",
  },
];
