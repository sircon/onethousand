import {
  mdiCashMultiple,
  mdiGithub,
  mdiLinkedin,
  mdiTwitter,
  mdiWeb,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <Icon path={mdiCashMultiple} size="1.2rem" color="white" />
          </span>
          <span className="ml-3 text-xl">onethousand.in</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 IPO Brief —
          <a
            href="https://twitter.com/ipobrief"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @IPOBrief
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-500"
            href="https://twitter.com/sircon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon path={mdiTwitter} size="1.2rem" />
          </a>

          <a
            className="ml-3 text-gray-500"
            href="https://github.com/sircon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon path={mdiGithub} size="1.2rem" />
          </a>

          <a
            className="ml-3 text-gray-500"
            href="https://linkedin.com/in/miguelncorreia"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon path={mdiLinkedin} size="1.2rem" />
          </a>

          <a
            className="ml-3 text-gray-500"
            href="https://www.miguelncorreia.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon path={mdiWeb} size="1.2rem" />
          </a>
        </span>
      </div>
    </footer>
  );
};
