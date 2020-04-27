import React from "react";
import { Router, Link } from "@reach/router";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const NotFound = () => (
  <div>
    Cette page n&apos;existe pas. <Link to="/">Cliquez ici</Link> pour retourner
    à la page d&apos;accueil.
  </div>
);

const App = () => {
  return (
    <React.Fragment>
      <Header title="Trouver un créneau !"></Header>
      <Router>
        <Form path="/" />
        <NotFound default />
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default App;
