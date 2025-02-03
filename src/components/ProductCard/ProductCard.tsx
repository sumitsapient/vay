"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./ProductCard.css";
function ProductCard() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("products-listing.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        console.log(myjson);
        setData(myjson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((prod) => {
          return (
            <div className="embla__slide" key={prod.product_id}>
              <div className="product-card">
                <div className="product-image">
                  <img src="coffee-beans-levitate-white-background.png" />
                  {/* <img
                    src={prod.image ?? "/default-image.jpg"}
                    alt={prod.product_name ?? "No Name"}
                  /> */}
                </div>
                <div className="product-title">
                  <h3>{prod.product_name ?? "Unnamed Product"}</h3>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ProductCard;
