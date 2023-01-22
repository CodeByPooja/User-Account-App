import React from "react";

const LineItem = ({ label = "", value = "" }) => {
  return (
    <li className="flex items-center pb-2">
      <div className="text-xs w-20 text-right text-light-muted">{label}</div>
      <label className="px-1">:</label>
      <p className="text-xs opacity-95 text-dark-muted w-20 whitespace-normal break-words leading-4">{value}</p>
    </li>
  );
};

export default LineItem;
