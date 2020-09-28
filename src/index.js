import React from "react";
import ReactDOM from "react-dom";

import RuleList from "./RuleList";

import data from "./data.json";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <RuleList rules={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
