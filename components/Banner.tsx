import React from "react";

export const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 via-green-500 to-green-600">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-green-700">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Never miss an IPO again!</span>
              <span className="hidden md:inline">
                Never miss an IPO again and invest in companies from the start.
              </span>
            </p>
          </div>
          <div className="order-2 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://ipobrief.email/?utm_source=onethousand&utm_medium=banner&utm_campaign=learn_more"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
