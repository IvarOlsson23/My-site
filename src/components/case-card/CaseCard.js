import React from "react";
import "./CaseCard.scss";
import Heading from "../heading/Heading";
import Text from "../text/Text";

const CaseCard = (props) => {
  return (
    <div className="casecard-wrapper">
      <div className="casecard-content">
        <Heading className="casecard-heading" heading={props.heading} />
        <p>{props.text}</p>
      </div>
      <div className="casecard-images">
        <img id="casecard-image-left" src={props.imageSource1} alt=""></img>
        <img id="casecard-image-right" src={props.imageSource2} alt=""></img>
      </div>
    </div>
  );
};

export default CaseCard;
