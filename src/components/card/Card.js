import React from "react";
import "./Card.scss";
import { useState } from "react";
import Heading from "../heading/Heading";

const Card = (props) => {
  const [slide, setSlide] = useState(false);

  const textSlide = () => {
    if (window.scrollY >= 50) {
      setSlide(true);
    } else {
      setSlide(false);
    }
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", textSlide);
  return (
    <div className="card">
      <div className={slide ? "content slide slide-active" : "content slide"}>
        <Heading heading={props.heading} />
        <p>
          I started my professional journey down the frontend development rabbit
          hole about 2 and a half years ago. I always strive to always learn
          something new and keep myself up to date with the latest trends and
          technologies, learning from others and surrounding myself with fun and
          creative people. My goal is to always better my code writing skills
          and have fun while doing so. Staying Humble.
        </p>
      </div>
      <div className={slide ? "image slide slide-active" : "image slide"}>
        <img className="card-image" src={props.imageSource} alt=""></img>
      </div>
    </div>
  );
};

export default Card;
