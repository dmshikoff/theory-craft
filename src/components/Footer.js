import React from "react";
import { Row, Col } from "react-materialize";
import "../styles/footer.css";

const Foot = () => {
  return (
    <div className="first-footer-shell">
      <div className="second-footer-shell">
        <div className="third-footer-shell">
          <footer className="page-footer">
            <Row className="valign-wrapper">
              <Col s={6} offset="s3" className="valign-wrapper">
                <img className="logo-img" alt="brand-logo" />
              </Col>
              <Col s={6} className="social-media">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              </Col>
            </Row>
            <Row className="footer-copyright">
              <div className="container">
                © 2018 Copyright Theory Craft Brewing
              </div>
            </Row>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Foot;
