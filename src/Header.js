import React from "react";
import { Link } from "@reach/router";

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header-container">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  );
};

export default Header;
