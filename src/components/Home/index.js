import React from "react";
import ReactGA from "react-ga";
import "./home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview("/Home");
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-left-sticky">
          <div className="left-sticky-title">
            Sean O'Brien
          </div>
          <div className="left-sticky-tagline-container">
            {taglines.map(t => {
              return (
                <div className="tagline-text">{t}</div>
              );
            })}
          </div>
        </div>
        <div className="home-right-scrollview" />
      </div>
    );
  }
}

const taglines = ["Tech.", "Travel.", "Techno."];
