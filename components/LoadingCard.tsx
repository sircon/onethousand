import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { CardFooter } from "./CardFooter";
import { Meta } from "./Meta";
import { LoadingSmallCard } from "./SmallCard";

export const LoadingCard: React.FC = () => {
  return (
    <SkeletonTheme
      color="rgba(255,255,255,0.1)"
      highlightColor="rgba(255,255,255,0.1)"
    >
      <Meta />
      <div className="flex items-center justify-center w-full">
        <div className="relative flex flex-col items-center justify-center max-w-prose h-auto space-y-6 overflow-hidden text-left text-white rounded-lg p-8 md:p-10 pt-9 md:pt-11 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 w-full">
          <h2 className="z-10 w-full text-5xl md:text-7xl font-black md:mb-2 text-left text-white whitespace-nowrap">
            <Skeleton width="50%" />
          </h2>
          <div className="z-10 space-y-2 w-full">
            <h2 className="z-10 text-lg md:text-2xl text-indigo-100 w-full block">
              <Skeleton count={3} />
            </h2>
            <p className="z-10 text-lg md:text-2xl text-indigo-100">
              <Skeleton count={3} />
            </p>
          </div>
          <div className="container z-10 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <LoadingSmallCard />
              <LoadingSmallCard />
              <LoadingSmallCard className="col-span-2 md:col-span-1" />
            </div>
          </div>
          <CardFooter />
        </div>
      </div>
    </SkeletonTheme>
  );
};
