import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../CssFiles/Header.css"; // Ensure you create this CSS file for styling
import PublicIcon from "@mui/icons-material/Public";
const Header = ({ cartItemCount, handleSearchClick, handleCartClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <PublicIcon sx={{ marginRight: "0.5rem", fontSize: "2rem" }} />
        ShoppyGlobe.in
      </div>
      <div className="right-section">
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
