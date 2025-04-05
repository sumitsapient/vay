"use client";
import React, { useState, useEffect } from "react";
import "./TrendingCard.css";
import Link from "next/link";

// Define the interface for the product data
interface Product {
  product_id: string; // Adjust this type based on the actual data type
  product_name: string;
  summary: string;
  tag: string;
  slug: string;
  trending: boolean; // Ensure this field exists in your JSON data
}

function TrendingCard() {
  const [data, setData] = useState<Product[]>([]); // Explicitly typing the state

  const getData = () => {
    fetch("products-listing.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myjson: Product[]) => {
        setData(myjson);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  // Filter only trending products
  const trendingProducts = data.filter((prod) => prod.trending);

  return (
    <>
      {trendingProducts.length > 0 ? (
        trendingProducts.map((prod) => (
          <div className="embla__slide embla__slide-card" key={prod.slug}>
            <Link
              href={`/products/${prod.category}/${prod.slug}`}
              key={prod.slug}
              className="product-link"
            >
              <div className="card trending-card">
                <div className="row no-gutters g-0 h-100">
                  <div className="col-md-5 h-100">
                    <div className="trending-prod-img">
                      <img
                        src="coffee-beans-levitate-white-background.png"
                        alt={prod.name}
                      />
                    </div>
                  </div>
                  <div className="col-md-7 h-100">
                    <div className="card-body h-100">
                      <span className="category-badge">{prod.tag}</span>
                      <h3 className="card-title heading-3">
                        {prod.name ?? "Unnamed Product"}
                      </h3>
                      <p className="card-text prod-desc">{prod.summary}</p>
                      <div className="card-link">
                        Read More{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#5f6368"
                          >
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No trending products available.</p>
      )}
    </>
  );
}

export default TrendingCard;
