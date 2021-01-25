import axios from "axios";
import { TickerResults, TickerProfile } from "../interfaces/ticker";
import {
  YahooHistoryResult,
  YahooProfileResult,
} from "../interfaces/yahoo-finance";

export const fetchTicker = async (ticker: string): Promise<TickerResults> => {
  const { data } = await axios.get<YahooHistoryResult>(
    `https://query2.finance.yahoo.com/v8/finance/chart/${ticker}?formatted=true&crumb=ZBpLWWzBYL9&lang=en-US&region=US&includeAdjustedClose=true&interval=1d&period1=-952374400&period2=2610841600&events=div%7Csplit&useYfid=true`
  );

  const result = data.chart.result?.[0];

  const splitEvents = result.events?.splits ?? {};

  const splitsMultiple = Object.values(splitEvents).reduce((prev, split) => {
    return prev * (split.numerator / split.denominator);
  }, 1);

  const historicalOpen =
    result.indicators.quote[0].open[0] ||
    result.indicators.adjclose[0].adjclose[0];

  const closeQuotes = result.indicators.quote[0].close;
  const lastClose = closeQuotes[closeQuotes.length - 1];
  const openDate = result.timestamp[0] * 1000;

  return {
    historicalOpen,
    lastClose,
    openDate,
    splitsMultiple,
  };
};

export const fetchTickerProfile = async (
  ticker: string
): Promise<TickerProfile> => {
  const { data } = await axios.get<YahooProfileResult>(
    `https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&crumb=ZBpLWWzBYL9&lang=en-US&region=US&symbols=${ticker}&fields=shortName%2CmarketCap%2CunderlyingExchangeSymbol`
  );

  const result = data.quoteResponse?.result?.[0];

  return {
    tickerName: result.shortName,
    marketCap: result.marketCap.fmt,
    exchange: result.fullExchangeName,
  };
};
