import React, { useContext } from "react";
import "./App.css";
import PriceDetailsCard from "./Components/PriceDetailsCard";
import CartItem from "./Components/CartItem";
import ProductCard from "./Components/ProductCard";
import Header from "./Components/Header";
import useFetchProducts from "./CustomHooks/useFetchProducts";
import CustomSnackbar from "./Components/CustomSanckbar";
import { GlobalContext } from "./GlobalData";
import ProductDetails from "./Components/ProductDetails";
const App = () => {
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };
  const { products } = useFetchProducts();
  console.log("products=", products);
  const { snackbarMessage } = useContext(GlobalContext);
  return (
    <div className="main-div">
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
      <CustomSnackbar />
      {products.length > 0 && <ProductDetails product={products[0]} />}
    </div>
  );
};

export default App;
