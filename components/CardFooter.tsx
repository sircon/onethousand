import { mdiClose, mdiCrosshairs } from "@mdi/js";
import Icon from "@mdi/react";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import config from "../utils/config";

interface CardFooterProps {
  ticker?: string;
}
export const CardFooter: React.FC<CardFooterProps> = ({ ticker = "" }) => {
  const formattedToday = format(new Date(), "PP");

  return (
    <>
      <p className="text-white">
        Created by the{" "}
        <a
          href="https://ipobrief.email/?utm_source=onethousand&utm_medium=card&utm_campaign=learn_more"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-bold"
        >
          IPO Brief
        </a>
        .
      </p>
      <div className="absolute inset-0">
        <div className="absolute px-8 md:px-10 -top-3 md:-top-2 flex w-full justify-between z-10 text-indigo-300 text-xs">
          <p>
            {config.url}/{ticker}
          </p>
          <p>{formattedToday}</p>
        </div>
        <div className="absolute -top-4 md:-top-3 right-2 m-0 text-indigo-100 cursor-pointer block z-10">
          <Link href="/">
            <a>
              <Icon path={mdiClose} size="1.4rem" />
            </a>
          </Link>
        </div>
        <div className="absolute top-24 right-8 z-0 transform -translate-y-20 bg-indigo-700 rounded-full h-96 w-96 opacity-20"></div>
        <div className="absolute top-0 z-0 transform scale-x-125 -translate-x-24 -translate-y-20 bg-indigo-700 rounded-full h-96 w-96 opacity-20"></div>
      </div>
    </>
  );
};
