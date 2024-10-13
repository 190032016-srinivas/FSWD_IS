import React, { useState } from "react";
import CartItem from "./CartItem"; // Import CartItem component
import "../CssFiles/CartPage.css"; // Import CSS for CartPage
import PriceDetailsCard from "./PriceDetailsCard";
import { useSelector } from "react-redux";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  const discount = (0.2 * totalPrice).toFixed(2); // Example discount amount
  const amountPayable = (totalPrice - discount).toFixed(2);

  // Function to handle placing an order
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="cart-page-container">
      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="empty-cart">Your cart is empty!</div>
        )}
      </div>
      {cartItems.length > 0 && (
        <PriceDetailsCard
          price={totalPrice}
          discount={discount}
          amountPayable={amountPayable}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
}

export default CartPage;
