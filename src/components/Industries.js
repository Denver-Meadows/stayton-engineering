import React from "react";
import "../styles/industries.scss";

const Industries = () => {
  return (
    <section className="industries">
      <div className="industries-header">
        <h1>Industries</h1>
      </div>
      <div className="industries-list">
        <div className="industries-list-1">
          <p>Robotics</p>
          <p>Automotive</p>
          <p>Food/Beverage</p>
          <p>Pharmaceutical</p>
        </div>
        <div className="industries-list-2">
          <p>Printing</p>
          <p>Paper Mills</p>
          <p>Palletizers</p>
          <p>Vision/Inspection</p>
        </div>
        <div className="industries-list-3">
          <p>Breweries</p>
          <p>Corrugated</p>
          <p>Conveyor Systems</p>
          <p>Industrial Part Washers</p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
