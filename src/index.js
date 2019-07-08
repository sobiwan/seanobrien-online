import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: [
      "sans-serif",
      "Karla:300,400,500,700.700i",
      "PT Sans",
      "Righteous",
      "Patua One",
      "Hind:300",
      "Permanent Marker",
      "Raleway"
    ]
  }
});

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);
