import React, { useState, useEffect } from "react";
import "./popular.css";
import Item from "../item/item";
const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularwomen")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
    console.log(popularProducts);
  }, []);

  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
