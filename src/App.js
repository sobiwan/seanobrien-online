import React from "react";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import Navigator from "./navigation";
// import initFirebase from './state/firebase/initFirebase';
import store from "./state/store";
// import environment from './state/environment';

// const { googleAnalytics } = environment;

class App extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-142961207-1");
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
