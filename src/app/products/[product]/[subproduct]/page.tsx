"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Get dynamic route params
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  useDotButton,
} from "../../../../components/CarouselDots/carousel-dots";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../../../components/CarouselArrow/carousel-arrow";
import { EmblaOptionsType } from "embla-carousel";
import InquiryForm from "@/components/InquiryForm/InquiryForm";
import "./ProductPage.css";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
const description = [
  {
    name: "George Washington",
    biography:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Theodore Roosevelt",
    biography:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    name: "Test text 3",
    biography:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Test test 4",
    biography:
      "Contrary to popular belief,  Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    name: "Test test 5",
    biography:
      "Crandom text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
];

interface SubProduct {
  name: string;
  slug: string;
  short_description: string;
  image: string;
  tag: string;
}

interface Product {
  product_name: string;
  slug: string;
  description: string;
  image: string;
  subproducts: SubProduct[];
}

export default function ProductDetailsPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { product, subproduct } = useParams() || {}; // Ensure it never crashes
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const [productData, setProductData] = useState<Product | null>(null);
  const [selectedSubproduct, setSelectedSubproduct] =
    useState<SubProduct | null>(null);

  useEffect(() => {
    fetch("/data/product-details.json")
      .then((res) => res.json())
      .then((data) => {
        if (!product) return; // Prevent running on undefined params

        // Find the product using the slug
        const productEntry = Object.values(data).find(
          (item) => (item as Product).slug === product
        ) as Product | undefined;

        if (productEntry) {
          setProductData(productEntry);

          // Find the subproduct if it's provided in the URL
          const selectedSubproduct = subproduct
            ? productEntry.subproducts.find((sub) => sub.slug === subproduct)
            : null;

          setSelectedSubproduct(selectedSubproduct || null);
        }
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [product, subproduct]);

  if (!productData) return <p>Loading...</p>;

  function ProductDetailTab() {
    const [activeTab, setActiveTab] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Check screen width on resize
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="prodduct-desc-tab">
        {/* Tabs for Desktop */}
        {!isMobile ? (
          <>
            <ul className="nav nav-tabs">
              {description.map((desc, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link ${
                      activeTab === index ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {desc.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              <p>{description[activeTab].biography}</p>
            </div>
          </>
        ) : (
          // Accordion for Mobile
          <div className="accordion" id="presidentAccordion">
            {description.map((desc, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeTab === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() =>
                      setActiveTab(activeTab === index ? -1 : index)
                    }
                  >
                    {desc.name}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    activeTab === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">{desc.biography}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {/* breadcrumb begins */}
      <div className="container breadcrumb-container">
        <div className="row">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Products</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {selectedSubproduct
                    ? selectedSubproduct.name
                    : productData.product_name}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* breadcrumb end */}

      {/* product detail begins */}
      <section className="section section-product-short-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="product-image">
                <img src="https://placehold.co/500x400" />
                {/* <img
                  src={
                    selectedSubproduct
                      ? selectedSubproduct.image
                      : productData.image
                  }
                  alt={
                    selectedSubproduct
                      ? selectedSubproduct.name
                      : productData.product_name
                  }
                /> */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="product-short-detail">
                <h1 className="product-title">
                  {selectedSubproduct
                    ? selectedSubproduct.name
                    : productData.product_name}
                </h1>

                <div className="prod-sd-row">
                  <h3>Business Type</h3>
                  <p>Manufacturer</p>
                </div>
                <div className="prod-sd-row">
                  <h3>Quality</h3>
                  <p>
                    {selectedSubproduct
                      ? selectedSubproduct.short_description
                      : productData.description}
                  </p>
                </div>
                <div className="prod-sd-row">
                  <h3>Usage</h3>
                  <p>
                    In food industries, food packaging and allied industries
                  </p>
                </div>
                <div className="prod-sd-row">
                  <h3>Material</h3>
                  <p>Superior Quality Indian Seedlacs</p>
                </div>
                <div className="prod-sd-ctrl">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowInquiryForm(true)}
                  >
                    Request a Quote
                  </button>
                </div>
                {showInquiryForm && (
                  <InquiryForm
                    productName={product}
                    onClose={() => setShowInquiryForm(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product detail end */}

      <section className="section section-product-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-full-detail">
                <div className="title-row">
                  <h2 className="heading-2">Product Details</h2>
                </div>
                <ProductDetailTab />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-related-products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Display related subproducts if a subproduct is selected */}

              {selectedSubproduct && (
                <div>
                  <h2>Related Subproducts</h2>
                  <div className="embla related-carousel">
                    <div className="embla__viewport" ref={emblaRef}>
                      <div className="embla__container">
                        {productData.subproducts
                          .filter((sub) => sub.slug !== subproduct)
                          .map((sub) => (
                            <div
                              className="embla__slide embla__slide-card"
                              key={sub.slug}
                            >
                              <a
                                href={`/products/${product}/${sub.slug}`}
                                className="card related-product-card"
                              >
                                <div className="related-prod-img">
                                  <img
                                    src="/coffee-beans-levitate-white-background.png"
                                    alt="image"
                                  />
                                </div>
                                <div className="card-body h-100">
                                  <h3 className="card-title heading-3">
                                    {sub.name}
                                  </h3>
                                </div>
                              </a>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="embla__dots embla__dot-trending-prod">
                      {scrollSnaps.map((_, index) => (
                        <DotButton
                          key={index}
                          onClick={() => onDotButtonClick(index)}
                          className={`embla__dot${
                            index === selectedIndex
                              ? " embla__dot--selected"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                    <div className="embla__controls embla__controls-trending-prod">
                      <div className="embla__buttons">
                        <PrevButton
                          onClick={onPrevButtonClick}
                          disabled={prevBtnDisabled}
                        />
                        <NextButton
                          onClick={onNextButtonClick}
                          disabled={nextBtnDisabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
