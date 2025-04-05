"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/header-logo.svg";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-cols">
              <h3 className="footer-title">Company</h3>
              <p className="fs-6"> VAY EXIM LLP</p>
              <ul>
                <li>
                  <MapOutlinedIcon /> Mumbai | Bengaluru{" "}
                </li>
                <li>
                  <EmailOutlinedIcon /> contact@eximvay.com
                </li>
                <li>
                  <LocalPhoneOutlinedIcon /> +918591362338
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-cols">
              <h3 className="footer-title">Know More</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products/listing">Products</a>
                </li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-cols">
              <h3 className="footer-title">Connect with us</h3>
              <ul>
                <li>
                  <a
                    href="mailto:contact@eximvay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EmailOutlinedIcon /> Email Us
                  </a>
                </li>
                <li>
                  <a href="tel:+918591362338">
                    <LocalPhoneOutlinedIcon /> Call Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/918591362338"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-whatsapp"></i> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-cols">
              <div className="footer-logo">
                <a href="#">
                  <Image className="img-responsive" src={Logo} alt="Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <p>Coyright © 2024 VAY. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
