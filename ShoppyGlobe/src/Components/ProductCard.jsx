import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../CssFiles/ProductCard.css"; // Ensure you create this CSS file for styling

const ProductCard = ({ imageSrc, price, name, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt="Product" className="product-image" />
      <div className="product-info">
        <div className="price_cart">
          <div className="product-price">{price}</div>
          <div className="cartInProduct" onClick={onAddToCart}>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </div>
        </div>
        <div className="product-name">{name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
