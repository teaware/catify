import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar is-dark" style={{ marginBottom: "2em" }}>
      <div className="navbar-brand">
        <Link
          to="/"
          style={{
            margin: "0 auto",
            padding: "10px"
          }}
          className="has-text-white is-size-3"
        >
          {siteTitle} 🐈
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
