import React from "react";
import "../styles/services.scss";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <Fade bottom>
          <h1>Our Services</h1>
        </Fade>
      </div>

      <div className="services-list">
        <div className="services-list-item services-list-item-1">
          <h2>PLC Programming</h2>
        </div>
        <div className="services-list-item services-list-item-2">
          <h2>HMI Development</h2>
        </div>
        <div className="services-list-item services-list-item-3">
          <h2>Engineering Design</h2>
        </div>
        <div className="services-list-item services-list-item-4">
          <h2>Panel Builds</h2>
        </div>
        <div className="services-list-item services-list-item-5">
          <h2>Commissioning & Debugging</h2>
        </div>
        <div className="services-list-item services-list-item-6">
          <h2>On-Site Startups</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
