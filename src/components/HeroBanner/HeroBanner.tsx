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
                      Premium Egg Powder
                    </h1>
                    <p>
                      Experience the goodness of high-quality egg powder, perfect for baking,
                       cooking, and food processing. Rich in protein, long shelf life,
                        and easy to use – an ideal choice for health-conscious and commercial applications.
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
                      Pure Beans, Perfect Brew
                    </h1>
                    <p>
                      Sourced from the finest coffee plantations, our expertly roasted beans deliver a smooth, full-bodied taste in every cup.
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
                      Handpicked Tea Leaves
                    </h1>
                    <p>
                      Discover the essence of purity with our premium tea collection. Sourced from the finest tea gardens, our blends are rich in aroma, flavor, and tradition.🍵
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
