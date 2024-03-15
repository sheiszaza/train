import React from "react";

function Others(props) {
  const navItems = {
    Game: [
      {
        photo: "nintendo-switch.png",
        text: `Nintendo Switch games`,
      },
      {
        photo: "megaphone.png",
        text: "New releases",
      },
      {
        photo: "calendar.png",
        text: "Coming soon",
      },
      {
        photo: "gamepadicon.png",
        text: "Shop games",
      },
    ],
    NintindoSwitch: [
      {
        photo: "lineup.avif",
        text: `Nintendo Switch lineup`,
      },
      {
        photo: "exchange.png",
        text: "Compare systems",
      },
      {
        photo: "boxart.avif",
        text: "Online service",
      },
      {
        photo: "procon.avif",
        text: "Accessories",
      },
      {
        photo: "oled.avif",
        text: "Shop Systems",
      },
    ],
    PlatNin: [
      {
        photo: "emotions.png",
        text: `For kids`,
      },
      {
        photo: "smile.png",
        text: "For Parents",
      },
    ],
  };

  let selected = null;

  if (props.show.isGamesOpen) {
    selected = navItems.Game;
  } else if (props.show.isSwitchOpen) {
    selected = navItems.NintindoSwitch;
  } else if (props.show.isPlayNintendoOpen) {
    selected = navItems.PlatNin;
  }

  return (
    <div className={`nav-other-con ${selected ? "showothers" : ""}`}>
      {selected &&
        selected.map((item, index) => (
          <div className="nav-other-item" key={index}>
            <div className="nav-other-img-cont">
              <img src={item.photo} alt={item.text} />
            </div>
            <p className="text-sm font-light">{item.text}</p>
          </div>
        ))}
    </div>
  );
}

export default Others;
