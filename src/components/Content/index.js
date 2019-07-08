import React from "react";
import ScrollSnap from "scroll-snap";
import "./content.css";
import Profile from "../Profile";
import StartView from "./ScrollPages/StartView";

const snapConfig = {
  scrollSnapDestination: "0% 106%",
  scrollTimeout: 100,
  scrollTime: 300
};

export default class Content extends React.Component {
  container = React.createRef();

  bindScrollSnap() {
    function callback() {
      // optional callback
    }

    const element = this.container.current;
    const snapObject = new ScrollSnap(element, snapConfig);
    snapObject.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <StartView />
        <Profile />
        <Profile />
      </div>
    );
  }
}
