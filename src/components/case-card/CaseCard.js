import React from "react";
import "./CaseCard.scss";
import Heading from "../heading/Heading";
import Text from "../text/Text";

const CaseCard = (props) => {
  return (
    <div className="casecard">
      <div className="casecard-content">
        <Heading className="casecard-heading" heading={props.heading} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor
          incididunt ut labore et doloreut labore et dolore magna aliqua. Ut
          enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, tempor incididunt ut labore et doloreut labore et
          dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, tempor incididunt ut labore et
          doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem
          ipsum dolor"
        </p>
      </div>
      <div className="casecard-images">
        <img id="casecard-image-left" src={props.imageSource} alt=""></img>
        <img id="casecard-image-right" src={props.imageSource} alt=""></img>
      </div>
    </div>
  );
};

export default CaseCard;
