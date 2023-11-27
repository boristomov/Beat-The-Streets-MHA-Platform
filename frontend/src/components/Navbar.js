import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Data Retrieval Classes
import { UserService } from "../service/userService";
//import { EventEmitter } from "../service/eventEmitter";
//import { DataParse } from "../service/dataParse";

function Navbar() {
  function logoutUser() {
    UserService.logoutUser();
    window.location.reload(false);
  }

  return (
    <nav className="navbar">
      <div className="navbarmenu">
        <ul className="navbarmenu">
          <li className="li">
            <div className="nav-button">
              <Link className="Navbarlink" to="https://www.beatthestreetsca.org/">
                Back to Main Website
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <ul className="navbarmenu">
        <li className="li">
          <div className="nav-button">
            <Link className="Navbarlink" to="/">
              Dashboard
            </Link>
          </div>
        </li>
        <li className="li">
          <div className="nav-button">
            <Link className="Navbarlink" to="/assessments/take-assessment">
              Take Assessment
            </Link>
          </div>
        </li>
        <li className="li">
          <div className="nav-button">
            <Link className="Navbarlink" to="/analytics">
              Analytics
            </Link>
          </div>
        </li>
        <li className="li">
          <div className="nav-button">
            <Link className="Navbarlink" to="/">
              Quick Links
            </Link>
          </div>
        </li>
        <li className="li">
          <div className="nav-button">
            <Link className="Navbarlink" onClick={logoutUser}>
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
