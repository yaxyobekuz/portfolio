import React from "react";

const Icon = ({ src, size = 24, alt = "icon", className = "size-6" }) => {
  return (
    <img width={size} height={size} src={src} alt={alt} className={className} />
  );
};

export default Icon;
