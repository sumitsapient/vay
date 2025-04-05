"use client";
import React, { useState, useEffect } from "react";
import "./inquiryForm.css";

interface InquiryFormProps {
  productName?: string | string[];
  onClose: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ productName, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    product: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: Array.isArray(productName) ? productName[0] : productName || "",
    }));
  }, [productName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("⚠️ Please fill all required fields!");
      return;
    }

    setIsLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("✅ Your inquiry has been sent successfully!");

        // Auto-close modal after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        console.error("Error sending inquiry:", result);
        setResponseMessage(
          "❌ Something went wrong. Please email us at contact@eximvay.com."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      setResponseMessage(
        "❌ Network error. Please email us at contact@eximvay.com."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="inquiry-modal">
      <div className="modal-content">
        <div className="modal-close-btn" onClick={onClose}>
          <img src="/modal-close-icon.svg" alt="Close" />
        </div>
        <h2>Contact Us</h2>
        <p className="sub-heading">Send Us a Message</p>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="text"
                name="product"
                value={formData.product}
                placeholder="Product"
                readOnly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />
            </div>
          </div>
          {responseMessage && (
            <div className="row">
              <div className="col-md-12">
                <p className="response-message">{responseMessage}</p>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-12 justify-content-center">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;