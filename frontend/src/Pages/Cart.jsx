import React, { useContext } from "react";
import Cartitems from "../Components/CartItems/CartItems.jsx";
import "./CSS/Cartempty.css";
import { ShopContext } from "../Context/ShopContext";
import emptycart from "../Components/Assets/emptycart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      {getTotalCartItems() > 0 ? (
        <Cartitems />
      ) : (
        <div className="cart-empty">
          <div className="cart-empty-imgs">
            <img src={emptycart} alt="" />
          </div>
          <div className="cart-empty-text">
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added anything to your cart yet. </p>
            <button className="button">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Continue Shopping{" "}
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
