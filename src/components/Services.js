import React from "react";
import "../styles/services.scss";
import plc from "../imgs/ruben.jpg";
import eng from "../imgs/eng.jpg";
import comDebug from "../imgs/comDebug.jpg";
import onSite from "../imgs/onSite.jpg";
import panelBuild from "../imgs/panelBuild.jpg";
import hmi from "../imgs/hmi.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h1>Our Services</h1>
      </div>
      <div className="services-list">
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(${plc})`,
          }}
        >
          <h2>PLC Programming</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(${hmi})`,
          }}
        >
          <h2>HMI Development</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(${eng})`,
          }}
        >
          <h2>Engineering Design</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(${panelBuild})`,
          }}
        >
          <h2>Panel Builds</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(${comDebug})`,
          }}
        >
          <h2>Commissioning & Debugging</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(${onSite})`,
          }}
        >
          <h2>On-Site Startups</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;

// old grid
{
  /* <div className="services-grid-container">
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
      </div> */
}
