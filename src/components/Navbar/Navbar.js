import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={styles.background}>
      <a className="navbar-brand" href="#">
        <span>Navbar</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav active">
          <a className="nav-item nav-link" href="#">
            Home 
          </a>
          <a className="nav-item nav-link" href="#">
            Features
          </a>
          <a className="nav-item nav-link" href="#">
            Pricing
          </a>
          <a className="nav-item nav-link " href="#">
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  background: {
    backgroundcolor: "#e3f2fd"
  }
};