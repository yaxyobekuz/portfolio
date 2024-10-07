import React from "react";

const SpinLoader = ({
  iconSize = 24,
  className = "",
  iconColor = "#ffffff",
}) => {
  return (
    <div className={`${className}`}>
      <svg
        fill="none"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 28 28"
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeWidth="1.8"
          stroke={iconColor}
          strokeLinecap="round"
          d="M14 24V24C8.47715 24 4 19.5228 4 14V14C4 8.47715 8.47715 4 14 4V4C19.5228 4 24 8.47715 24 14V14V14.0923"
        />
      </svg>
    </div>
  );
};

export default SpinLoader;
