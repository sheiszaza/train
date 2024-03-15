import React from "react";
import "./Online.css";

function Online() {
  return (
    <div className="online-full-cont">
      <div className="online-cont">
        <div className="right-side-online">
          <img src="online.png" />
          <h1 className="text-xl font-semibold text-slate-600">
            Play online, access classic NES™ and Super NES™ games, and more with
            a Nintendo Switch Online membership.
          </h1>
          <div className="online-red-txt">
            This game support:
            <p className="text-red-500 font-bold underline cursor-pointer">
              Online Play
            </p>
            <p className="text-red-500 font-bold underline cursor-pointer">
              Save Data Cloud
            </p>
          </div>
          <div className="desc-btn online">
            <h1 className="text-lg font-bold">Learn More</h1>
          </div>
        </div>
        <div className="left-side-online">
          <img src="controllerhand.avif" />
        </div>
      </div>
    </div>
  );
}

export default Online;
