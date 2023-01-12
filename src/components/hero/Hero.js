import React from "react";
import { useState } from "react";
import "./Hero.scss";
import Heading from "../heading/Heading";
import Text from "../text/Text";

const Hero = () => {
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
    <div className="hero-wrapper">
      <div className="hero-content">
        <Heading
          heading="Welcome to my world"
          style={{ position: "relative", zIndex: 2 }}
        />
        <Text text="tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, " />
      </div>
      <hr className="hero-hr" />
    </div>
  );
};

export default Hero;
