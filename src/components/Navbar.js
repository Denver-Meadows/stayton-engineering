import React from "react";
import "../styles/nav.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">Stayton Engineering</div>
      <ul className="nav-list">
        <li className="nav-list-link">Services</li>
        <li className="nav-list-link">Experience</li>
        <li className="nav-list-link">Industries</li>
        <li className="nav-list-link">Contact Us</li>
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
