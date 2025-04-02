"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./ProductListPage.css";
import EggIcon from "@mui/icons-material/Egg";

interface SubProduct {
  name: string;
  slug: string;
  short_description: string;
  image: string;
}

interface Product {
  product_name: string;
  slug: string;
  subproducts: SubProduct[];
}

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/product-details.json") // Load product data
      .then((res) => res.json())
      .then((data) => setProducts(Object.values(data)))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  // Handle Checkbox Change
  const handleCheckboxChange = (slug: string) => {
    setSelectedProducts(
      (prevSelected) =>
        prevSelected.includes(slug)
          ? prevSelected.filter((item) => item !== slug) // Remove if already selected
          : [...prevSelected, slug] // Add if not selected
    );
  };

  // Filtered Products: Show only selected parent products or all if none selected
  const filteredProducts =
    selectedProducts.length > 0
      ? products.filter((product) => selectedProducts.includes(product.slug))
      : products;

  return (
    <section className="section section-product-list">
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="heading-1">Products</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="section-product-filter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Filter by Product</h3>
              {/* Checkbox Filter Section */}
              <ul className="filter-section">
                {products.map((product) => (
                  <li>
                    <input
                      className="checkbox"
                      type="checkbox"
                      value={product.slug}
                      checked={selectedProducts.includes(product.slug)}
                      onChange={() => handleCheckboxChange(product.slug)}
                    />
                    <label key={product.slug} className="checkbox-label">
                      {product.product_name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Display Products */}
            {filteredProducts.map((product) => (
              <div key={product.slug} className="product-group">
                <h2 className="heading-2">{product.product_name}</h2>
                <div className="subproducts-row">
                  {product.subproducts.map((sub) => (
                    <div className="subproduct-card-grid">
                      <div
                        key={sub.slug}
                        className="subproduct-card"
                        onClick={() =>
                          router.push(`/products/${product.slug}/${sub.slug}`)
                        }
                      >
                        <div className="prod-image">
                          <img src="/stone-test-img.png" />
                          {/* <img src={sub.image} alt={sub.name} /> */}
                        </div>
                        <div className="prod-short-desc">
                          <h3 className="heading-3">{sub.name}</h3>
                          <p>{sub.short_description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
