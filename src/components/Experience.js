import React from "react";
import "../styles/experience.scss";
import Fade from "react-reveal/Fade";

import allen from "../imgs/logos/allen-bradley.jpeg";
import bosch from "../imgs/logos/bosch.png";
import ge from "../imgs/logos/ge.png";
import mitsubishi from "../imgs/logos/mitsubishi.png";
import proface from "../imgs/logos/proface.png";
import redlion from "../imgs/logos/redlion.png";
import siemens from "../imgs/logos/siemens.png";
import wonderware from "../imgs/logos/wonderware.png";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-header">
        <h1>Experience</h1>
      </div>
      <div className="experience-list">
        <div className="img-container">
          <Fade bottom>
            <img src={ge} alt="GE Logo" />
          </Fade>
        </div>
        <div className="img-container">
          <Fade bottom>
            <img src={bosch} alt="Bosch Logo" />
          </Fade>
        </div>
        <div className="img-container">
          <img src={proface} alt="Proface Logo" />
        </div>
        <div className="img-container">
          <img src={redlion} alt="RedLion Logo" />
        </div>
        <div className="img-container">
          <img src={allen} alt="Allen Logo" />
        </div>
        <div className="img-container">
          <img src={mitsubishi} alt="Mitsubishi Logo" />
        </div>
        <div className="img-container">
          <img src={wonderware} alt="Wonderware Logo" />
        </div>
        <div className="img-container">
          <img src={siemens} alt="Siemens Logo" />
        </div>

        {/* <div className="experience-list-2">
          <img src={allen} alt="Allen Logo" />
          <img src={mitsubishi} alt="Mitsubishi Logo" />
          <img src={wonderware} alt="Wonderware Logo" />
          <img src={siemens} alt="Siemens Logo" />
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
