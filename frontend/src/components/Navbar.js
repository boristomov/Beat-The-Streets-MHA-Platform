import React from "react";
// import { Link } from "react-router-dom";
import {Link} from "react-scroll";
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
      <div className="left_part">
        <div className="nav-button">
          <a className="Navbarlink" href="https://www.beatthestreetsca.org/" to="https://www.beatthestreetsca.org/">
            Back to Website
          </a>
        </div>
        <div className="nav-button">
          <Link to="dashboard" spy={true} smooth={true} offset={-50} duration={1000} className="Navbarlink"> Dashboard</Link>
        </div>
        <div className="nav-button">
          <Link className="Navbarlink" to="/">
            Quick Links
          </Link>
        </div>
      </div>
      <div className="right_part">
        <div className="nav-button">
          <Link className="logout" onClick={logoutUser}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
