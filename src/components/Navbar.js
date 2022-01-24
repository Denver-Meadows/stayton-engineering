import React from "react";
import "../styles/nav.scss";
import { polyfill } from "seamless-scroll-polyfill";

const Navbar = () => {
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
      {/* <div className="nav-toggle-btn">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div> */}
    </nav>
  );
};

export default Navbar;
