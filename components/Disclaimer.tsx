import classNames from "classnames";
import React from "react";

interface DisclaimerProps {
  className?: string;
}
export const Disclaimer: React.FC<DisclaimerProps> = ({ className }) => {
  return (
    <p
      className={classNames(
        "text-gray-400 text-xs mt-6 max-w-prose mx-auto lg:mx-0",
        className
      )}
    >
      These values are calculated using the oldest historical opening price
      available and taking into account all splits and dividends history.
      Therefore, the results presented here are not 100% accurate and just a
      close estimation.
    </p>
  );
};
