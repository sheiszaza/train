import React from "react";

function Mynintendostore(props) {
  return (
    <div className={`mynin-cont ${props.show ? "show" : ""}`}>
      <div className="nint-logo">
        <img src="shoplogo.png" />
      </div>

      <div className="nint-logo-zigzag"></div>

      <div className="nin-store-items">
        <div className="nin-store-item">
          <div className="nin-nav-img">
            <img src="storepad.png" />
            <p className="font-bold">Games</p>
          </div>
          <p className="font-light">Nintindo Switch games</p>
          <p className="font-light">New releases</p>
          <p className="font-light">Sales & deals</p>
        </div>

        <div className="nin-store-item">
          <div className="nin-nav-img">
            <img src="storegamepad.png" />
            <p className="font-bold">Hardware</p>
          </div>
          <p className="font-light">Nintendo Switch systems</p>
          <p className="font-light">Joy-Con & controllers</p>
          <p className="font-light">Cases & more</p>
          <p className="font-light">Replacement parts</p>
        </div>

        <div className="nin-store-item">
          <div className="nin-nav-img">
            <img src="storemerch.png" />
            <p className="font-bold">Merchandise</p>
          </div>
          <p className="font-light">Apparel & accessories</p>
          <p className="font-light">Home & office</p>
          <p className="font-light">Plush</p>
          <p className="font-light">Toys</p>
        </div>

        <div className="nin-store-item">
          <div className="nin-nav-img">
            <img src="storeexec.png" />
            <p className="font-bold">Store exclusive</p>
          </div>
          <p className="font-light">Exclusive products</p>
          <p className="font-light">My Nintendo rewards</p>
          <p className="font-light">Nintendo Switch Online offers</p>
        </div>

        <div className="nin-store-item">
          <div className="nin-nav-img">
            <img src="storechar.png" />
            <p className="font-bold">Characters</p>
          </div>
          <p className="font-light">Pikmin</p>
          <p className="font-light">Splatoon</p>
          <p className="font-light">Super Mario</p>
          <p className="font-light">The Legend of Zelda</p>
        </div>

        <div className="nin-store-item">
          <div className="nin-nav-img">
            <img src="storesales.png" />
            <p className="font-bold">Sales & deals</p>
          </div>
        </div>
      </div>
      <button className="shopall-btn">Shop all</button>
    </div>
  );
}

export default Mynintendostore;
