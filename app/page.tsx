import MainLayout from "@/app/layouts/MainLayout";
import {
  Footer,
  HotToday,
  LiveBetting,
  Highlights,
  Header,
  ClientOnly,
  BetSlip,
} from "@/components";
import { fixtures_by_date } from "@/api-dummy/football/football-fixtures";
import { football_odds_by_league_id } from "@/api-dummy/football/football-odds-by-league-id";

const Home = async () => {
  // const getFixtures = async () => {
  const response = await fetch(
    "http://localhost:5000/api/v1/football/front/get-today-bets",
    {
      // cache: "force-cache",
      next: { revalidate: 60 },
    }
  );
  let todayFootballGame;
  if (response) {
    todayFootballGame = await response.json();
  }
  // console.log(todayFootballGame);
  // const response = fixtures_by_date.response;
  // let fixturesArray = [];

  // for (let i = 0; i < response.length; i++) {
  //   let currentLeagueId = response[i].fixture.id;
  // }
  // };

  // getFixtures();
  return (
    <>
      <MainLayout>
        <main className="wrapper">
          <Header />

          {/* body */}
          <div className="flex flex-row items-center md:items-start justify-start gap-5 w-full">
            {/* primary */}
            <div className="flex flex-col items-center justify-center gap-5 md:gap-2 w-full md:w-4/5">
              {/* Hot Today */}
              <HotToday />

              {/* highlight */}
              <Highlights footballData={todayFootballGame.data} />

              {/* live betting */}
              <LiveBetting />
              {/* <div className="pt-20 md:hidden" /> */}
            </div>

            {/* secondary */}
            <div className="hidden md:block w-1/5">
              <div className="bg-white w-full h-full">
                <BetSlip />
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <div className="pb-5 md:hidden" />
      </MainLayout>
    </>
  );
};

export default Home;
