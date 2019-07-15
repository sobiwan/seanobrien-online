import React from "react";
import "./content.css";
import StartView from "./ScrollPages/StartView/index";
import Experience from "./ScrollPages/Experience/index";
import Accomplishments from "./ScrollPages/Accomplishments";
import Recommendations from "./ScrollPages/Recommendations";

export default class Content extends React.Component {
  render() {
    const { breakPoint } = this.props;
    return (
      <div
        className={
          breakPoint ? "container break" : "container full"
        }
      >
        <span
          style={
            breakPoint
              ? { minHeight: "50vh" }
              : { minHeight: "100vh" }
          }
        >
          <StartView />
        </span>
        <span>
          <Experience
            breakPoint={breakPoint ? true : false}
          />
        </span>
        <span
          style={
            breakPoint
              ? { minHeight: "70vh" }
              : { minHeight: "100vh" }
          }
        >
          <Accomplishments />
        </span>
        <span>
          <Recommendations />
        </span>
      </div>
    );
  }
}
