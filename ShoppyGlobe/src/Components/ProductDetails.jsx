import React from "react";
import "../CssFiles/ProductDetails.css";

const ProductDetails = ({ product }) => {
  return (
    <div className="main-pd-container">
      <div className="product-details-container">
        <div className="image-container">
          <img
            src={product.images[0]}
            alt={product.title}
            className="product-image"
          />
          <button className="add-to-cart-button" onClick={() => {}}>
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
    </div>
  );
};

export default ProductDetails;
