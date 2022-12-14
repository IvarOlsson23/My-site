import React from "react";
import "./Card.scss";
import { useState } from "react";
import Heading from "../heading/Heading";

const Card = (props) => {
  const [slide, setSlide] = useState(false);

  const textSlide = () => {
    if (window.scrollY >= 100) {
      setSlide(true);
    } else {
      setSlide(false);
    }
  };
  window.addEventListener("scroll", textSlide);
  return (
    <div className="card">
      <div className={slide ? "content slide slide-active" : "content slide"}>
        <Heading heading={props.heading} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor
          incididunt ut labore et doloreut labore et dolore magna aliqua. Ut
          enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, tempor incididunt ut labore et doloreut labore et
          dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit
          amet, consectetur adipiscing elit, tempor incididunt ut labore et
          doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt
          ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim
          veniam
        </p>
      </div>
      <div className={slide ? "image slide slide-active" : "image slide"}>
        <img className="card-image" src={props.imageSource} alt=""></img>
      </div>
    </div>
  );
};

export default Card;
