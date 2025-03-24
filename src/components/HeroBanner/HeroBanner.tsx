"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import "./HeroBanner.css";

function HomeBanner() {
  return (
    <div className="home-banner">
      <Carousel fade>
        <Carousel.Item>
          <picture>
            <source
              className="hero-bg"
              srcSet="tea-sm.jpg"
              media="(max-width:768px)"
            />
            <img
              className="hero-bg"
              src="hero-tea.jpg"
              alt="Responsive Example"
            />
          </picture>

          <Carousel.Caption>
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-sm-12 col-md-5 hero-content">
                  <div className="hero-desc">
                    <h1 className="heading-1">
                      TEXTILE LOREM IPSUM IS OF THE PRINTING
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <div className="hero-cta">
                    <a href="#" className="btn-text-icon">
                      <span className="btn-text">Explore</span>
                      <span className="btn-icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source
              className="hero-bg"
              srcSet="coffee-sm.jpg"
              media="(max-width:768px)"
            />
            <img
              className="hero-bg"
              src="hero-coffee.jpg"
              alt="Responsive Example"
            />
          </picture>
          <Carousel.Caption>
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-sm-12 col-md-5 hero-content">
                  <div className="hero-desc">
                    <h1 className="heading-1">
                      LOREM IPSUM IS OF THE PRINTING
                    </h1>
                    <p>
                      Dummy text of the printing and Lorem Ipsum has been the
                      industry’s standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <div className="hero-cta">
                    <a href="#" className="btn-text-icon">
                      <span className="btn-text">Explore</span>
                      <span className="btn-icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source
              className="hero-bg"
              srcSet="egg-powder-sm.jpg"
              media="(max-width:768px)"
            />
            <img
              className="hero-bg"
              src="hero-egg.jpg"
              alt="Responsive Example"
            />
          </picture>
          <Carousel.Caption>
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-sm-12 col-md-5 hero-content">
                  <div className="hero-desc">
                    <h1 className="heading-1">
                      LOREM IPSUM IS OF THE PRINTING
                    </h1>
                    <p>
                      Dummy text of the printing and Lorem Ipsum has been the
                      industry’s standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <div className="hero-cta">
                    <a href="#" className="btn-text-icon">
                      <span className="btn-text">Explore</span>
                      <span className="btn-icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeBanner;
