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
      <ul className="navbarmenu">
        <li className="li">
          <Link className="Navbarlink" to="https://www.beatthestreetsca.org/">
            Back to Main Website
          </Link>
        </li>
        <li className="li">
          <Link className="Navbarlink" to="/">
            Dashboard
          </Link>
        </li>
        <li className="li">
          <Link className="Navbarlink" to="/assessments/take-assessment">
            Take Assessment
          </Link>
        </li>
        <li className="li">
          <Link className="Navbarlink" to="/analytics">
            Analytics
          </Link>
        </li>
        <li className="li">
          <Link className="Navbarlink" to="/">
            Quick Links
          </Link>
        </li>
      </ul>
      <div className="profile-wrapper">
        <button className="navbarbutton" onClick={logoutUser}> Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;