import React from "react";
import { Link, NavLink } from "react-router-dom";

const returnIsActive = (isActive) => (isActive ? "active" : "");

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 rounded-3">
      <Link className="navbar-brand" to="/">
        useContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-link ${returnIsActive(isActive)}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${returnIsActive(isActive)}`}
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${returnIsActive(isActive)}`}
            to="/about"
          >
            About
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
