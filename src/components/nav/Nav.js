import React from "react";
import "./Nav.scss";
import "../../";
import Button from "../button/Button";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const navRef = useRef();
  const navOpen = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("nav-toggle");
    navOpen.current.classList.toggle("nav-open");
  };
  return (
    <div className="nav-wrapper">
      <div className="nav" ref={navRef}>
        <div alt="logo" className="logo" />

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <ul className="nav-buttons">
          <a href="#about-me">About me</a>
          <a href="#about-me">Portfolio</a>
          <a href="#about-me">Contact</a>
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
