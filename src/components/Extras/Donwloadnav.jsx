import React from "react";
import "./Extras.css";
import Data from "../Data";
import DownloadIcon from "@mui/icons-material/Download";
import { useCont } from "../Context";

function Donwloadnav() {
  const { showDownloadInfo } = useCont();

  return (
    <div
      className={`Download-nav-cont ${!showDownloadInfo ? "activeNav" : ""}`}
    >
      <div className="text-lg font-bold text-slate-600">{Data.Name}</div>
      <div className="right-side-navdown">
        <p className="text-xs font-bold text-slate-600">Digital</p>
        <p className="text-base font-bold text-slate-600">${Data.price}</p>
        <div className="download-btn-navdown">
          <DownloadIcon />
          <h1 className="text-lg font-bold">Direct download</h1>
        </div>
      </div>
    </div>
  );
}

export default Donwloadnav;
