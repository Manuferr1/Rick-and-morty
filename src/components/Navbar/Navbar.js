import React from "react";
import { NavLink, Link } from "react-router-dom";
import  "../../App.scss"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fw-bold p-3">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          <h1 className="text-center my-2 fw-bold text-dark">
            {" "}
            Rick & Morty
            <span className="text-primary"> Wiki </span>
          </h1>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5">
              <NavLink to="/" className="nav-link text-dark" activeClassName="active">
                Characters
              </NavLink>
              <NavLink to="/episodes" className="nav-link text-dark">
                Episodes
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-link text-dark"
                to="/location"
              >
                Location
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  background: {
    backgroundcolor: "#FFF",
  },
};
