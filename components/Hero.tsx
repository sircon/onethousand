import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { Disclaimer } from "./Disclaimer";
import { SearchInput } from "./SearchInput";
import { Social } from "./Social";

export const Hero: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 p-4 md:py-12 lg:py-24">
      <div className="flex flex-col items-start">
        <p className="text-gradient text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-4xl sm:text-6xl xl:text-7xl mb-6 block w-full">
          <Link href="/">
            <a>onethousand.in</a>
          </Link>
        </p>
        <HeroTitle />
        <SearchInput />
        <Disclaimer className="hidden lg:block" />
      </div>
      <div>
        {children}
        <Social />
        <Disclaimer className="block lg:hidden text-center mt-12" />
      </div>
    </div>
  );
};

const HeroTitle: React.FC = () => {
  const {
    query: { ticker },
  } = useRouter();

  if (!ticker) {
    return (
      <h1 className="title-font text-3xl sm:text-4xl text-center lg:text-left mb-4 font-medium text-purple-500">
        How much would I have today if I invested{" "}
        <strong className="text-purple-700 whitespace-nowrap">$1 000</strong> in
        a IPO?
      </h1>
    );
  }

  return (
    <h1 className="title-font text-3xl sm:text-4xl text-center lg:text-left mb-4 font-medium text-purple-500">
      How much would I have today if I invested{" "}
      <strong className="text-purple-700 whitespace-nowrap">$1 000</strong> in{" "}
      <strong className="text-purple-700">
        {(ticker as string).toUpperCase()}
      </strong>
      's IPO?
    </h1>
  );
};
