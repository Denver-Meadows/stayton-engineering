import React, { useContext } from "react";
import "../styles/nav.scss";
import { polyfill } from "seamless-scroll-polyfill";
import { AppContext } from "../context";
import Logo800 from "../imgs/logos/SElogo-800.jpeg";
import Logo500 from "../imgs/logos/SElogo-500.jpeg";
import Logo250 from "../imgs/logos/SElogo-250.jpeg";

const Navbar = () => {
  const { openSideNav, isSideNavOpen, closeSideNav } = useContext(AppContext);
  polyfill();

  const handleClick = (id) => {
    const section = document.querySelector(`.${id}`);
    const position = section.getBoundingClientRect();
    window.scrollTo({
      left: position.left,
      top: position.top + window.scrollY - 100,
      behavior: "smooth",
    });
  };

  const handleToggle = () => {
    if (isSideNavOpen) closeSideNav();
    if (!isSideNavOpen) openSideNav();
  };

  return (
    <nav className="nav">
      <div
        className="nav-logo"
        id="hero"
        onClick={(e) => handleClick(e.target.id)}
      >
        {/* <img src={Logo250} alt="" /> */}
      </div>
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
        id="nav-toggle-btn"
        className={isSideNavOpen ? "open" : ""}
        onClick={() => handleToggle()}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
