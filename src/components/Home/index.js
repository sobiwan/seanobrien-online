import React from "react";
import ReactGA from "react-ga";
import LeftSticky from "../LeftSticky";
import MainContainer from "../MainContainer";
import "./home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview("/Home");
  }

  render() {
    return (
      <div className="home-container">
        <LeftSticky />
        <MainContainer />
      </div>
    );
  }
}
