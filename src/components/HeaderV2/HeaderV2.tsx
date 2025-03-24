"use client";
import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../public/header-logo.svg";
import Search from "../../../public/search.svg";
import MegaMenu from "../MegaMenu/MegaMenu";
import "./HeaderV2.css";

function HeaderV2() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/scripts/HeaderV2.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="nav-row">
            <div className="header-item item-left">
              <div className="logo navbar-brand">
                <a href="#">
                  <Image src={Logo} alt="Logo" />
                </a>
              </div>
            </div>

            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <div className="form-block search-container search-container-sm">
                  <Form className="d-flex position-relative">
                    <Button variant="outline-success">
                      <Image src={Search} alt="Search Icon" />
                    </Button>
                    <Form.Control
                      type="search"
                      placeholder="Search Products"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </div>
                <ul className="menu-main">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Products <i className="fa fa-angle-down"></i>
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">{<MegaMenu />}</div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/blogs">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-item item-right">
              <div className="form-block search-container search-container-lg">
                <Form className="d-flex position-relative">
                  <Button variant="outline-success">
                    <Image src={Search} alt="Search Icon" />
                  </Button>
                  <Form.Control
                    type="search"
                    placeholder="Search Products"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </div>
              <div className="button-wrapper">
                <div className="mobile-menu-trigger navbar-toggler">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderV2;
