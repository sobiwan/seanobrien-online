import React from "react";
import ReactGA from "react-ga";
import Profile from "../Profile";
import Content from "../Content";
import "./main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview("/Main");
  }

  render() {
    return (
      <div className="home-container">
        <Profile />
        <Content />
      </div>
    );
  }
}
