import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
import "./shop.css";

const Shop = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://api.theindianhome.in/api/product/list",
        { cache: "no-store" },
      );

      const data = await response.json();

      console.log("data ", data);

      setResponse(data?.products);
    };

    getProducts();
  }, []);

  if (response.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="shop-container">
      {response.map((element) => (
        <Card key={element._id} {...element} />
      ))}
    </div>
  );
};

export default Shop;
