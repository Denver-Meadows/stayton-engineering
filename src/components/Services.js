import React from "react";
import "../styles/services.scss";
import comDebug from "../imgs/ruben.jpg";
import plc from "../imgs/plc.jpeg";
import engDesign from "../imgs/engDesign.jpeg";
import hmi from "../imgs/hmi.jpeg";
import onSite from "../imgs/onSite.jpeg";
import panelBuild from "../imgs/panelBuild.jpeg";

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h1>Our Services</h1>
      </div>
      <div className="services-grid-container">
        <div className="services-grid">
          <div className="services-grid-1">
            <img src={comDebug} alt="" />
            <p>Commissioning and Debugging</p>
          </div>
          <div className="services-grid-2">
            <img src={plc} alt="" />
            <p>PLC Programming</p>
          </div>
          <div className="services-grid-3">
            <img src={engDesign} alt="" />
            <p>Engineering Design</p>
          </div>
          <div className="services-grid-4">
            <img src={panelBuild} alt="" />
            <p>Panel Builds</p>
          </div>
          <div className="services-grid-5">
            <img src={hmi} alt="" />
            <p>HMI Development</p>
          </div>
          <div className="services-grid-6">
            <img src={onSite} alt="" />
            <p>On-Site Startups</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
