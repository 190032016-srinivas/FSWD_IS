import React, { useState } from "react";
import ".././CssFiles/CartItem.css"; // Make sure to create this CSS file for styling

const CartItem = ({
  imageSrc,
  name,
  category,
  price,
  initialQuantity,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="cart-item">
      <img src={imageSrc} alt="cart" className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-category">{category}</div>
        <div className="cart-item-price">Rs-{price}</div>
        <div className="cart-item-quantity">
          <button className="quantity-button" onClick={handleDecrease}>
            -
          </button>
          <span>{quantity}</span>
          <button className="quantity-button" onClick={handleIncrease}>
            +
          </button>
        </div>

        <div className="cart-item-delete" onClick={onDelete}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default CartItem;
