import React from "react";

const SolidArrow = ({
  size = 24,
  className = "",
  fill = "#ffffff",
  strokeWidth = "2",
  direction = "bottom",
}) => {
  const directionStyle = {
    top: "rotate-180",
    bottom: "-rotate-0",
    right: "-rotate-90",
    left: "rotate-90",
  };
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={`${directionStyle[direction]} ${className}`}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M10 12.8125L4.375 7.1875"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M15.625 7.1875L10 12.8125"
      />
    </svg>
  );
};

export default SolidArrow;
