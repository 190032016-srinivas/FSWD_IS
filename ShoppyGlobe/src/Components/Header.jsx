import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicIcon from "@mui/icons-material/Public";
import "../CssFiles/Header.css";

const Header = ({ cartItemCount, handleSearchClick, handleCartClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <PublicIcon sx={{ marginRight: "0.5rem", fontSize: "2rem" }} />
        ShoppyGlobe.in
      </div>
      <div className="right-section">
        <button
          className="home-button"
          onClick={() => console.log("Home clicked")}
        >
          Home
        </button>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <div className="search-icon" onClick={handleSearchClick}>
            <SearchIcon />
          </div>
        </div>
        <div className="cart">
          <div className="cart-icon" onClick={handleCartClick}>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </div>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
