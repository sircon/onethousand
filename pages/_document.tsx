import Document, { Html, Head, Main, NextScript } from "next/document";
import config from "../utils/config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* From https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.googleAnalytics}', {
              page_path: window.location.pathname,
            });`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${config.hotjar},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
