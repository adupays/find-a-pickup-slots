import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          Une erreur est survenue. <Link to="/">Cliquez ici</Link> pour
          retourner à la page d'accueil ou patientez cinq secondes
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
