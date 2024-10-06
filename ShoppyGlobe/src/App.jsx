import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./App.css";
import PriceDetailsCard from "./Components/PriceDetailsCard";
import CartItem from "./Components/CartItem";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductCard from "./Components/ProductCard";
import Header from "./Components/Header";
import useFetchProducts from "./CustomHooks/useFetchProducts";
import CustomSnackbar from "./Components/CustomSanckbar";
const App = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Added to cart!");

  const handleOpenSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };
  const { products, loading, error } = useFetchProducts();
  console.log("roducs=", products);
  return (
    <>
      <Header
        cartItemCount={3}
        handleSearchClick={() => alert("Search icon clicked!")}
        handleCartClick={() => alert("Cart icon clicked!")}
      />
      <div className="products-parent-card">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              imageSrc={product.images[0]}
              price={`$${product.price}`}
              name={product.title}
              onAddToCart={() => alert(`Added ${product.title} to cart`)}
            />
          );
        })}
      </div>
      <CartItem
        imageSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        name="Long Product Name"
        category="Makeup"
        price={45}
        initialQuantity={4}
        onDelete={() => alert("Item deleted")}
      />
      <div className="price-details">
        <PriceDetailsCard
          price="100.00"
          discount="20.00"
          amountPayable="80.00"
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
};

export default App;
