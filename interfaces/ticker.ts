export interface TickerResults {
  historicalOpen: number;
  lastClose: number;
  openDate: number;
  splitsMultiple: number;
}

export interface TickerProfile {
  tickerName: string;
  marketCap: string;
  exchange: string;
}
