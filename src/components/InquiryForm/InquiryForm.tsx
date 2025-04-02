"use client";
import React, { useState, useEffect } from "react";
import "./inquiryForm.css";

interface InquiryFormProps {
  productName?: string | string[]; // Handle possible array type
  onClose: () => void; // Function to close modal
}

const InquiryForm: React.FC<InquiryFormProps> = ({ productName, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    product: "",
  });

  // Ensure product is always a string
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
      alert("Please fill all required fields!");
      return;
    }

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Your inquiry has been sent!");
        onClose();
      } else {
        console.error("Error sending inquiry:", result);
        alert("Error sending inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="inquiry-modal">
      <div className="modal-content">
        <div className="modal-close-btn" onClick={onClose}>
          <img src="/modal-close-icon.svg" />
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
          <div className="row">
            <div className="col-md-12 justify-content-center">
              <button className="btn btn-primary" type="submit">
                Send Inquiry
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
