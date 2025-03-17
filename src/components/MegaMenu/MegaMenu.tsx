"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./megaMenu.css";

interface SubProduct {
  name: string;
  slug: string;
}

interface ProductCategory {
  product_id: string;
  product_name: string;
  slug: string;
  subproducts: SubProduct[];
}

export default function MegaMenu() {
  const [menuData, setMenuData] = useState<ProductCategory[]>([]);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (product_id) => {
    setOpenIndex(openIndex === product_id ? null : product_id);
  };

  useEffect(() => {
    fetch("/data/mega-menu.json") // Fetching MegaMenu JSON
      .then((res) => res.json())
      .then((data: ProductCategory[]) => setMenuData(data))
      .catch((error) => console.error("Error fetching MegaMenu data:", error));
  }, []);

  return (
    <div className="mega-menu">
      <div className="row">
        {menuData.map((category, product_id) => (
          <div
            key={product_id}
            className={`mega-menu-category col-lg-3 ${
              openIndex === product_id ? "is-open" : ""
            }`}
          >
            <h4
              className="title acc-sub-title"
              onClick={() => toggleAccordion(product_id)}
            >
              {category.product_name}
            </h4>
            <ul className="accordion-single-content">
              {category.subproducts.map((sub) => (
                <li key={sub.name}>
                  <Link href={`/products/${category.slug}/${sub.slug}`}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
