import React from "react";
import Menubar from "../../Menubar";
import Sean from "../../../../resources/images/sean-menu-photo.png";
import "./startview.css";

export default ({ breakPoint }) => (
  <div
    className={
      breakPoint
        ? "starting-view-container break-scv"
        : "starting-view-container full-scv"
    }
  >
    <Menubar />
    <img id="sean-menu-image" alt="sean" src={Sean} />
  </div>
);
