import { format } from "date-fns";
import React from "react";
import { TickerProfile, TickerResults } from "../interfaces/ticker";
import { formatValue } from "../utils/numbers";
import { CardFooter } from "./CardFooter";
import { Meta } from "./Meta";
import { SmallCard } from "./SmallCard";

interface CardProps extends TickerResults, TickerProfile {
  ticker: string;
}
export const Card: React.FC<CardProps> = ({
  ticker,
  tickerName,
  openDate,
  historicalOpen,
  splitsMultiple,
  lastClose,
}) => {
  const formattedDate = format(new Date(openDate), "PP");
  const formattedToday = format(new Date(), "PP");
  const year = format(new Date(openDate), "Y");

  const shares = 1000 / historicalOpen;
  const formattedShares = formatValue(shares, "0,0");
  const initialShares = shares / splitsMultiple;
  const formattedInitialShares = formatValue(initialShares, "0");

  const total = shares * lastClose;
  const formattedTotal = formatValue(total, "0,0");
  const percentage = ((total - 1000) / 1000) * 100;
  const formattedPercentage = formatValue(percentage, "0,0");

  const formattedTickerName = `${tickerName}.`.replace("..", ".");

  return (
    <>
      <Meta ticker={ticker} company={formattedTickerName} />

      <div className="flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center max-w-prose h-auto space-y-6 overflow-hidden text-left text-white rounded-lg p-8 md:p-10 pt-9 md:pt-11 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
          <h2 className="z-10 w-full text-4xl sm:text-5xl md:text-7xl font-black -mb-4 text-left text-white whitespace-nowrap">
            ${formattedTotal}
          </h2>
          <div className="z-10 space-y-2">
            <h2 className="z-10 text-lg md:text-2xl text-indigo-100">
              is what you would have made if you had invested{" "}
              <strong className="text-white whitespace-nowrap">$1 000</strong>{" "}
              in <strong className="text-white">{formattedTickerName}</strong>{" "}
              stocks back in{" "}
              <strong className="text-white">{formattedDate}</strong>.
            </h2>
            <SharesText
              year={year}
              formattedInitialShares={formattedInitialShares}
              formattedShares={formattedShares}
              formattedTickerName={formattedTickerName}
            />
          </div>
          <div className="container z-10 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <SmallCard result="$1 000" label={formattedDate} />
              <SmallCard result={`$${formattedTotal}`} label={formattedToday} />
              <SmallCard
                result={`${formattedPercentage}%`}
                label="Gains"
                className="col-span-2 md:col-span-1"
              />
            </div>
          </div>
          <CardFooter ticker={ticker} />
        </div>
      </div>
    </>
  );
};

interface SharesTextProps {
  year: string;
  formattedInitialShares: string;
  formattedShares: string;
  formattedTickerName: string;
}
const SharesText: React.FC<SharesTextProps> = ({
  year,
  formattedInitialShares,
  formattedShares,
  formattedTickerName,
}) => {
  if (formattedShares === formattedInitialShares) {
    return (
      <p className="z-10 text-lg md:text-2xl text-indigo-100">
        You would have today{" "}
        <strong className="text-white">{formattedShares}</strong> shares from{" "}
        <strong className="text-white">{formattedTickerName}</strong>
      </p>
    );
  }

  return (
    <p className="z-10 text-lg md:text-2xl text-indigo-100">
      You would have bought around{" "}
      <strong className="text-white">{formattedInitialShares}</strong> shares in{" "}
      <strong className="text-white">{year}</strong> and today you would own{" "}
      <strong className="text-white">{formattedShares}</strong> shares from{" "}
      <strong className="text-white">{formattedTickerName}</strong>
    </p>
  );
};
