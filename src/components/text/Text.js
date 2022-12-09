import React from "react";
import "./Text.scss";

const Text = (props) => {
  return (
    <div className="text-wrapper">
      <p className="text-block"> {props.text1} </p>
      <p className="text-block"> {props.text2} </p>
    </div>
  );
};

export default Text;
