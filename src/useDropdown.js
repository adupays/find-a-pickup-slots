import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(
    (defaultState && defaultState.value) || defaultState || ""
  );
  const id = `use-dropdown-${label.replace(/ /g, "").toLowerCase()}`;
  const Dropdown = (props) => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => updateState(e.target.value)}
        onBlur={(e) => updateState(e.target.value)}
      >
        {props.required ? null : <option />}
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
