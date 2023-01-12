import React from "react";
import "./Text.scss";

const Text = (props) => {
  return (
    <div className="text-wrapper">
      <p className="text-block"> {props.text} </p>
    </div>
  );
};

export default Text;
