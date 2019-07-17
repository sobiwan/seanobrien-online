import React from "react";
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
    <div className="header-sv">
      Welcome to my site! <span> scroll down </span> to
      learn more about me!
    </div>
    <img id="sean-menu-image" alt="sean" src={Sean} />
  </div>
);
