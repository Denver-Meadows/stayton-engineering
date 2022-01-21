import React from "react";
import "../styles/heroHeader.scss";

const HeroHeader = () => {
  return (
    <div className="hero-header">
      <div className="hero-header-welcome">
        <h2>Welcome to</h2>
        <h1>Stayton Engineering</h1>
      </div>
      <div className="hero-header-about">
        <p>
          We are a full systems integrator offering various services for your
          maufacturing needs. At Stayton Engineering our number one priority is
          the customer. Whether starting from scratch or updating your current
          systems, we get the job done.
        </p>
      </div>
      <div className="hero-header-btn">
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default HeroHeader;
