import { mdiFacebook, mdiLinkedin, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import config from "../utils/config";

export const Social: React.FC = () => {
  const { asPath } = useRouter();

  const url = `${config.url}${asPath}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&via=IPOBrief`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

  return (
    <div className="my-6 lg:mt-4 lg:mb-0 relative w-full h-8 flex justify-center border-b-2 border-purple-300 max-w-prose mx-auto">
      <div className="absolute top-1/2 -translate-y-1/2 bg-white px-2 sm:px-6 text-purple-500 font-semibold flex items-center text-xs sm:text-md flex-col sm:flex-row">
        <h3 className="hidden sm:inline-block">CLICK ICON TO SHARE</h3>
        <div className="flex space-x-4 sm:space-x-2 sm:ml-4">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-purple-700 w-8 sm:w-8"
          >
            <Icon path={mdiFacebook} />
          </a>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-purple-700 w-8 sm:w-8"
          >
            <Icon path={mdiTwitter} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-purple-700 w-8 sm:w-8"
          >
            <Icon path={mdiLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};
