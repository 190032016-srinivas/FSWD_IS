import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicIcon from "@mui/icons-material/Public";
import "../CssFiles/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalContext } from "../GlobalData";

const Header = () => {
  const noOfCartItmes = useSelector((state) => state.cart.cartItems).length;
  const { searchValue, setSearchValue } = useContext(GlobalContext);

  return (
    <header className="header">
      <div className="logo">
        <PublicIcon sx={{ marginRight: "0.5rem", fontSize: "2rem" }} />
        ShoppyGlobe.in
      </div>
      <div className="right-section">
        <Link to={"/"}>
          <button className="home-button">Home</button>
        </Link>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <div className="search-icon">
            {searchValue.length > 0 && (
              <CloseIcon
                onClick={() => {
                  setSearchValue("");
                }}
              />
            )}
          </div>
        </div>
        <Link to={"/cart"} className="cart">
          <div className="cart-icon">
            <ShoppingCartIcon sx={{ color: "white" }} />
          </div>
          {noOfCartItmes > 0 && (
            <div className="cart-count">{noOfCartItmes}</div>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
