import React from "react";
import "../styles/experience.scss";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { experienceData } from "../data/experienceData";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-header">
        <Flip bottom>
          <h1>Experience</h1>
        </Flip>
      </div>
      <div className="experience-list">
        {experienceData.map((experience, index) => {
          return (
            <div className="img-container" key={index}>
              <Fade bottom>
                <img src={experience.img} alt={experience.alt} />
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
