import React, { Suspense, useContext, useEffect } from "react";
import "./App.css";
import PriceDetailsCard from "./Components/PriceDetailsCard";
import CartItem from "./Components/CartItem";
import ProductCard from "./Components/ProductCard";
import Header from "./Components/Header";
import useFetchProducts from "./CustomHooks/useFetchProducts";
import CustomSnackbar from "./Components/CustomSanckbar";
import { GlobalContext } from "./GlobalData";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./Components/CartPage";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ArrowBack from "./Components/ArrowBack";
import LoadingComponent from "./Components/LoadingComponent";
const App = () => {
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };
  const url = useLocation();
  const navigate = useNavigate();
  const { bypassRef } = useContext(GlobalContext);
  useEffect(() => {
    if (url.pathname != "/") {
      navigate("/");
    }
    window.addEventListener("beforeunload", function (e) {
      console.log("window called", bypassRef);
      if (bypassRef.current) {
        console.log("indeed true");
        bypassRef.current = false;
        return;
      }
      e.preventDefault();
      e.returnValue =
        "Are you sure you want to leave? Your changes are not saved.";
    });
  }, []);
  return (
    <div className="the-main-div">
      <Header />
      {url.pathname != "/" && <ArrowBack />}
      <Outlet />
      <CustomSnackbar />
    </div>
  );
};

export default App;
