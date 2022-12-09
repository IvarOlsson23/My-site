import React from "react";
import "./Nav.scss";
import "../../";
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
        <span className="logo">Logo</span>
        <ul className="nav-buttons">
          <a href="#about-me">Item 1</a>
          <li>Item 2</li>
          <li>Item 3</li>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
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
