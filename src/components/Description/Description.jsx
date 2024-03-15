import React, { useState, useEffect } from "react";
import "./Description.css";
import Data from "../Data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Description() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(650);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setMaxDescriptionLength(400);
      } else {
        setMaxDescriptionLength(650);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hello world
  return (
    <div className="desc-full-cont">
      <div className="desc-cont">
        <div className="right-side-desc">
          <h1 className="text-xl font-semibold text-slate-700">{Data.title}</h1>
          <p
            className="text-slate-500 textdesc"
            style={{ whiteSpace: "pre-line" }}
          >
            {showFullDescription
              ? Data.description
              : `${Data.description.slice(0, maxDescriptionLength)}...`}
          </p>
          <button className="Read-less-more" onClick={toggleDescription}>
            {showFullDescription ? <RemoveIcon /> : <AddIcon />}
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
          <p className="text-xs font-light text-slate-700">
            Software description provided by the publisher
          </p>
          <div className="desc-btn">
            <h1 className="text-lg font-bold">
              Explore this game's official website
            </h1>
          </div>
        </div>
        <div className="left-side-desc">
          <img src={Data.photos[0]} alt="Game Preview" />
        </div>
      </div>
    </div>
  );
}

export default Description;
