import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header title="Find a pickup slot!"></Header>
      <Router>
        <Form path="/" />
      </Router>
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
