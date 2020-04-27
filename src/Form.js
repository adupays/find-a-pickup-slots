import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import useDropdown from "./useDropdown";
import supermarkets from "../mocks/supermarkets";

const Form = () => {
  const [supermarket, SupermarketDropdown] = useDropdown("Enseigne", "Auchan", [
    "Auchan",
    "Carrefour",
  ]);
  const [locations, updateLocations] = useState([]);
  const [location, LocationDropdown, updateLocation] = useDropdown(
    "Ville",
    "",
    locations
  );

  function subscribeToNotifications() {
    console.log("subscribe To Notifications");
  }

  useEffect(() => {
    updateLocations([]);
    updateLocation("");

    supermarkets.then((list) => {
      const locationStrings = list[supermarket].map(({ name }) => name);
      updateLocations(locationStrings);
    }, console.error);
  }, [supermarket]);

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          subscribeToNotifications();
        }}
      >
        <SupermarketDropdown required />
        <LocationDropdown required />
        <button className="form-btn-submit">
          S&apos;inscrire aux notifications
        </button>
      </form>
    </div>
  );
};

export default function FormErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Form {...props} />
    </ErrorBoundary>
  );
}
