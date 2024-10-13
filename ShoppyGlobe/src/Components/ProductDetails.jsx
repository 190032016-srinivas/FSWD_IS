import React, { useContext, useEffect, useState } from "react";
import "../CssFiles/ProductDetails.css";
import LoadingComponent from "./LoadingComponent";
import useFetchProductDetails from "../CustomHooks/useFetchProductDetails";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalData";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { title } = useParams();
  const { globalProducts, setSnackbarOpen, setSnackbarMessage } =
    useContext(GlobalContext);
  useEffect(() => {
    for (let product of globalProducts) {
      if (product.title == title) {
        setProduct(product);
        break;
      }
    }
    setLoading(false);
  }, []);
  return (
    <div className="main-pd-container">
      {product && (
        <div className="product-details-container">
          <div className="image-container">
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />
            <button
              className="add-to-cart-button"
              onClick={() => {
                dispatch(addToCart(product));
                setSnackbarMessage(`${product.title} added to cart`);
                setSnackbarOpen(true);
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-category">{product.category}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-discount">
              Discount: {product.discountPercentage}%
            </div>
            <div className="product-rating">Rating: {product.rating}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-availability">
              Availability: {product.availabilityStatus}
            </div>
            <div className="product-return-policy">
              Return Policy: {product.returnPolicy}
            </div>
            <div className="product-warranty">
              Warranty: {product.warrantyInformation}
            </div>
          </div>
        </div>
      )}
      {loading && <LoadingComponent />}
    </div>
  );
};

export default ProductDetails;
