// src/components/NavigationBar.js

import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              SOS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page1">
              Course
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page2">
              Iceberg detection system
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page3">
              Torpedo launch system
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
