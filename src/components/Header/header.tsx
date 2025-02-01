"use client";
import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./header.css";
import Image from "next/image";
import Logo from "../../../public/header-logo.svg";
import Search from "../../../public/search.svg";
function Header() {
  return (
    <>
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
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
    </>
  );
}

export default Header;
