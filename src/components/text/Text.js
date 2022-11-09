import React from "react";
import "./Text.scss";

const Text = (props) => {
  return (
    <div className="text-wrapper">
      <p> {props.text} </p>
    </div>
  );
};

export default Text;
