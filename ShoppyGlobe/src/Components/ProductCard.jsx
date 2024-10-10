import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../CssFiles/ProductCard.css"; // Ensure you create this CSS file for styling
import { GlobalContext } from "../GlobalData";

const ProductCard = ({ imageSrc, price, name }) => {
  const { snackbarOpen, setSnackbarOpen, snackbarMessage, setSnackbarMessage } =
    useContext(GlobalContext);
  function onAddToCart() {
    setSnackbarMessage(`${name} added to cart`);
    setSnackbarOpen(true);
  }
  return (
    <div className="product-card">
      <img src={imageSrc} alt="Product" className="product-card-image" />
      <div className="product-card-info">
        <div className="price-cart-card">
          <div className="product-card-price">{price}</div>
          <div className="cartInProductCard" onClick={onAddToCart}>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </div>
        </div>
        <div className="productCard-name">{name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
