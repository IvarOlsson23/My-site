import React from "react";
import "./Card.scss";
import Heading from "../heading/Heading";
import Text from "../text/Text";

const Card = (props) => {
  return (
    <div className="card">
      <div className="content">
        <Heading className="card-heading" heading={props.heading} />
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam" />
      </div>
      <div className="image">
        <img className="card-image" src={props.imageSource} alt=""></img>
      </div>
    </div>
  );
};

export default Card;
