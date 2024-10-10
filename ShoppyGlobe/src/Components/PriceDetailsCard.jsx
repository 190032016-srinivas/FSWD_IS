import React, { useContext } from "react";
import "../CssFiles/PriceDetailsCard.css";
import { GlobalContext } from "../GlobalData";

const PriceDetailsCard = ({ price, discount, amountPayable, onPlaceOrder }) => {
  const { snackbarOpen, setSnackbarOpen, snackbarMessage, setSnackbarMessage } =
    useContext(GlobalContext);
  return (
    <div className="price-details-card">
      <h2>Price Details</h2>
      <div>
        {" "}
        <hr />
      </div>{" "}
      <div className="price-details">
        <div className="price-item">
          <span>Price:</span>
          <span>${price}</span>
        </div>
        <div className="price-item">
          <span>Discount:</span>
          <span>-${discount}</span>
        </div>
        <div className="price-item total">
          <span>Total:</span>
          <span>${amountPayable}</span>
        </div>
      </div>
      <div>
        {" "}
        <hr />
      </div>
      <button className="place-order-button" onClick={onPlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default PriceDetailsCard;
