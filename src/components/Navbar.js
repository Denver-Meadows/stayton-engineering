import React, { useState } from "react";
import "../styles/nav.scss";
import { polyfill } from "seamless-scroll-polyfill";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  polyfill();

  const handleClick = (id) => {
    const section = document.querySelector(`.${id}`);
    const poisition = section.getBoundingClientRect();
    window.scrollTo({
      left: poisition.left,
      top: poisition.top + window.scrollY - 100,
      behavior: "smooth",
    });
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">Logo</div>
      <ul className="nav-list">
        <li
          className="nav-list-link"
          id="services"
          onClick={(e) => handleClick(e.target.id)}
        >
          Services
        </li>
        <li
          className="nav-list-link"
          id="experience"
          onClick={(e) => handleClick(e.target.id)}
        >
          Experience
        </li>
        <li
          className="nav-list-link"
          id="industries"
          onClick={(e) => handleClick(e.target.id)}
        >
          Industries
        </li>
        <li
          className="nav-list-link"
          id="contact"
          onClick={(e) => handleClick(e.target.id)}
        >
          Contact Us
        </li>
      </ul>
      <div
        id="nav-icon2"
        className={isActive ? "open" : ""}
        onClick={() => handleToggle()}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <div className="nav-toggle-btn">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div> */}
    </nav>
  );
};

export default Navbar;
