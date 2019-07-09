import React from "react";
import "./content.css";

export default class Menubar extends React.Component {
  render() {
    return (
      <div className="menubar-container">
        <div>Experience</div>
        <div>Accomplishments</div>
        <div>Recommendations</div>
      </div>
    );
  }
}
