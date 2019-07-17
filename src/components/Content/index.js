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
        <span>
          {!breakPoint && (
            <StartView
              breakPoint={breakPoint ? true : false}
            />
          )}
        </span>
        <span>
          <Experience
            breakPoint={breakPoint ? true : false}
          />
        </span>
        <span>
          <Accomplishments
            breakPoint={breakPoint ? true : false}
          />
        </span>
        <span>
          <Recommendations />
        </span>
      </div>
    );
  }
}
