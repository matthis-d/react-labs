import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import appStore from "./appStore";
import RuleListContainer from "./RuleListContainer";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={appStore}>
    <RuleListContainer />
  </Provider>,
  document.getElementById("root"),
);
