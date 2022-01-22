import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-details">
        <h3>Questions & Estimates</h3>
        <p className="contact-details-p">
          We would love to hear from you! Please reach out at your convenience
          so we can discuss your project.
        </p>
        <h4>Call Today</h4>
        <a href="tel:5132743840">513-274-3840</a>
        <a href="mailto: greg@staytonengineering.com">
          <button className="contact-details-email">Email</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
