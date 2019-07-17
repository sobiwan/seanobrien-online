import React from "react";
import ReactGA from "react-ga";
import { Media } from "react-breakpoints";
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
        <Media>
          {({ breakpoints, currentBreakpoint }) => (
            <Profile
              styles={
                breakpoints[currentBreakpoint] >
                breakpoints.break
                  ? { width: "35vw" }
                  : { width: "100%" }
              }
            />
          )}
        </Media>
        <Media>
          {({ breakpoints, currentBreakpoint }) => (
            <Content
              breakPoint={
                breakpoints[currentBreakpoint] >
                breakpoints.break
                  ? false
                  : true
              }
            />
          )}
        </Media>
      </div>
    );
  }
}
