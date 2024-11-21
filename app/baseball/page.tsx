import {
  WeekGames,
  QuickRegistration,
  TopLeagues,
  AtoZ,
  TopLeaguesMobile,
  NicheLiveBetting,
  BetSlip,
  BaseballGames,
} from "@/components";
// import { dummyFootballLeagues } from "@/dummy/dummyLeagues";
import MainLayout from "@/app/layouts/MainLayout";
import { football_odds_by_league_id } from "@/api-dummy/football/football-odds-by-league-id.js";
import { working_league } from "@/api-dummy/football/working-league";
import moment from "moment";
import Baseball_LiveGames from "@/components/baseball/Baseball_LiveGames";

const Baseball = async () => {
  const today = moment().format("MM/DD, dddd");

  const betsResponse = await fetch(
    "http://localhost:5000/api/v1/baseball/front/get-today-bets",
    {
      cache: "no-cache",
      // next: { revalidate: 6000 },
    }
  );

  const a_z_res = await fetch(
    "http://localhost:5000/api/v1/baseball/front/get-a-to-z",
    {
      cache: "no-cache",
      // next: { revalidate: 6000 },
    }
  );

  const live_games_res = await fetch(
    "http://localhost:5000/api/v1/baseball/front/get-livegames",
    {
      cache: "no-cache",
      // next: { revalidate: 6000 },
    }
  );

  const todayBaseballGame = await betsResponse.json();
  // console.log(todayBaseballGame.data);
  const a_z_data = await a_z_res.json();
  const live_games = await live_games_res.json();
  return (
    <MainLayout>
      <div className="wrapper-2 ">
        {/* left */}
        <div className="hidden h-full w-2/6 md:flex flex-col items-center justify-start gap-5">
          {/*  */}
          <div
            className="flex flex-col items-start bg-white rounded-lg
    shadow-lg w-full"
          >
            <p className="border-b border-slate-400 px-2 py-3 w-full cursor-pointer">
              Today's Game
            </p>
            <p className="border-b border-slate-400 px-2 py-3 w-full cursor-pointer">
              Upcoming Games
            </p>
            <p className="px-2 py-3 w-full cursor-pointer">Outrights</p>
          </div>
          {/* Top Leagues */}
          {/* <TopLeagues data={["league 1", "league 2"]} /> */}
          <AtoZ data={a_z_data.preparedData} />
        </div>

        {/* middle */}
        <div className="md:pl-5 xl:pl-0 flex flex-col gap-5 w-full  pt-2 md:pt-0">
          {/* header */}
          {/* <div className="bg-dark text-white p-3 flex flex-row items-center justify-between w-100">
            <div className="flex flex-row items-center justify-center gap-2">
              <h2 className="text-2xl">Live Betting</h2>
              <span className="px-1 text-green-400 bg-slate-600 text-sm">
                2
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <h2 className="text-lg">All Live</h2>
              <span className="px-1 text-green-400 bg-slate-600 text-sm">
                100
              </span>
            </div>
          </div> */}
          <Baseball_LiveGames
            data={live_games.data}
            date={today}
            sportType="baseball"
          />

          {/* <TopLeaguesMobile data={dummyFootballLeagues} /> */}

          {/* Matches */}
          {/* {console.log(todayFootballGame.data.length)} */}

          {todayBaseballGame.data &&
            todayBaseballGame?.data.map((league: [], index: number) => (
              <BaseballGames
                data={league}
                date={today}
                key={index}
                sportType="baseball"
              />
            ))}

          {/* <WeekGames /> */}
        </div>
        {/* right */}
        <div className="h-100 w-2/6  hidden sticky top-0 lg:flex flex-col items-center justify-start">
          <BetSlip />
          {/* <QuickRegistration /> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Baseball;
