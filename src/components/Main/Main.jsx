import React, { useState, useRef, useEffect } from "react";
import "./Main.css";
import Data from "../Data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DownloadIcon from "@mui/icons-material/Download";
import { useCont } from "../Context";

function Main() {
  const [selectedphoto, setSelectedphoto] = useState(Data.thumbphotos[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const { setShowDownloadInfo, setView } = useCont();
  const thumbnailsRef = useRef(null);

  // Download Nav
  useEffect(() => {
    checkDownloadButtonInView();
    window.addEventListener("scroll", checkDownloadButtonInView);
    return () => {
      window.removeEventListener("scroll", checkDownloadButtonInView);
    };
  }, []);

  const checkDownloadButtonInView = () => {
    const downloadButton = document.getElementById("download-btn");
    if (downloadButton) {
      const rect = downloadButton.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setShowDownloadInfo(true);
      } else {
        setShowDownloadInfo(false);
      }
    }
  };

  // Images Viewer
  const handleNext = () => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < Data.thumbphotos.length) {
      setSelectedphoto(Data.thumbphotos[nextIndex]);
      setActiveIndex(nextIndex);
    } else {
      setSelectedphoto(Data.thumbphotos[0]);
      setActiveIndex(0);
    }
    setFadeOut(true);
    setTimeout(() => setFadeOut(false), 300);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex - 1;
    if (prevIndex >= 0) {
      setSelectedphoto(Data.thumbphotos[prevIndex]);
      setActiveIndex(prevIndex);
    } else {
      setSelectedphoto(Data.thumbphotos[Data.thumbphotos.length - 1]);
      setActiveIndex(Data.thumbphotos.length - 1);
    }
    setFadeOut(true);
    setTimeout(() => setFadeOut(false), 300);
  };

  const scrollThumbnails = (direction) => {
    const scrollAmount = 200;
    if (direction === "left") {
      thumbnailsRef.current.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      thumbnailsRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="main-full-cont">
      <div className="main-cont">
        <div className="left-side">
          {/* LINK */}
          <div className="main-link">
            <p className="text-slate-400 text-xs font-bold cursor-pointer">
              Store{" "}
              <span className="arrow">
                <ArrowForwardIosIcon />
              </span>{" "}
              Games{" "}
              <span className="arrow">
                <ArrowForwardIosIcon />
              </span>{" "}
              <span className="text-slate-600">{Data.Name}</span>
            </p>
          </div>

          {/* PHOTOS */}
          <div className="main-photos">
            <div className="slide-container">
              <img
                src={selectedphoto}
                className={fadeOut ? "fadeOut" : "fadeIn"}
                onClick={() => setView(true)}
              />
              <div className="prev-button-div">
                <ArrowBackIosIcon
                  className="prev-button"
                  onClick={handlePrev}
                />
              </div>
              <div className="next-button-div">
                <ArrowForwardIosIcon
                  className="next-button"
                  onClick={handleNext}
                />
              </div>
            </div>
            <div className="full-thumbnails" ref={thumbnailsRef}>
              {Data.thumbphotos.map((photo, index) => {
                return (
                  <div
                    key={index}
                    className={`thumb-photos ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedphoto(photo);
                      setActiveIndex(index);
                      setFadeOut(true);
                      setTimeout(() => setFadeOut(false), 300);
                    }}
                  >
                    <img src={photo} />
                  </div>
                );
              })}
              <button
                className="goleft-btn"
                onClick={() => scrollThumbnails("left")}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                className="goright-btn"
                onClick={() => scrollThumbnails("right")}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>

          {/* ESRB */}
          <div className="ESRBrating-div">
            <div className="esrb-img">
              <img src="esrbrating.png" />
            </div>
            <div>
              <p className="text-xs font-light">
                Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                Gambling, Mild Language, Mild Blood
              </p>
              <hr
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  height: 2,
                  background: "black",
                }}
              />
              <p className="text-xs font-light">Users Interact</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="platform">
            <span>|</span>
            <p className="font-light text-s">Nintindo Switch</p>
          </div>

          <h1 className="text-3xl text-slate-600 font-bold">{Data.Name}</h1>

          <div className="price-div">
            <h1 className="text-3xl text-slate-600 font-bold">
              $ {Data.price}
            </h1>

            {/* HERAT */}
            <svg
              className="heart-spark"
              viewBox="0 0 54 54"
              fill="currentColor"
              stroke="currentColor"
              role="presentation"
            >
              <g className="hearts">
                <path
                  className="heart heart-outline"
                  d="M27,38.9c-0.4,0-0.6-0.1-0.8-0.4L16.7,29c-1.8-1.8-2.7-3.8-2.7-6c0-4.4,3.5-8,7.9-8c1.9,0,3.7,0.8,5.1,2.3c1.4-1.4,3.2-2.3,5.1-2.3c4.4,0,7.9,3.6,7.9,8c0,2.6-1.5,4.6-2.7,6.1l-9.5,9.4C27.6,38.8,27.2,38.9,27,38.9z M21.9,17.5c-3.1,0-5.6,2.5-5.6,5.6c0,1.9,1.1,3.3,2,4.3l8.6,8.7l8.5-8.6c1.4-1.5,2.1-3,2.1-4.4c0-3.1-2.5-5.6-5.6-5.6c-1.5,0-3,1-4.1,2.5c-0.5,0.6-1.4,0.6-1.9,0C24.9,18.4,23.5,17.5,21.9,17.5z"
                ></path>
              </g>
              <g className="sparks">
                <path
                  className="spark a"
                  d="M 27 8 L 27 0"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  d="M 27 46 L 27 54"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(0.7071 0.7071 -0.7071 0.7071 19.9584 -28.1838)"
                  d="M 44 14 L 44 6"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 24.1421 10)"
                  d="M 10 6 L 10 14"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(4.547455e-11 1 -1 4.547455e-11 77 -23)"
                  d="M 50 31 L 50 23"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(-9.049490e-11 1 -1 -9.049490e-11 31 23)"
                  d="M 4 23 L 4 31"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 106.2254 44)"
                  d="M 44 48 L 44 40"
                  strokeWidth="2"
                ></path>
                <path
                  className="spark"
                  transform="matrix(0.7071 0.7071 -0.7071 0.7071 34.0416 5.8162)"
                  d="M 10 40 L 10 48"
                  strokeWidth="2"
                ></path>
              </g>
            </svg>
          </div>

          {/* COINS */}
          <div className="coin-div">
            <img src="coin.avif" />
            <p className="text-xs">
              Eligible for up to {Data.point} Gold Points
            </p>
          </div>

          {/* DOWNLOAD BTN */}
          <div id="download-btn" className="download-btn">
            <DownloadIcon />
            <h1 className="text-2xl font-bold">Direct download</h1>
          </div>
          <p className="text-xs">
            This item will be sent to your system automatically after purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
