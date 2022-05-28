import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          Navbar
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              All Posts
            </Link>
            <Link className="nav-link" to="/article">
              Article
            </Link>
            <Link className="nav-link" to="/event">
              Event
            </Link>
            <Link className="nav-link" to="/education">
              Education
            </Link>
            <Link className="nav-link" to="/job">
              Job
            </Link>
            {/* <Link className="nav-link disabled">Disabled</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
