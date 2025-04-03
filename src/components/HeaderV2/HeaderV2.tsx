"use client";
import React, { useEffect,useState } from "react";
import Link from "next/link";
import { Button, Container, Form } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../public/header-logo.svg";
import Search from "../../../public/search.svg";
import MegaMenu from "../MegaMenu/MegaMenu";
import "./HeaderV2.css";

type SubProduct = {
  name: string;
  slug: string;
};

type Category = {
  slug: string;
  subproducts: SubProduct[];
};
type Product = {
  name: string;
  slug: string;
};

function HeaderV2() {
const [searchTerm, setSearchTerm] = useState("");
const [products, setProducts] = useState<Product[]>([]);
const [filteredResults, setFilteredResults] = useState<Product[]>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/scripts/HeaderV2.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);
useEffect(() => {
  fetch("/data/mega-menu.json")
    .then((res) => res.json())
    .then((data: Category[]) => {
      const allProducts = data.flatMap((category) =>
        category.subproducts.map((sub) => ({
          name: sub.name,
          slug: `/products/${category.slug}/${sub.slug}`,
        }))
      );
      setProducts(allProducts); // ✅ No more TypeScript error
    })
    .catch((error) => console.error("Error fetching products:", error));
}, []);


const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const query = e.target.value.toLowerCase();
  setSearchTerm(query);

  if (query.length < 2) {
    setFilteredResults([]);
    return;
  }

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  setFilteredResults(filtered);
};


const highlightText = (text: string, query: string): string => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
};



  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="nav-row">
            <div className="header-item item-left">
              <div className="logo navbar-brand">
                <a href="/">
                  <Image src={Logo} alt="Logo" />
                </a>
              </div>
            </div>

            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <div className="form-block search-container search-container-sm">
                  <Form className="d-flex position-relative">
                    <Button variant="outline-success">
                      <Image src={Search} alt="Search Icon" />
                    </Button>
                   <Form.Control
                     type="search"
                     placeholder="Search Product"
                     className="me-2"
                     value={searchTerm}
                     onChange={handleSearch}
                   />
                   {searchTerm.length >= 2 && (
                     <ul className="search-dropdown">
                       {filteredResults.length > 0 ? (
                         filteredResults.map((item, index) => (
                           <li key={index}>
                             <Link href={item.slug}>
                               <span
                                 dangerouslySetInnerHTML={{
                                   __html: highlightText(item.name, searchTerm),
                                 }}
                               />
                             </Link>
                           </li>
                         ))
                       ) : (
                         <li className="no-results">No results found</li>
                       )}
                     </ul>
                   )}


                  </Form>
                </div>
                <ul className="menu-main">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Products <i className="fa fa-angle-down"></i>
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">{<MegaMenu />}</div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/blogs">Blog</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-item item-right">
              <div className="form-block search-container search-container-lg">
                <Form className="d-flex position-relative">
                  <Button variant="outline-success">
                    <Image src={Search} alt="Search Icon" />
                  </Button>
                  <Form.Control
                    type="search"
                    placeholder="Search Products"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                                     {searchTerm.length >= 2 && (
                                       <ul className="search-dropdown">
                                         {filteredResults.length > 0 ? (
                                           filteredResults.map((item, index) => (
                                             <li key={index}>
                                               <Link href={item.slug}>
                                                 <span
                                                   dangerouslySetInnerHTML={{
                                                     __html: highlightText(item.name, searchTerm),
                                                   }}
                                                 />
                                               </Link>
                                             </li>
                                           ))
                                         ) : (
                                           <li className="no-results">No results found</li>
                                         )}
                                       </ul>
                                     )}

                </Form>
              </div>
              <div className="button-wrapper">
                <div className="mobile-menu-trigger navbar-toggler">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderV2;
