import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

interface SmallCardProps {
  label: string;
  result: string;
  className?: string;
}
export const SmallCard: React.FC<SmallCardProps> = ({
  label,
  result,
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex-1 border-2 border-gray-200 px-1 py-3 md:py-6 rounded-lg text-center",
        className
      )}
    >
      <h3 className="title-font font-bold text-xl md:text-2xl text-white">
        {result}
      </h3>
      <h4 className="leading-relaxed text-xs">{label}</h4>
    </div>
  );
};

export const HomeSmallCard: React.FC<SmallCardProps> = ({ label, result }) => {
  return (
    <Link href={`/${result}`}>
      <a>
        <SmallCard
          label={label}
          result={result}
          className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white cursor-pointer"
        />
      </a>
    </Link>
  );
};

interface LoadingSmallCardProps {
  className?: string;
}
export const LoadingSmallCard: React.FC<LoadingSmallCardProps> = ({
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex-1 border-2 border-gray-200 px-1 py-3 md:py-6 rounded-lg text-center",
        className
      )}
    >
      <h3 className="title-font font-bold text-xl md:text-2xl text-white">
        <Skeleton />
      </h3>
      <h4 className="leading-relaxed text-xs">
        <Skeleton />
      </h4>
    </div>
  );
};
