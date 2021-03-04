import React from "react";

interface ProductHuntProps {
  className?: string;
}
export const ProductHunt: React.FC<ProductHuntProps> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href="https://www.producthunt.com/posts/one-thousand-in?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-one-thousand-in"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=283660&theme=light&period=daily"
          alt="One thousand in - How much would you have if you invested $1000 in an IPO? | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          className="mx-auto"
          width="250"
          height="54"
        />
      </a>
    </div>
  );
};
