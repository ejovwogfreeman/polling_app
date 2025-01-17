import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create_poll">
                Create Poll
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/polls">
                All Polls
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create_user">
                Create User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/votes">
                Vote Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <span
                  className="btn btn-primary btn-sm w-100 w-sm-auto"
                  style={{ marginTop: "-5px" }}
                >
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
