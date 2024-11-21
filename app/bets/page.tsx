import React from "react";
import { BetHistory, BetsContainer, Footer, OpenBets } from "@/components";
import MainLayout from "../layouts/MainLayout";

const Bets = () => {
  return (
    <MainLayout>
      <section className="wrapper">
        <BetsContainer />
      </section>
      <Footer />
    </MainLayout>
  );
};

export default Bets;
