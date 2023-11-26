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
    <div className={homestyles.homepage}>
      <p className={homestyles.text}> Hi there</p>
      <nav className={homestyles.navbar}>
        <ul className={homestyles.navbarmenu}>
          <li className={homestyles.li}><a href = "https://www.beatthestreetsca.org/">Back to Website</a></li>

          <li className={homestyles.li}><a href = "#">Dashboard</a></li>

          <li className={homestyles.li}><a href = "#">Quick Links</a></li>
        </ul>
        {/* <button type = {button} className = {styles.navbar__button} style = "color:white"> Profile</button>  */}
      </nav>

      <div className={homestyles.gradient}>
      <p> Hi here</p>
        <div className={homestyles.maincontent}>
          <h2 > Welcome Back!</h2>
          <div className={homestyles.maintab}>
            <div className={homestyles.rectanglecompleted}>
              <div><h3>Completed</h3></div>
            </div>
            <div className={homestyles.rectangleassigned}>
              <div><h3>Assignments</h3></div>
            </div>
          </div> 

       <section className={homestyles.homepagecopy2child}></section>
        <img className={homestyles.vectoricon} alt="" src="http://localhost:3000/vector.svg" />
         <div className={homestyles.framparent}>
            <div className={homestyles.frame}>
               <img className={homestyles.image4icon} alt="" src="http://localhost:3000/image-4@2x.png" />
            </div>
            <div className={homestyles.frame1}>
               <div className={homestyles.frame2}>
                 <u className={homestyles.beatthestreets}>Beat the Streets, Inc.</u>
                 <u className={homestyles.youngadultemployment}
                   >Young Adult Employment, Vocational & Life Services</u>
               </div>
             </div>
         </div>
        </div>
      </div> 
    </div>
  );
}

export default Home;
