"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import InquiryForm from "@/components/InquiryForm/InquiryForm";
import "./CtaBar.css";

const CtaBar = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  return (
    <>
      <section className="section section-cta-bar">
        <div className="container">
          <div className="cta-bar">
            <div className="row">
              <div className="col justify-content-start align-items-center d-flex">
                <p className="text-white">✉️ Contact Us Today!</p>
              </div>
              <div className="col justify-content-end d-flex">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-pill "
                  onClick={() => setShowInquiryForm(true)}
                >
                  Contact Us
                </Button>
              </div>
              {showInquiryForm && (
                <InquiryForm onClose={() => setShowInquiryForm(false)} />
              )}
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
