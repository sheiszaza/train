import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CancelIcon from "@mui/icons-material/Cancel";
import Searchcard from "./Searchcard";

function Searchbar(props) {
  const categories = [
    "All category",
    "Games",
    "Hardware",
    "Merchandise",
    "News & Events",
    "Support",
  ];

  const cardsdata = [
    {
      title: "Nintendo Switch™ - OLED Model - Mario Red Edition",
      platform: "Hardware",
      photo: "nintendosearch.png",
    },
    {
      title: "Super Mario RPG™",
      platform: "Nintendo Switch",
      photo: "supermario.png",
    },
    {
      title: "Super Mario Bros.™ Wonder",
      platform: "Nintendo Switch",
      photo: "supermario2.png",
    },
    {
      title: "WarioWare™: Move It!",
      platform: "Nintendo Switch",
      photo: "wario.png",
    },
  ];

  useEffect(() => {
    const body = document.querySelector("body");
    if (props.searchview) {
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = "0px";
      body.style.width = "100%";
    } else {
      body.style.overflow = "auto";
      body.style.position = "static";
      body.style.top = "auto";
      body.style.width = "auto";
    }
  }, [props.searchview]);

  const [category, setCategory] = useState(categories[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {props.searchview && (
        <div
          className="grey-screen-search"
          onClick={() => props.setSearchiew(false)}
        ></div>
      )}
      <div
        style={props.searchview ? { zIndex: 1300 } : { zIndex: 130 }}
        className={`search-full-container ${
          props.searchview ? "searchactive" : ""
        }`}
      >
        <div className="search-left-side">
          <div className="nintindo-logo-cont">
            <img className="nintindo-logo-img" src="logo.png" alt="logo" />
          </div>
          <div className="search-search-con">
            <div className="search-search">
              <span className="search-search-icon">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search games, hardware, news, etc"
                className="search-input"
              />
            </div>
            <div className="search-search-category" onClick={toggleDropdown}>
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
              <div className="search-drop-down">
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
          <span
            className="search-canclebtn"
            onClick={() => props.setSearchiew(false)}
          >
            <CancelIcon />
          </span>

          <div />
        </div>

        <div className="search-down-div">
          <div className="search-right">
            <h1>Trending topics</h1>
            <p>Nintendo Switch™ - OLED Model: Mario Red Edition</p>
            <p>Nintendo Switch</p>
            <p>Super Mario Bros. Wonder</p>
            <p>Nintendo Switch games</p>
            <p>Zelda games</p>
          </div>

          <div className="search-left">
            <h1>Top store productes</h1>

            <div className="search-grid">
              {cardsdata.map((data) => {
                return <Searchcard data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
