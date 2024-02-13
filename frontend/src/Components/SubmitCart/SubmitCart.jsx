import React from "react";
import { Link } from "react-router-dom";
const SubmitCart = () => {
  alert("Order has been Placed");
  return (
    <div>
      hi
      <Link to={"/submitCart"} />;
    </div>
  );
};

export default SubmitCart;
