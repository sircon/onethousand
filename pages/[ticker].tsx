import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";
import { LoadingCard } from "../components/LoadingCard";
import { TickerProfile, TickerResults } from "../interfaces/ticker";
import { fetchTicker, fetchTickerProfile } from "../utils/fetch-ticker";
import { INITIAL_TICKERS } from "../utils/initial-values";

interface TickerPageProps extends TickerResults, TickerProfile {
  ticker: string;
}
const TickerPage: React.FC<TickerPageProps> = (props) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Hero>
        <LoadingCard />
      </Hero>
    );
  }

  return (
    <Hero>
      <Card {...props} />
    </Hero>
  );
};

export default TickerPage;

export const getStaticProps: GetStaticProps<TickerPageProps> = async (
  context
) => {
  const ticker = context.params?.ticker as string;

  try {
    const data = await fetchTicker(ticker);
    const info = await fetchTickerProfile(ticker);

    return {
      props: {
        ticker: ticker.toUpperCase(),
        ...data,
        ...info,
      },
      revalidate: 3600, // 1h in seconds
    };
  } catch (error) {
    console.error({ error: error.response, code: error.code });

    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = INITIAL_TICKERS.map(({ ticker }) => ({ params: { ticker } }));

  return {
    paths,
    fallback: true,
  };
};
