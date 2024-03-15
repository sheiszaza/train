import React, { useEffect, useState } from "react";
import "./Mobilenav.css";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import DownloadIcon from "@mui/icons-material/Download";
import Data from "../Data";
import { useCont } from "../Context";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CancelIcon from "@mui/icons-material/Cancel";
import LaunchIcon from "@mui/icons-material/Launch";
import MobileNavitems from "./MobileNavitems";
import Mynintendo from "./Mynintendo";
import Searchbar from "../Searchbar/Searchbar";

function Mobilenav() {
  const [showmenu, setShowmenu] = useState(false);
  const [showprofile, setShowprofile] = useState(false);

  const [viewsearch, setViewsearch] = useState(false);

  const items = {
    games: [
      "Games",
      "Nintendo Switch games",
      "New releases",
      "Coming soon",
      "Shop games",
    ],
    nintindo: [
      "Nintendo Switch",
      "Nintendo Switch lineup",
      "Compare systems",
      "Online service",
      "Accessories",
      "Shop systems",
    ],
    play: ["Play Nintendo", "For kids", "For parents"],
  };

  const [selected, setSelected] = useState();
  const [showmynin, setShowmynin] = useState(false);

  const { showDownloadInfo } = useCont();

  useEffect(() => {
    const body = document.querySelector("body");
    if (showmenu || showprofile) {
      body.style.overflow = "hidden";
      body.style.width = "100%";
    } else {
      body.style.overflow = "auto";
      body.style.width = "auto";
    }
  }, [showmenu, showprofile]);

  return (
    <>
      {(showmenu || showprofile || selected || showmynin) && (
        <div
          className="grey-screen"
          onClick={() => {
            setShowmenu(false);
            setShowprofile(false);
            setSelected(false);
            setShowmynin(false);
          }}
        ></div>
      )}

      {/* NAV ITEMS */}
      <div className="mobile-nav-cont-full">
        <div className="mobile-nav-cont">
          <div className="nav-item-mob">
            {showmenu ? (
              <CancelIcon
                onClick={() => {
                  setShowmenu(false);
                  setSelected(false);
                }}
              />
            ) : (
              <MenuIcon
                onClick={() => {
                  setSelected();
                  setShowmenu(true);
                  setShowprofile(false);
                }}
              />
            )}
          </div>
          <div className="nav-item-mob">
            <FavoriteIcon />
          </div>
          <div
            className="nav-item-mob search"
            onClick={() => setViewsearch(true)}
          >
            <SearchIcon />
          </div>
          <div className="nav-item-mob">
            <ShoppingCartIcon />
          </div>
          <div className="nav-item-mob">
            {showprofile ? (
              <CancelIcon onClick={() => setShowprofile(false)} />
            ) : (
              <PersonIcon
                onClick={() => {
                  setShowmenu(false);
                  setShowprofile(true);
                  setSelected(false);
                  setShowmynin(false);
                }}
              />
            )}
          </div>

          {/* DOWNLOAD BTN */}
          <div
            className={`mobile-down-btn-cont ${
              !showDownloadInfo ? "showdownmob" : ""
            }`}
          >
            <div className="mobile-down-btn">
              <div className="mobile-down-btn-det">
                <p className="text-xs">Digital</p>
                <p className="font-bold text-slate-700">${Data.price}</p>
              </div>
              <div className="download-btn-mob">
                <DownloadIcon />
                <h1 className="text-lg font-bold">Direct download</h1>
              </div>
            </div>
          </div>

          {/* MENU ITEMS */}
          <div className={`mob-nav-menu ${showmenu ? "showmennmob" : ""}`}>
            <div className="menu-items-mob">
              <div className="logo-menu-mob">
                <h1 className="text-xl text-slate-700 font-semibold">Menu</h1>
                <div
                  className="canclebtn-menu"
                  onClick={() => setShowmenu(false)}
                >
                  <CancelIcon />
                </div>
              </div>
              <div className="items-mob-div" onClick={() => setShowmynin(true)}>
                <img src="storeicon.png" />
                <p className=" font-semibold">My Nintendo Store</p>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="items-mob-div"
                onClick={() => setSelected(items.games)}
              >
                <img src="gamesicon.png" />
                <p className=" font-semibold">Games</p>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="items-mob-div"
                onClick={() => setSelected(items.nintindo)}
              >
                <img src="nintendoicon.png" />
                <p className=" font-semibold">Nintendo Switch</p>
                <ArrowForwardIosIcon />
              </div>
              <div className="items-mob-div">
                <img src="newsicon.png" />
                <p className=" font-semibold">News & Events</p>
              </div>
              <div
                className="items-mob-div"
                onClick={() => setSelected(items.play)}
              >
                <img src="playninicon.png" />
                <p className=" font-semibold">Play Nintendo</p>
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className="menu-items-mob">
              <div className="items-mob-div">
                <img src="supporticon.png" />
                <p className=" font-semibold">Support</p>
              </div>
              <div className="items-mob-div">
                <img src="americaflag.jpg" />
                <p className=" font-semibold">Change Region</p>
              </div>
            </div>
          </div>

          {selected && (
            <MobileNavitems
              selected={selected}
              setSelect={setSelected}
              setShowmenu={setShowmenu}
              setShowprofile={setShowprofile}
            />
          )}

          {showmynin && (
            <Mynintendo
              showmynin={setShowmynin}
              setSelect={setSelected}
              setShowmenu={setShowmenu}
              setShowprofile={setShowprofile}
            />
          )}

          {/* Profile Items */}
          <div className={`mob-nav-pro ${showprofile ? "showpromob" : ""}`}>
            <div className="logo-menu-mob">
              <h1 className="text-xl text-slate-700 font-semibold">
                Login / Sign up
              </h1>
              <div
                className="canclebtn-menu"
                onClick={() => setShowprofile(false)}
              >
                <CancelIcon />
              </div>
            </div>
            <div className="pro-items-mob">
              <div className="header-pro">
                <img src="headerpro.png" />
                <div className="profile-login text-xl font-bold">Log in</div>
                <div className="profile-signup text-xl font-bold">Sign up</div>
              </div>

              <div style={{ width: "100%" }}>
                <div className="items-mob-div">
                  <img src="ordericon.png" />
                  <p className=" font-semibold">Order status</p>
                </div>
              </div>

              <div style={{ width: "100%", marginBottom: 80 }}>
                <div className="items-mob-div">
                  <img src="storeicon.png" />
                  <p className=" font-semibold">My Nintendo</p>
                  <LaunchIcon />
                </div>
                <div className="items-mob-div">
                  <img src="redeemicon.png" />
                  <p className=" font-semibold">Redeem code</p>
                  <LaunchIcon />
                </div>
                <div className="items-mob-div">
                  <img src="settingsicon.png" />
                  <p className=" font-semibold">Account settings</p>
                  <LaunchIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Profile end */}
        </div>
      </div>
      <Searchbar searchview={viewsearch} setSearchiew={setViewsearch} />
    </>
  );
}

export default Mobilenav;
