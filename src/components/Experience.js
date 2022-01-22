import React from "react";
import "../styles/experience.scss";
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
        <div className="experience-list-1">
          <img src={ge} alt="GE Logo" />
          <img src={bosch} alt="GE Logo" />
          <img src={proface} alt="GE Logo" />
          <img src={redlion} alt="GE Logo" />
        </div>
        <div className="experience-list-2">
          <img src={allen} alt="GE Logo" />
          <img src={mitsubishi} alt="GE Logo" />
          <img src={wonderware} alt="GE Logo" />
          <img src={siemens} alt="GE Logo" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
