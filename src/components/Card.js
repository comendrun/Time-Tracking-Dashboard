import React from "react";
import threeDots from "../images/icon-ellipsis.svg";

export default function Card({
  category,
  hours,
  lastWeekHours,
  cardStyle,
  headerStyle,
}) {
  return (
    <div className="card" style={cardStyle}>
      <div className="card-header" style={headerStyle}></div>
      <div className="body">
        <div className="flex-col category-placeholder">
          <h2>{category}</h2>
          <img alt="" src={threeDots} className="more" />
        </div>
        <div className="flex-col hours-placeholder">
          <h1>{hours}hrs</h1>
          <p>Last Week - {lastWeekHours}hrs</p>
        </div>
      </div>
    </div>
  );
}
