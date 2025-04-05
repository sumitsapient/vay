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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (product_id: number) => {
    setOpenIndex(openIndex === product_id ? null : product_id);
  };

  // Fetch menu data
  useEffect(() => {
    fetch("/data/mega-menu.json")
      .then((res) => res.json())
      .then((data: ProductCategory[]) => setMenuData(data))
      .catch((error) => console.error("Error fetching MegaMenu data:", error));
  }, []);

  // Add dynamic class based on number of categories
  useEffect(() => {
    if (menuData.length === 0) return;

    const megaMenuRow = document.getElementById("mega-menu-row");
    if (!megaMenuRow) return;

    const categories = megaMenuRow.querySelectorAll(".mega-menu-category");
    const categoryCount = categories.length;

    console.log(`Number of mega-menu-category divs: ${categoryCount}`);

    if ([3, 5, 6, 9].includes(categoryCount)) {
      categories.forEach((category) => {
        category.classList.add("col-lg-4");
      });
    } else if (categoryCount === 2) {
      categories.forEach((category) => {
        category.classList.add("col-lg-6");
      });
    }
  }, [menuData]); // Run after menuData is loaded

  return (
    <div className="mega-menu">
      <div className="row" id="mega-menu-row">
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
