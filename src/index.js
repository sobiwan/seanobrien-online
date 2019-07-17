import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import WebFont from "webfontloader";
import App from "./App";
import ReactBreakpoints from "react-breakpoints";

WebFont.load({
  google: {
    families: [
      "sans-serif",
      "Karla:300,400,500,700.700i",
      "PT Sans",
      "Righteous",
      "Patua One",
      "Hind:300,400, 600, 700",
      "Permanent Marker",
      "Raleway"
    ]
  }
});

const breakpoints = {
  break: 1000,
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920
};

const render = Component => {
  ReactDOM.render(
    <ReactBreakpoints breakpoints={breakpoints}>
      <AppContainer>
        <Component />
      </AppContainer>
    </ReactBreakpoints>,
    document.getElementById("root")
  );
};

render(App);
