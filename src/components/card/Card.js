import React from "react";
import "./Card.scss";
import { useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Heading2 from "../heading/Heading2";

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
      <div className={slide ? "content slide-active" : "content slide"}>
        <Heading2 heading="Hello!" />
        <p>
          I started my professional journey down the frontend development rabbit
          hole about 2 and a half years ago. I always strive to always learn
          something new and keep myself up to date with the latest trends and
          technologies, learning from others and surrounding myself with fun and
          creative people. My goal is to always better my code writing skills
          and have fun while doing so. Staying Humble.
        </p>
      </div>
      <div className={slide ? "computer slide slide-active" : "computer slide"}>
        <div className="typed-out">
          <TypeWriterEffect
            startDelay={100}
            text="function app()"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={2000}
            text="  return ("
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={3000}
            text="  <ThemeContext.Provider value={{ theme, toggleTheme }}>"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={9000}
            text="    <div className='App' id={theme}>"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={14000}
            text="  <div className='toggle-btn' onClick={toggleTheme}>"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={21000}
            text="   <Button text='Toggle mode'/>"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={24000}
            text="</div>"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={25000}
            text="<Nav />"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={26000}
            text="<Hero />"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={27000}
            text="<Card />"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            startDelay={28000}
            text=")"
            typeSpeed={100}
            eraseSpeed={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
