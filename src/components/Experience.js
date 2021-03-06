import React, { useContext } from "react";
import "../styles/experience.scss";
import Fade from "react-reveal/Fade";
import { experienceData } from "../data/experienceData";
import { AppContext } from "../context";

const Experience = () => {
  const { width } = useContext(AppContext);

  return (
    <section className="experience">
      <div className="experience-header">
        <h1>Experience</h1>
      </div>
      <div className="experience-list">
        {experienceData.map((experience, index) => {
          return (
            <div className="img-container" key={index}>
              {width > 996 ? (
                <Fade bottom>
                  <img src={experience.img} alt={experience.alt} />
                </Fade>
              ) : (
                <img src={experience.img} alt={experience.alt} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
