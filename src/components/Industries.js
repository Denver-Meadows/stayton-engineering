import React from "react";
import "../styles/industries.scss";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Industries = () => {
  return (
    <section className="industries">
      <div className="industries-header">
        <Flip bottom>
          <h1>Industries</h1>
        </Flip>
      </div>
      <div className="industries-list">
        <div className="industries-list-1">
          <Fade left>
            <p>Robotics</p>
            <p>Automotive</p>
          </Fade>
          <Fade right>
            <p>Food/Beverage</p>
            <p>Pharmaceutical</p>
          </Fade>
        </div>
        <div className="industries-list-2">
          <Fade left>
            <p>Printing</p>
            <p>Paper Mills</p>
          </Fade>
          <Fade right>
            <p>Palletizers</p>
            <p>Vision/Inspection</p>
          </Fade>
        </div>
        <div className="industries-list-3">
          <Fade left>
            <p>Breweries</p>
            <p>Corrugated</p>
          </Fade>
          <Fade right>
            <p>Conveyor Systems</p>
            <p>Industrial Part Washers</p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Industries;
