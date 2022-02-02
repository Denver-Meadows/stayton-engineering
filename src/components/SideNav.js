import React, { useContext, useRef } from "react";
import "../styles/sideNav.scss";
import { polyfill } from "seamless-scroll-polyfill";
import { AppContext } from "../context";

const SideNav = () => {
  const sideNav = useRef(null);
  const { isSideNavOpen, closeSideNav } = useContext(AppContext);
  polyfill();

  const handleClick = (id) => {
    const section = document.querySelector(`.${id}`);
    const position = section.getBoundingClientRect();
    window.scrollTo({
      left: position.left,
      top: position.top + window.scrollY - 100,
      behavior: "smooth",
    });

    closeSideNav();
  };

  // const handleToggle = () => {
  //   setActive(!isActive);
  // };

  return (
    <aside
      className={`${
        isSideNavOpen ? "side-nav-modal show-side-nav-modal" : "side-nav-modal"
      }`}
      ref={sideNav}
    >
      <div className="side-nav">
        <ul className="side-nav-list">
          <li
            className="side-nav-list-link"
            id="services"
            onClick={(e) => handleClick(e.target.id)}
          >
            Services
          </li>
          <li
            className="side-nav-list-link"
            id="experience"
            onClick={(e) => handleClick(e.target.id)}
          >
            Experience
          </li>
          <li
            className="side-nav-list-link"
            id="industries"
            onClick={(e) => handleClick(e.target.id)}
          >
            Industries
          </li>
          <li
            className="side-nav-list-link"
            id="contact"
            onClick={(e) => handleClick(e.target.id)}
          >
            Contact Us
          </li>
        </ul>
      </div>
      {/* <div
        id="nav-toggle-btn"
        className={isActive ? "open" : ""}
        onClick={() => handleToggle()}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      {/* <div className="nav-toggle-btn">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div> */}
    </aside>
  );
};

export default SideNav;
