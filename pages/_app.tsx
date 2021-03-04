import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import { ProductHunt } from "../components/ProductHunt";
import SEO from "../next-seo.config";
import "../styles/index.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function onethousandApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Banner />
      <Component {...pageProps} />
      <Newsletter />
      <ProductHunt className="block lg:hidden my-2" />
      <Footer />
    </>
  );
}

export default onethousandApp;
