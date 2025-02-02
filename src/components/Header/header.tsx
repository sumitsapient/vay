"use client";
import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import Image from "next/image";
import Logo from "../../../public/header-logo.svg";
import Search from "../../../public/search.svg";
import MegaMenu from "../MegaMenu/MegaMenu"; // Import MegaMenu Component

function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary mainnav">
      <Container fluid>
        <Navbar.Brand>
          <Image src={Logo} alt="Logo" />
        </Navbar.Brand>
        <div className="button-wrapper">
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>

            {/* Hover to show Mega Menu */}
            <div
              className="mega-menu-wrapper"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <Nav.Link>Products</Nav.Link>
              {showMegaMenu && <MegaMenu />}
            </div>
          </Nav>

          <div className="form-block">
            <Form className="d-flex">
              <Button variant="outline-success">
                <Image src={Search} alt="Search Icon" />
              </Button>
              <Form.Control
                type="search"
                placeholder="Search Keyword"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
