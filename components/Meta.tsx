import { format } from "date-fns";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/dist/client/router";
import React from "react";
import config from "../utils/config";

interface MetaProps {
  ticker?: string;
  company?: string;
}
export const Meta: React.FC<MetaProps> = ({ ticker, company }) => {
  const { asPath, isFallback } = useRouter();

  if (isFallback) {
    return null;
  }

  company = company || (ticker as string);

  const url = `${config.url}${asPath}`;
  const title = `How much is $1000 in ${ticker}'s IPO worth today?`;
  const description = `If you had invested 1000 dollars when ${company} went public you would have today...`;
  const cover = `${config.url}/api/poster/${ticker}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [{ url: cover }],
        }}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        images={[cover]}
        datePublished={format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx")}
        dateModified={format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx")}
        authorName={["IPO Brief"]}
        publisherName="IPO Brief"
        publisherLogo="https://ipobrief.email/images/icon.jpg"
        description={description}
      />
    </>
  );
};
