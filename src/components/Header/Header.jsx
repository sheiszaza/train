import React, { useState } from "react";
import "./Header.css";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Searchbar from "../Searchbar/Searchbar";

function Header() {
  const categories = [
    "All category",
    "Games",
    "Hardware",
    "Merchandise",
    "News & Events",
    "Support",
  ];

  const [category, setCategory] = useState(categories[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchview, setSearchiew] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="header-full-container">
        <div className="header-left-side">
          <div className="nintindo-logo-cont">
            <img className="nintindo-logo-img" src="logo.png" alt="logo" />
          </div>
          <div className="header-search-con">
            <div className="header-search" onClick={() => setSearchiew(true)}>
              <span className="header-search-icon">
                <SearchIcon />
              </span>
              <p className="text-sm font-normal">Search</p>
            </div>

            <div className="header-search-category" onClick={toggleDropdown}>
              <p>{category}</p>
              <span
                style={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "",
                }}
              >
                <KeyboardArrowDownIcon />
              </span>
            </div>

            {isDropdownOpen && (
              <div className="header-drop-down">
                {categories.map((cat) => (
                  <p
                    key={cat}
                    className="selected-category"
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="header-right-side">
          <p className="header-right-icons">
            <LiveHelpIcon />
            Support
          </p>
          <p className="header-right-icons">
            <FavoriteIcon />
            Whish List
          </p>
          <p className="header-right-icons">
            <ShoppingCartIcon />
            Cart
          </p>
          <p className="header-right-icons">
            <PersonIcon />
            Login / Sign up
          </p>
          <img className="header-flag-img" src="americaflag.jpg" />
        </div>
      </div>
      <div className="mobile-view">
        <img className="nintindo-logo-img" src="logo.png" alt="logo" />
        <img className="header-flag-img" src="americaflag.jpg" />
      </div>

      <Searchbar searchview={searchview} setSearchiew={setSearchiew} />
    </>
  );
}

export default Header;
