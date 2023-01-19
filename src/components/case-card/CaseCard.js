import React from "react";
import "./CaseCard.scss";
import Heading2 from "../heading/Heading2";

const CaseCard = (props) => {
  return (
    <div className="casecard-wrapper">
      <div className="casecard-content">
        <Heading2 className="casecard-heading" heading={props.heading} />
        <p>{props.text}</p>
        <a href={props.repo}>{props.repoText}</a>
      </div>
      <div className="casecard-images">
        <img id="casecard-image-left" src={props.imageSource1} alt=""></img>
        <img id="casecard-image-right" src={props.imageSource2} alt=""></img>
      </div>
    </div>
  );
};

export default CaseCard;
