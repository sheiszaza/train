import React, { useRef } from "react";
import "./Morelike.css";
import Gamecard from "./Gamecard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Games } from "../Data";

function Morelike() {
  const thumbnailsRef = useRef(null);

  const scrollThumbnails = (direction) => {
    const scrollAmount = 200;
    if (direction === "left") {
      thumbnailsRef.current.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      thumbnailsRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="more-full-cont">
      <div className="more-cont">
        <h1
          className="text-3xl font-semibold text-slate-600"
          onClick={() => scrollThumbnails("right")}
        >
          More like this
        </h1>
        <div className="more-games" ref={thumbnailsRef}>
          {Games.map((game, index) => {
            return <Gamecard key={index} details={game} />;
          })}
          <button
            className="goleft-btn-more"
            onClick={() => scrollThumbnails("left")}
          >
            <ArrowBackIosIcon />
          </button>
          <button
            className="goright-btn-more"
            onClick={() => scrollThumbnails("right")}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Morelike;
