import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function Memorycard(props) {
  let formattedDate = props.memoryById
    ? "date"
    : format(new Date(props.date), "EEE dd. LLL yyyy");

  console.log(props.date);
  return (
    <div className="memory-card">
      <div className="img-placeholder"></div>
      <div className="memory-details">
        <h3 className="memory-title">{props.title}</h3>
        <p className="memory-date">
          {props.memoryById ? "date" : formattedDate}
        </p>
        <p
          className={
            props.memoryById ? "memory-description-long" : "memory-description"
          }
        >
          {props.description}
        </p>
        {props.memoryById ? (
          ""
        ) : (
          <Link to={`${props.id}`} className="more-link">
            See more...
          </Link>
        )}
      </div>
    </div>
  );
}

export default Memorycard;
