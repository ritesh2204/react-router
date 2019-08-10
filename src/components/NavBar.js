import React from "react";
import { Link } from "react-router-dom";

const Mynavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        React-router
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home<span class="sr-only">(current)</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/ritu">
              About us
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/rizwan">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Mynavbar;
