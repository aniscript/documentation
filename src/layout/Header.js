import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <h2>
          ani<span>Script</span>
        </h2>
      </Link>
    </nav>
  );
};

export default Header;
