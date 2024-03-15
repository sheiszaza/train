import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Mynintendo(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = {
    title: "My Nintendo Store",
    details: [
      ["Shop all"],
      [
        "Games",
        "Shop all games",
        "Nintendo Switch games",
        "New releases",
        "Sales & deals",
      ],
      [
        "Hardware",
        "Shop all hardware",
        "Nintendo Switch systems",
        "Joy-Con & controllers",
        "Cases & more",
        "Replacement parts",
      ],
      [
        "Merchandise",
        "Shop all merchandise",
        "Apparel & accessories",
        "Home & office",
        "Plush",
        "Toys",
      ],
      [
        "Store exclusives",
        "Shop all store exclusives",
        "Exclusive products",
        "My Nintendo rewards",
        "Nintendo Switch Online offers",
      ],
      [
        "Characters",
        "Shop all characters",
        "Pikmin",
        "Splatoon",
        "Super Mario",
        "The Legend of Zelda",
      ],
      ["Sales & deals"],
    ],
  };
  return (
    <div className="mob-nav-menu-items showmennmobinside">
      <div className="menu-items-mob-inside">
        <div className="logo-menu-mob">
          <div
            className="returnbtn-menu"
            onClick={() => {
              props.showmynin(false);
            }}
          >
            <KeyboardArrowLeftIcon />
          </div>
          <h1 className="text-xl text-slate-700 font-semibold">{data.title}</h1>
          <div
            className="canclebtn-menu"
            onClick={() => {
              props.showmynin(false);
              props.setShowmenu(false);
              props.setShowprofile(false);
            }}
          >
            <CancelIcon />
          </div>
        </div>
        <div style={{ width: "100%" }} className="scrollable-mob">
          {data.details.map((items, index) => {
            return (
              <>
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography>
                      <p className="font-bold mynin-mob p-1.5">{items[0]}</p>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="mynin-items-mob-con">
                        {data.details[index].map((item, index) => {
                          if (index == 0) return;
                          return <p className="mynin-items-mob">{item}</p>;
                        })}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mynintendo;
