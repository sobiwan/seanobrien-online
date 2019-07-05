import React from "react";
import ScrollSnap from "scroll-snap";
import "./main.css";
import LeftSticky from "../LeftSticky";

const snapConfig = {
  scrollSnapDestination: "0% 110%",
  scrollTimeout: 100,
  scrollTime: 300
};

export default class MainContainer extends React.Component {
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
        <LeftSticky />
        <LeftSticky />
        <LeftSticky />
      </div>
    );
  }
}
