import React from "react";
import "./Nav.scss";
import "../../";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Nav = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const navRef = useRef();
  const navOpen = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("nav-toggle");
    navOpen.current.classList.toggle("nav-open");
  };

  return (
    <div className="nav-wrapper">
      <div className={nav ? "nav active" : "nav"} ref={navRef}>
        <div alt="logo" className="logo" href="" />

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <ul className="nav-buttons">
          <a href="#about-me">About me</a>
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </ul>
      </div>
      <button
        className="nav-btn nav-open-btn"
        ref={navOpen}
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Nav;
