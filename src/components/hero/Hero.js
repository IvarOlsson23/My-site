import React from "react";
import { useState } from "react";
import "./Hero.scss";
import Heading from "../heading/Heading";
import Text from "../text/Text";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <div className="hero-heading">
          <Heading heading="Frontend development" />
          <Heading heading="By Ivar Olsson" />
        </div>
        <div className="hero-text">
          <Text text="With a passion for creativity and technical solutions. I just wanna make cool and functional stuff on the web" />
        </div>
      </div>
      <hr className="hero-hr" />
    </div>
  );
};

export default Hero;
