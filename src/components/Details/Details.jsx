import React from "react";
import "./Details.css";
import Data from "../Data";

function Details() {
  return (
    <div className="detail-full-cont">
      <div className="detail-cont">
        <div className="above-cont">
          {/* ESRB */}
          <div className="esrb-det">
            <h1 className="font-bold text-slate-600">ESRB rating</h1>
            <div className="ESRBrating-div-new act">
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

          {/* Supported Devices */}
          <div className="support-det">
            <h1 className="font-bold text-slate-600">Supported play modes</h1>
            <div className="supported-devices">
              <div className="supports">
                <div className="insupport">
                  <img src="tv.png" />
                </div>
                <h1 className="font-bold text-slate-600">TV</h1>
              </div>
              <div className="supports">
                <div className="insupport">
                  <img src="tabletop.png" />
                </div>
                <h1 className="font-bold text-slate-600">Tabletop</h1>
              </div>
              <div className="supports">
                <div className="insupport">
                  <img src="handheld.png" />
                </div>
                <h1 className="font-bold text-slate-600">Handheld</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="more-details">
          <div className="more-det">
            <img src="calendarDet.png" />
            <h1 className="font-bold text-slate-600 text-lg">Release Date</h1>
            <div className="inside-details">
              <h1 className="text-slate-500">{Data.ReleaseDate}</h1>
            </div>
          </div>

          <div className="more-det">
            <img src="nbofplayers.png" />
            <h1 className="font-bold text-slate-600 text-lg">No. of players</h1>
            <div className="inside-details">
              <div className="detailss">
                {Data.nbofplayer.map((e, index) => (
                  <h1 key={e}>{e}</h1>
                ))}
              </div>
            </div>
          </div>

          <div className="more-det">
            <img src="genre.png" />
            <h1 className="font-bold text-slate-600 text-lg">Genre</h1>
            <div className="detailss">
              {Data.Genre.map((e, index) => (
                <h1 key={e}>{e}</h1>
              ))}
            </div>
          </div>

          <div className="more-det">
            <img src="publisher.png" />
            <h1 className="font-bold text-slate-600 text-lg">Publisher</h1>
            <h1 className="details">{Data.Publisher}</h1>
          </div>

          <div className="more-det">
            <img src="esrb.png" />
            <h1 className="font-bold text-slate-600 text-lg">ESRB rating</h1>
            <h1 className="details">{Data.ESRBrating}</h1>
          </div>

          <div className="more-det">
            <img src="support.png" />
            <h1 className="font-bold text-slate-600 text-lg">
              Supported play modes
            </h1>
            <h1 className="text-slate-500">{Data.Supported}</h1>
          </div>

          <div className="more-det">
            <img src="size.png" />
            <h1 className="font-bold text-slate-600 text-lg">Game file size</h1>
            <h1 className="text-slate-500">{Data.Size}</h1>
          </div>

          <div className="more-det" style={{ borderBottom: "1px solid black" }}>
            <img src="lang.png" />
            <h1 className="font-bold text-slate-600 text-lg">
              Supported Languages
            </h1>
            <h1 className="text-slate-500">{Data.langauges}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
