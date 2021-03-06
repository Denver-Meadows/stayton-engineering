import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-details">
          <p className="footer-logo"></p>
          <p>3382 Garden Meadows Drive</p>
          <p className="footer-details-address">Greendale, IN 47025</p>
          <p className="footer-details-phone">
            Phone: <a href="tel:5132743840">513-274-3840</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto: greg@staytonengineering.com">
              greg@staytonengineering.com
            </a>
          </p>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-copyright">
            &copy; COPYRIGHT 2022 STAYTON ENGINEERING - ALL RIGHTS RESERVED
          </p>
          <p className="footer-bottom-creator">
            CREATED BY{" "}
            <a href="https://denvermeadows.co" target="_blank" rel="noreferrer">
              DENVER MEADOWS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
