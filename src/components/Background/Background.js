import React, { useState, useEffect, useRef } from "react";
import "./Background.scss";

const Background = () => {
  const bgRef = useRef(null);
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 500;
    bgRef.current.style.backgroundPositionY = `-${ScrollPercent}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="background">
      <div className="animation_layer parallax" id="bg1" ref={bgRef} />
    </div>
  );
};

export default Background;
