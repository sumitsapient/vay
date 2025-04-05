"use client";
import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import Link from "next/link";

interface ProductCategory {
  product_id: string;
  product_name: string;
  image?: string; // Optional in case an image is missing
  featured: boolean; // Added featured field
  slug: string;
  category: string;
  name: string;
}

function ProductCard() {
  const [data, setData] = useState<ProductCategory[]>([]);

  const getData = async () => {
    try {
      const response = await fetch("products-listing.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }

      const myjson: ProductCategory[] = await response.json();
      setData(myjson);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Filter products that are featured
  const featuredProducts = data.filter((prod) => prod.featured);

  return (
    <>
      {featuredProducts.length > 0 ? (
        featuredProducts.map((prod) => (

          <div className="embla__slide" key={prod.slug}>
          <Link href={`/products/${prod.category}/${prod.slug}`} key={prod.slug} className="product-link">
            <div className="product-card">
              <div className="product-image">
                {/* <img src={prod.image || "default-image.jpg"} alt={prod.name} /> */}
                <img src="coffee-beans-levitate-white-background.png" />
              </div>
              <div className="product-title">
                <h3>{prod.name ?? "Unnamed Product"}</h3>
              </div>
            </div>
            </Link>
          </div>

        ))
      ) : (
        <p>No featured products available.</p>
      )}
    </>
  );
}

export default ProductCard;
