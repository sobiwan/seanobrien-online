import React from "react";
import "./content.css";

export class Menubar extends React.Component {
  render() {
    return (
      <div className="menubar-container">
        Welcome to my site! <span> scroll down </span> to
        learn more about me!
      </div>
    );
  }
}

export class MobileMenu extends React.Component {
  render() {
    return (
      <div className="menubar-container">
        <div>Experience</div>
        <div>Honors</div>
        <div>Recommendations</div>
      </div>
    );
  }
}

const menuOptions = [
  {
    title: "Experience",
    link: "experience"
  },
  {
    title: "Honors",
    link: "honors"
  },
  {
    title: "Recommendations",
    link: "recommendations"
  }
];
