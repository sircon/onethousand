export interface YahooHistoryResult {
  chart: {
    result: ChartResult[];
  };
}

interface ChartResult {
  meta: any;
  timestamp: number[];
  events: {
    dividends?: {
      [key: string]: {
        amount: number;
        date: number;
      };
    };
    splits?: {
      [key: string]: {
        date: number;
        numerator: number;
        denominator: number;
      };
    };
  };
  indicators: {
    quote: [
      {
        open: number[];
        close: number[];
      }
    ];
    adjclose: [
      {
        adjclose: number[];
      }
    ];
  };
}

export interface YahooProfileResult {
  quoteResponse: {
    result: [
      {
        fullExchangeName: string;
        marketCap: {
          raw: number;
          fmt: string;
          longFmt: string;
        };
        shortName: string;
      }
    ];
  };
}

export interface YahooSearchResult {
  quotes: Quote[];
}

export interface Quote {
  exchange: string;
  symbol: string;
  longname: string;
  shortname: string;
  quoteType: string;
}
