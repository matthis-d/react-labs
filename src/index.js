import React from "react";
import ReactDOM from "react-dom";

import RuleList from "./RuleList";

import data from "./data.json";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<RuleList rules={data} />, document.getElementById("root"));
