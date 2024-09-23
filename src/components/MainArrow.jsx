import React from "react";

const MainArrow = ({
  size = 24,
  className = "",
  fill = "#ffffff",
  strokeWidth = "2",
  direction = "bottom",
}) => {
  const directionStyle = {
    top: "rotate-0",
    bottom: "rotate-180",
    right: "rotate-90",
    left: "-rotate-90",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`${directionStyle[direction]} ${className}`}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12 5V19M12 5L6 11M12 5L18 11"
      />
    </svg>
  );
};

export default MainArrow;
