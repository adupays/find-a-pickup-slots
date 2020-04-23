import React from "react";
import ReactDOM from "react-dom";
import { rehydrateMarks } from "react-imported-component";

import App from "./App";

const element = document.getElementById("root");

if (process.env.NODE_ENV === "production") {
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(<App />, element);
  });
} else {
  ReactDOM.render(<App />, element);
}

if (module.hot) {
  module.hot.accept();
}
