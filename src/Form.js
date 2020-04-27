import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import useDropdown from "./useDropdown";
const axios = require("axios").default;

const HOST = "http://localhost:1111";

const Form = () => {
  const [shop, ShopDropdown] = useDropdown("Enseigne", "auchan", [
    { value: "auchan", label: "Auchan" },
    { value: "carrefour", label: "Carrefour" },
  ]);
  const [postalCode, updatePostalCode] = useState("");
  const [stores, updateStores] = useState([]);
  const [store, StoreDropdown, updateStore] = useDropdown(
    "Magasin",
    "",
    stores
  );

  function resetForm() {
    updateStores([]);
    updateStore("");
  }

  function subscribe() {
    console.log("subscribe", store);
  }

  function fetchStores() {
    if (!postalCode || !shop) return;
    axios
      .get(`${HOST}/api/stores?postalCode=${postalCode}`)
      .then(function (response) {
        updateStores(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
        updateStores([]);
      });
  }

  useEffect(() => {
    resetForm();
  }, [shop, postalCode]);

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          subscribe();
        }}
      >
        <ShopDropdown />
        <label htmlFor="postalCode">
          Code postal
          <input
            id="postalCode"
            value={postalCode}
            placeholder="Code postal"
            onChange={(e) => updatePostalCode(e.target.value)}
            readOnly={!shop}
          />
        </label>
        <button type="button" onClick={fetchStores}>
          Rechercher
        </button>
        <StoreDropdown />
        <button type="submit" className="form-btn-submit">
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
