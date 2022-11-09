import React from "react";
import "./Heading.scss";

const Heading = (props) => {
  return (
    <div className="heading">
      <span> {props.heading} </span>
    </div>
  );
};

export default Heading;
