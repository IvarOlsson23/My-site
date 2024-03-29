import "./ScrollIndicator.scss";
import React, { useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div className="scroll-wrapper">
      <div className="progress" style={{ height: `${scroll}%` }}>
        <div className="scroll-number">{Math.floor(scroll)}</div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
