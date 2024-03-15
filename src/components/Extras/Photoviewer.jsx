import React, { useState, useRef, useEffect } from "react";
import "./Extras.css";
import Data from "../Data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useCont } from "../Context";
import CancelIcon from "@mui/icons-material/Cancel";

function Photoviewer() {
  const [selectedphoto, setSelectedphoto] = useState(Data.photos[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef(null);

  const isVideo = selectedphoto.endsWith(".mp4");
  const { view, setView } = useCont();

  useEffect(() => {
    const body = document.querySelector("body");
    if (view) {
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
  }, [view]);

  const handleNext = () => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < Data.photos.length) {
      setSelectedphoto(Data.photos[nextIndex]);
      setActiveIndex(nextIndex);
    } else {
      setSelectedphoto(Data.photos[0]);
      setActiveIndex(0);
    }
  };

  const handlePrev = () => {
    const prevIndex = activeIndex - 1;
    if (prevIndex >= 0) {
      setSelectedphoto(Data.photos[prevIndex]);
      setActiveIndex(prevIndex);
    } else {
      setSelectedphoto(Data.photos[Data.photos.length - 1]);
      setActiveIndex(Data.photos.length - 1);
    }
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
    <>
      <div className={`photoview-cont-full ${view ? "activeveiwer" : ""}`}>
        <div className="cancle-icon" onClick={() => setView(false)}>
          <CancelIcon />
        </div>
        <div
          className="grey-screen-viewer"
          onClick={() => setView(false)}
        ></div>
        <div className="photoview-cont">
          <div className="main-photos viewer">
            <div className="slide-container-new">
              {isVideo ? (
                <video controls>
                  <source src={selectedphoto} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={selectedphoto} />
              )}
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
              {Data.photos.map((photo, index) => {
                const isVideothu = photo.endsWith(".mp4");

                return (
                  <div
                    key={index}
                    className={`thumb-photos-a ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedphoto(photo);
                      setActiveIndex(index);
                    }}
                  >
                    {isVideothu ? <img src="video.png" /> : <img src={photo} />}
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
        </div>
      </div>
    </>
  );
}

export default Photoviewer;
