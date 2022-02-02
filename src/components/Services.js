import React, { useState, useEffect } from "react";
import "../styles/services.scss";
import plc from "../imgs/ruben.jpg";
import eng from "../imgs/eng.jpg";
import comDebug from "../imgs/comDebug.jpg";
import onSite from "../imgs/onSite.jpg";
import panelBuild from "../imgs/panelBuild.jpg";
import hmi from "../imgs/hmi.jpg";
import Flip from "react-reveal/Flip";
import { useParallax } from "react-scroll-parallax";

const Services = () => {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="services">
      <div className="services-header">
        <Flip bottom>
          <h1>Our Services</h1>
        </Flip>
      </div>

      <div className="services-list">
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dfsqn3oi6/image/upload/c_scale,w_1582/v1643154327/staytonEngineering/ruben_ksq30n.jpg)`,
          }}
        >
          <h2>PLC Programming</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dfsqn3oi6/image/upload/v1643067747/staytonEngineering/hmi_efyx9j.jpg)`,
          }}
        >
          <h2>HMI Development</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dfsqn3oi6/image/upload/v1643067738/staytonEngineering/eng_p58jyl.jpg)`,
          }}
        >
          <h2>Engineering Design</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dfsqn3oi6/image/upload/v1643068046/staytonEngineering/panelBuild_pxz5ka.jpg)`,
          }}
        >
          <h2>Panel Builds</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dfsqn3oi6/image/upload/v1643243135/staytonEngineering/comDebug_wxxmk8.jpg)`,
          }}
        >
          <h2>Commissioning & Debugging</h2>
        </div>
        <div
          className={`services-list-item`}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dfsqn3oi6/image/upload/v1643068008/staytonEngineering/onSite_vov5er.jpg)`,
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
