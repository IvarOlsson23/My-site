import React from "react";
import "./CaseCardVariant.scss";
import Heading from "../heading/Heading";
import Text from "../text/Text";

const CaseCardVariant = (props) => {
  return (
    <div className="casecard-variant">
      <div className="casecard-variant-images">
        <img
          id="casecard-variant-image-left"
          src={props.imageSource}
          alt=""
        ></img>
        <img
          id="casecard-variant-image-right"
          src={props.imageSource}
          alt=""
        ></img>
      </div>
      <div className="casecard-variant-content">
        <Heading className="casecard-variant-heading" heading={props.heading} />
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam" />
      </div>
    </div>
  );
};

export default CaseCardVariant;
