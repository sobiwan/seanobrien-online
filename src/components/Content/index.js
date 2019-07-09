import React from "react";
import "./content.css";
import StartView from "./ScrollPages/StartView";
import Experience from "./ScrollPages/Experience/index";

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
          <StartView />
        </span>
      </div>
    );
  }
}
