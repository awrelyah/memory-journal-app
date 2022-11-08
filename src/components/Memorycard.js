import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function Memorycard(props) {
  let formattedDate = format(new Date(props.date), "EEE dd. LLL yyyy");
  return (
    <div className="memory-card">
      <h3 className="memory-title">{props.title}</h3>
      <p className="memory-date">{formattedDate}</p>
      <p className="memory-description">{props.description}</p>
      <Link to={`${props.id}`}>See more...</Link>
    </div>
  );
}

export default Memorycard;
