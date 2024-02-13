import React from "react";
import Hero from "../Components/hero/hero";
import Popular from "../Components/popular/popular.jsx";
import Offers from "../Components/offers/offers.jsx";
import Newcollections from "../Components/newcollections/Newcollections.jsx";
import Newsletter from "../Components/Newsletter/Newsletter.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Newsletter />
    </div>
  );
};

export default shop;
