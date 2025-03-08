"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Get dynamic route params
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InquiryForm from "@/components/InquiryForm/InquiryForm";
import "./ProductPage.css";

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

function ProductDetailTab() {
  const [key, setKey] = useState("application");
  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => k && setKey(k)}
      defaultActiveKey="profile"
      id="ProductDetailTab"
      className="mb-3"
      fill
    >
      <Tab eventKey="application" title="Application">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum the industry’s standard dummy text ever since
          the 1500s, when an unknown printer took type and scrambled it to make
          a type specimen book. It has survived not only five centuries, also
          the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </Tab>
      <Tab eventKey="pharmaceutical" title="Pharmaceutical industry">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </Tab>
      <Tab eventKey="storage" title="Storage">
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </Tab>
      <Tab
        eventKey="cold-storage"
        title="In Cold-storage rooms to maintain powdered"
      >
        <p>
          he point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text
        </p>
      </Tab>
    </Tabs>
  );
}

export default function ProductDetailsPage() {
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

                  <ul>
                    {productData.subproducts
                      .filter((sub) => sub.slug !== subproduct)
                      .map((sub) => (
                        <li key={sub.slug}>
                          <a href={`/products/${product}/${sub.slug}`}>
                            {sub.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
