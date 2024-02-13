import "./Checkout.css";
import React, { useState, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

import SubmitCart from "../SubmitCart/SubmitCart";
const Checkout = () => {
  const { getTotalCartAmount, clearCart } = useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({});

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    clearCart();

    console.log("Cart submitted!");
  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  return (
    <div className="checkout">
      <form action="submit">
        <div className="checkout_form-inputs">
          <p>Contact Details</p>
          <input type="name" name="name" placeholder="Full Name*" required />
          <input name="Number" placeholder="Phone number*" required />
          <p>Delivery Address</p>
          <input type="text" placeholder="Pincode*" required />

          <div className="checkout_form-inputs_address">
            <input
              type="text"
              name="address"
              required
              placeholder="Address(House No,Building Street)*"
              style={{ marginRight: "10px", marginBottom: "10px" }}
            />
            <input type="text" name="Town" placeholder="Locality" />
          </div>
          <div className="checkout_form-inputs_state">
            <input
              type="text"
              name="City"
              placeholder="City/District*"
              required
              style={{ marginRight: "10px", marginBottom: "10px" }}
            />
            <input type="text" name="State" required placeholder="State*" />
          </div>
        </div>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="checkout_payment">
          <h2>Choose Payment Method</h2>
          <div>
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={handlePaymentMethodChange}
              />
              Pay with Card
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
          </div>
          {paymentMethod === "card" && (
            <div className="checkout_payment-form">
              <h3>Card Details</h3>
              <input
                type="text"
                required
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleCardInputChange}
              />
              <input
                type="text"
                required
                name="card holder"
                placeholder="Card Holder"
                onChange={handleCardInputChange}
              />
              <div className="checkout_payment-form_cvv">
                <input
                  type="text"
                  required
                  name="expiryDate"
                  placeholder="Expiry Date"
                  onChange={handleCardInputChange}
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                />
                <input
                  type="text"
                  required
                  name="cvv"
                  placeholder="CVV"
                  onChange={handleCardInputChange}
                />
              </div>
            </div>
          )}
          <div className="checkout_payment-total">
            <p>SubTotal: ${getTotalCartAmount()}</p>
            <hr />
            <p>Delivery: Free</p>
            <hr />
            <p>Total:${getTotalCartAmount()}</p>
          </div>
          <input
            type="submit"
            disabled={!paymentMethod}
            className="form-button"
            onClick={() => <SubmitCart /> & alert("Order has been Placed")}
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
