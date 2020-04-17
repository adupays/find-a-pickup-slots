import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import useDropdown from "./useDropdown";

const Form = () => {
  const [supermarket, SupermarketDropdown] = useDropdown("Enseigne", "Auchan", [
    "Auchan",
  ]);
  const [location, LocationDropdown] = useDropdown("Ville", "", []);

  async function subscribeToNotifications() {
    console.log("subscribeToNotifications");
  }

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        subscribeToNotifications();
      }}
    >
      <SupermarketDropdown required />
      <LocationDropdown />
      <button className="form-btn-submit">S'inscrire aux notifications</button>
    </form>
  );
};

export default function FormErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Form {...props} />
    </ErrorBoundary>
  );
}
