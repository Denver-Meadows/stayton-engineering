import React from "react";
import "../styles/tagline.scss";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Tagline = () => {
  return (
    <section className="tagline">
      <Fade right cascade>
        <h1>Superior Technology</h1>
      </Fade>
      <Fade left cascade>
        <h1>Exceptional Solutions</h1>
      </Fade>
    </section>
  );
};

export default Tagline;
