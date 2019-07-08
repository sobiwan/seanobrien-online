import React from "react";
import ReactGA from "react-ga";
import Menubar from "../Menubar";
import Sean from "../../../resources/imgaes/sean-menu-photo.png";
import "./scrollpages.css";

export default class StartView extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview("/ContentStart");
  }

  render() {
    return (
      <div className="starting-view-container">
        <Menubar />
        <img id="sean-menu-image" alt="sean" src={Sean} />
      </div>
    );
  }
}
