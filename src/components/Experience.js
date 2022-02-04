import React, { useContext } from "react";
import "../styles/experience.scss";
import Fade from "react-reveal/Fade";
import { experienceData } from "../data/experienceData";
import { AppContext } from "../context";

const Experience = () => {
  const { width } = useContext(AppContext);

  console.log(width < 996);

  return (
    <section className="experience">
      <div className="experience-header">
        <Fade bottom>
          <h1>Experience</h1>
        </Fade>
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
