import React from "react";
import "./content.css";
import StartView from "./ScrollPages/StartView/index";
import Experience from "./ScrollPages/Experience/index";
import Accomplishments from "./ScrollPages/Accomplishments";
import Recommendations from "./ScrollPages/Recommendations";

export default class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <span>
          <StartView />
        </span>
        <span>
          <Experience />
        </span>
        <span>
          <Accomplishments />
        </span>
        <span>
          <Recommendations />
        </span>
      </div>
    );
  }
}
