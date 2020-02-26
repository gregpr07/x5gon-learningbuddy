import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/x5buddy.png";

export const Navbar = props => {
  const [authTokens] = useState(localStorage.getItem("user"));

  const pages = ["Home", "Playlists", "Social", "Search", "My profile"];
  const links = ["/", "/playlists", "/social", "/search", "/profile"];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-brand">
        <img src={logo} height="30" alt="logo" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          {links.map((link, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                className={`nav-link fadeIn animated delay-${index}s`}
                activeClassName="active"
                exact
                to={link}
              >
                {pages[index]}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="navbar-nav ml-auto">
          {authTokens ? (
            <li className="nav-item">
              <a className={"nav-link"} href="/logout">
                Log out
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <Link className={"nav-link"} to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
