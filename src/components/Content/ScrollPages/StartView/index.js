import React from "react";
import Menubar from "../../Menubar";
import Sean from "../../../../resources/images/sean-menu-photo.png";
import "./startview.css";

export default () => (
  <div className="starting-view-container">
    <Menubar />
    <img id="sean-menu-image" alt="sean" src={Sean} />
  </div>
);
