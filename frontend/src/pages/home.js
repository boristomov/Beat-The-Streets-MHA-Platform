import React, { useState } from 'react';
import { Link } from "react-router-dom";
import homestyles from "./homepagestyle.css";


// Data Retrieval Classes
import { UserService } from "../service/userService";
import { EventEmitter } from "../service/eventEmitter";
import { DataParse } from "../service/dataParse";



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
  

  // return (
  //   <div>
  //     <p>
  //       HOME
  //     </p>
  //     <button onClick={logoutUser}>
  //       Logout
  //     </button>
  //     <p></p>
  //     <Link to="/analytics">see analytics page</Link>
  //     <p></p>
  //     <Link to="/assessments/take-assessment">take assessment page</Link>
  //     { userData != null && <p>Hi, { userData.username }</p>}
  //     { userData != null && dataParse.assessmentExists() && <p>Date of most recent assessment: { dataParse.getMostRecentAssessments().date }</p>}
  //   </div>
  // );

  return (
    <div className="homepage">
      <nav className="navbar">
        <ul className="navbarmenu">
          <li className="li"><a href = "https://www.beatthestreetsca.org/">Back to Website</a></li>

          <li className="li"><a href = "#">Dashboard</a></li>

          <li className="li"><a href = "#">Quick Links</a></li>
          <li className="li">
            <Link to="/analytics">see analytics page</Link>
          </li>
          <li className="li">
            <Link to="/assessments/take-assessment">take assessment page</Link>
          </li>
        </ul>
        {/* <button type = {button} className = {styles.navbar__button} style = "color:white"> Profile</button>  */}
      </nav>

      <div className="gradient">
        <div className="maincontent">
          <h2 > Welcome Back!</h2>
          
          <div className="rectanglecompleted">
            <div><h3>Completed</h3></div>
          </div>
          <div className="rectangleassigned">
            <div><h3>Assignments</h3></div>
          </div>
          
          <div className='assessments-container'>
            <section className="homepagecopy2child"></section>
            <div className="framparent">
              <div className="frame">
                <img className="image4icon" alt="" src="http://localhost:3000/image-4@2x.png" />
              </div>
              <div className="frame1">
                <div className="frame2">
                  <u className="beatthestreets">Beat the Streets, Inc.</u>
                  <u className="youngadultemployment"> Young Adult Employment, Vocational & Life Services</u>
                </div>
              </div>
            </div>
          </div>
          {/* Assessments container finishes here */}
        </div> 
        {/* MainContent finishes here   */}
        <img className="vectoricon" alt="" src="http://localhost:3000/vector.svg" />
      </div>
    </div>
  );
}

export default Home;
