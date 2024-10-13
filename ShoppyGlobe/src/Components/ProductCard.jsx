import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../CssFiles/ProductCard.css";
import { GlobalContext } from "../GlobalData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartSlice";

const ProductCard = ({ product }) => {
  const { setSnackbarOpen, setSnackbarMessage } = useContext(GlobalContext);
  const dispatch = useDispatch();
  function onAddToCart() {
    setSnackbarMessage(`${product.title} added to cart`);
    setSnackbarOpen(true);
    dispatch(addToCart(product));
  }
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt="Product"
        className="product-card-image"
        onClick={() => {
          navigate(`/product/${product.title}`);
        }}
      />
      <div className="product-card-info">
        <div className="price-cart-card">
          <div className="product-card-price">{"$" + product.price}</div>
          <div className="cartInProductCard" onClick={onAddToCart}>
            <ShoppingCartIcon sx={{ color: "white", fontSize: "inherit" }} />
          </div>
        </div>
        <div
          className="productCard-name"
          onClick={() => {
            navigate(`/product/${product.title}`);
          }}
        >
          {product.title}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
