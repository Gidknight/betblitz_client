"use client";

import React from "react";

const TransactionTable = ({ data, title }: { data: []; title: string }) => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-slate-600 uppercase">{title}</h2>
      {data.length === 0 ? (
        <h3>No Bet Available</h3>
      ) : (
        <div>Bet Is Available</div>
      )}
    </div>
  );
};

export default TransactionTable;
