import React from "react";
import ReactDOM from "react-dom";
import Router from "./containers/Router";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import initStore from "./utils/store";

ReactDOM.render(
  <Provider store={initStore()}>
    <HashRouter>
      <MuiThemeProvider>
        <Router />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
