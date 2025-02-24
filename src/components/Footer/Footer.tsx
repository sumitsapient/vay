"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/header-logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-cols">
              <h3 className="footer-title">Company</h3>
              <p>VAY EXIM</p>
              <p>Mumbai | Bengaluru contact@eximvay.com +91 8591362338</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-cols">
              <h3 className="footer-title">Know More</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-cols">
              <h3 className="footer-title">Connect with us</h3>
              <p>VAY EXIM</p>
              <p>Mumbai | Bengaluru contact@eximvay.com +91 8591362338</p>
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
