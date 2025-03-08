import React from "react";
import Button from "react-bootstrap/Button";
import "./CtaBar.css";

const CtaBar = () => {
  return (
    <>
      <section className="section section-cta-bar">
        <div className="container">
          <div className="cta-bar">
            <div className="row">
              <div className="col justify-content-start align-items-center d-flex">
                <p className="text-white">Have you any Queries?</p>
              </div>
              <div className="col justify-content-end d-flex">
                <Button variant="secondary" size="lg" className="rounded-pill ">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="left-shade"></div>
        <div className="right-shade"></div>
      </section>
    </>
  );
};

export default CtaBar;
