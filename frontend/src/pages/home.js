import React, { useState } from "react";
import { Link } from "react-router-dom";

// Data Retrieval Classes
import { UserService } from "../service/userService";
import { EventEmitter } from "../service/eventEmitter";
import { DataParse } from "../service/dataParse";
import styles from "./homepage_style.css"


function Home() {
  // Data Retrieval Setup
  const [userData, setUserData] = useState(null);
  EventEmitter.subscribe("getUserData", setUserData);
  if (userData == null) {
    UserService.eventDispatch();
  }
  const dataParse = new DataParse(userData);

  function logoutUser() {
    UserService.logoutUser();
    window.location.reload(false);
  }


  return (
     <div>
      <p>
        HOME
      </p>
      <button onClick={logoutUser}>
        Logout
      </button>
      <p></p>
      <Link to="/analytics">see analytics page</Link>
      <p></p>
      <Link to="/assessments/take-assessment">take assessment page</Link>
      { userData != null && <p>Hi, { userData.username }</p>}
      { userData != null && dataParse.assessmentExists() && <p>Date of most recent assessment: { dataParse.getMostRecentAssessments().date }</p>}
    </div> 
    /*
    <div>
      <nav class = "navbar">
          <ul class = "navbar__menu">
              <li><a href = "https://www.beatthestreetsca.org/">Back to Website</a></li>
              <li><a href = "#">Dashboard</a></li>
              <li><a href = "#">Quick Links</a></li>
          </ul>
          {/* <button type = {button} className = {styles.navbar__button} style = "color:white"> Profile</button> 
           }
      </nav>

      <div class = "gradient">
          <div class = "main__content">
              <br></br>
              <h2 style = 'color:white'> Welcome Back!</h2>
              <div className = {styles.main__tab}>
                  <div class="rectangle__completed">
                      <div><h3>Completed</h3></div>
                  </div>
                  <div class="rectangle__assigned">
                      <div><h3>Assignments</h3></div>
                  </div>
              </div>
              <section class="home-page-copy-2-child"></section>
              <img class="vector-icon" alt="" src="./public/vector.svg" />
          </div>
          <div class="frame-parent">
              <div class="frame">
                <img class="image-4-icon" alt="" src="./public/image-4@2x.png" />
              </div>
              <div class="frame1">
                <div class="frame2">
                  <u class="beat-the-streets">Beat the Streets, Inc.</u>
                  <u class="young-adult-employment"
                    >Young Adult Employment, Vocational & Life Services</u>
                </div>
              </div>
          </div>
        </div>
      </div> */

  );
}

export default Home;
