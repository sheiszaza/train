import React, { useEffect, useState } from "react";
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Mynintendostore from "./Mynintendostore";
import Others from "./Others";

function Navbar() {
  const initialState = {
    isMystoreOpen: false,
    isGamesOpen: false,
    isSwitchOpen: false,
    isPlayNintendoOpen: false,
  };

  const [dropdownState, setDropdownState] = useState(initialState);

  useEffect(() => {
    const body = document.querySelector("body");
    if (
      dropdownState.isMystoreOpen ||
      dropdownState.isGamesOpen ||
      dropdownState.isSwitchOpen ||
      dropdownState.isPlayNintendoOpen
    ) {
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
  }, [dropdownState]);

  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...initialState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const toggleMystoreDropdown = () => {
    toggleDropdown("isMystoreOpen");
  };

  const toggleGamesDropdown = () => {
    toggleDropdown("isGamesOpen");
  };

  const toggleSwitchDropdown = () => {
    toggleDropdown("isSwitchOpen");
  };

  const togglePlayNintendoDropdown = () => {
    toggleDropdown("isPlayNintendoOpen");
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-items">
          <div
            className="header-nav-item selected"
            onClick={toggleMystoreDropdown}
          >
            <img src="storeicon.png" />
            <p>My Nintendo Store</p>
            <span
              style={{
                transform: dropdownState.isMystoreOpen ? "rotate(180deg)" : "",
              }}
            >
              <KeyboardArrowDownIcon />
            </span>
          </div>

          <div className="header-nav-item " onClick={toggleGamesDropdown}>
            <img src="gamesicon.png" />
            <p
              style={{
                color: dropdownState.isGamesOpen ? "red" : "",
              }}
            >
              Games
            </p>
            <span
              style={{
                transform: dropdownState.isGamesOpen ? "rotate(180deg)" : "",
              }}
            >
              <KeyboardArrowDownIcon />
            </span>
          </div>

          <div className="header-nav-item" onClick={toggleSwitchDropdown}>
            <img src="nintendoicon.png" />
            <p
              style={{
                color: dropdownState.isSwitchOpen ? "red" : "",
              }}
            >
              Nintendo Switch
            </p>
            <span
              style={{
                transform: dropdownState.isSwitchOpen ? "rotate(180deg)" : "",
              }}
            >
              <KeyboardArrowDownIcon />
            </span>
          </div>

          <div className="header-nav-item">
            <img src="newsicon.png" />
            <p>News & Events</p>
          </div>

          <div className="header-nav-item" onClick={togglePlayNintendoDropdown}>
            <img src="playninicon.png" />
            <p
              style={{
                color: dropdownState.isPlayNintendoOpen ? "red" : "",
              }}
            >
              Play Nintendo
            </p>
            <span
              style={{
                transform: dropdownState.isPlayNintendoOpen
                  ? "rotate(180deg)"
                  : "",
              }}
            >
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </div>
      </div>

      <div>
        <Mynintendostore show={dropdownState.isMystoreOpen} />
      </div>

      <div>
        <Others show={dropdownState} />
      </div>

      {(dropdownState.isMystoreOpen ||
        dropdownState.isGamesOpen ||
        dropdownState.isSwitchOpen ||
        dropdownState.isPlayNintendoOpen) && (
        <div
          className="grey-screen"
          onClick={() => {
            setDropdownState(initialState);
          }}
        ></div>
      )}

      <div className="down-items">
        <div className="down-item">
          <img src="shippingicon.png" className="img-show" />
          <p className="font-light">
            <span className="font-bold">Free shipping </span>on orders $50 or
            more.
            <span className="underline cursor-pointer">
              Restrictions apply.
            </span>
          </p>
        </div>

        <div className="vertical-line selection">|</div>

        <div className="down-item selection">
          <img src="staricon.png" />
          <p className="font-light">
            Earn
            <span className="font-bold underline cursor-pointer">
              My Nintendo Points
            </span>
            on digital games
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
