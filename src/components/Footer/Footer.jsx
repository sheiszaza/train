import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const txt = `WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.

    Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online
    
    Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.`;

  return (
    <div className="footer-full-cont">
      <div className="footer-cont">
        <p
          style={{ whiteSpace: "pre-line" }}
          className="text-xs text-slate-600"
        >
          {txt}
        </p>
      </div>

      <div className="footer-red-cont">
        <img src="logo.png" />
        <div className="logos">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
        </div>
      </div>

      <div className="footer-links-full">
        <div className="footer-links">
          <div>
            <h1>About Nintendo</h1>
            <span> Careers</span>
            <span>Corporate Social Responsibility</span>
          </div>

          <div>
            <h1>Shop</h1>
            <span> Games</span>
            <span>Hardware</span>
            <span>Merchandise</span>
            <span>Sales & deals</span>
            <span>Exclusives</span>
            <span>Online service</span>
            <span>Nintendo NY store</span>
          </div>

          <div>
            <h1> My Nintendo Store orders</h1>
            <span>Order details</span>
            <span>Shipping info</span>
            <span>Returns & exchanges</span>
            <span>FAQ</span>
          </div>

          <div>
            <h1>Support</h1>
            <span>Nintendo Switch</span>
            <span>Nintendo Account</span>
            <span>Other systems</span>
            <span>Repairs</span>
            <span>Nintendo product recycling</span>
          </div>

          <div style={{ border: "none", padding: 0 }} className="par-pri-div">
            <div className="foot">
              <h1>Parents</h1>
              <span>Info for parents</span>
              <span>Parental controls</span>
            </div>

            <div className="foot">
              <h1>Privacy</h1>
              <span>Privacy policy</span>
              <span>Cookies and interest-based ads</span>
            </div>
          </div>

          <div>
            <h1>Community</h1>
            <span>Community guidelines</span>
            <span>Online safety principles</span>
          </div>
        </div>
      </div>
      <div className="cert-con">
        <img src="certificate.png" className="certificate" />
      </div>

      <div className="last-footer">
        <h5 className="text-xs text-white ">
          © Nintendo. Games are property of their respective owners. Nintendo of
          America Inc. Headquarters are in Redmond, Washington, USA
        </h5>
        <p className="text-xs text-white">Contact us</p>
        <p className="text-xs text-white">Website feedback</p>
        <p className="text-xs text-white">Terms of Use</p>
        <p className="text-xs text-white">Documents & Policies</p>
        <p className="text-xs text-white aas">
          <img src="americaflag.jpg" className="america" />
          English(United States)
        </p>
      </div>
    </div>
  );
}

export default Footer;
