import React from "react";

export const ProductHunt: React.FC = () => {
  return (
    <div className="mt-6 mx-auto lg:mx-0">
      <a
        href="https://www.producthunt.com/posts/one-thousand-in?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-one-thousand-in"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=283660&theme=light"
          alt="One thousand in - How much would you have if you invested $1000 in an IPO? | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
    </div>
  );
};
