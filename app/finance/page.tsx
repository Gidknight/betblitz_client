import React from "react";
import MainLayout from "../layouts/MainLayout";
import { MakeADeposit, RequestAWithdrawal } from "../components";

const Finance = () => {
  return (
    <MainLayout>
      <section className="wrapper">
        <h1 className="header-text w-full">My Finances</h1>
        <div className="flex flex-col w-full items-start justify-start">
          <h2 id="account_balance">Account Balance: {39093}</h2>
          <h2 id="total_deposit">Total Deposit: {39093}</h2>
          <h2 id="total_earnings">Total Earnings: {39093}</h2>
          <h2 id="total_loss">Total Loss: {39093}</h2>
        </div>

        <MakeADeposit />

        <RequestAWithdrawal />
      </section>
    </MainLayout>
  );
};

export default Finance;
