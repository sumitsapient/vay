"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import "./HeroBanner.css";

function HomeBanner() {
  return (
    <>
      <Container fluid className="home-banner">
        <Row>
          <Col md={6} className="banner-content">
            <h1 className="heading-1">
              TEXTILE LOREM IPSUM IS OF THE PRINTING
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s,
            </p>
            <a href="#" className="btn-text-icon">
              <span className="btn-text">Explore</span>
              <span className="btn-icon"></span>
            </a>
          </Col>
          <Col md={6} className="banner-slider">
            <Carousel>
              <Carousel.Item>
                <Image
                  src="/720.jpg"
                  alt="Sliderimg 1"
                  width={720}
                  height={400}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/722.jpg"
                  alt="Sliderimg 2"
                  width={720}
                  height={400}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeBanner;
