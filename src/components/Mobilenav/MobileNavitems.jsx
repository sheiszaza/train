import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function MobileNavitems(props) {
  return (
    <div className="mob-nav-menu-items showmennmobinside">
      <div className="menu-items-mob-inside">
        <div className="logo-menu-mob">
          <div
            className="returnbtn-menu"
            onClick={() => {
              props.setSelect();
            }}
          >
            <KeyboardArrowLeftIcon />
          </div>
          <h1 className="text-xl text-slate-700 font-semibold">
            {props.selected[0]}
          </h1>
          <div
            className="canclebtn-menu"
            onClick={() => {
              props.setSelect();
              props.setShowmenu(false);
              props.setShowprofile(false);
            }}
          >
            <CancelIcon />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          {props.selected.map((item, index) => {
            if (index == 0) return;
            return (
              <div key={index} className="items-mob-div-inside">
                <p className=" font-semibold">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileNavitems;
