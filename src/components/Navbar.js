import React from "react";
import { Row, Col } from "react-materialize";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div>
      <div className="first-nav-shell">
        <div className="second-nav-shell">
          <div className="third-nav-shell">
            <div className="inner-nav-shell valign-wrapper">
              <Row className="nav-row valign-wrapper">
                <Col s={5} className="nav-item">
                  <p>About</p>
                  <p>Beers</p>
                  <p>Retail Locations</p>
                </Col>
                <Col s={2} className="logo-container valign-wrapper">
                  <img className="logo-img" alt="brand-logo" />
                </Col>
                <Col s={5} className="nav-item">
                  <p>Merchandise</p>
                  <p>Events</p>
                  <p>Contact Us</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Row className="mailing-list-row">
        <div className="mailing-list-container">
          <p>Join Our Mailing List for News and Updates</p>
        </div>
      </Row>
    </div>
  );
};

export default Nav;
