import React from "react";
import { Hero } from "../components/Hero";
import { HomeSmallCard } from "../components/SmallCard";
import { INITIAL_TICKERS } from "../utils/initial-values";

export default function Homepage() {
  const renderPopular = INITIAL_TICKERS.map((t) => (
    <HomeSmallCard label={t.name} result={t.ticker} key={t.ticker} />
  ));

  return (
    <Hero>
      <div className="container z-10 mx-auto">
        <h3 className="title-font sm:text-xl text-lg mb-4 font-medium text-purple-500 text-center">
          Popular picks
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {renderPopular}
        </div>
      </div>
    </Hero>
  );
}
