import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./homepage.style.css";

// Data Retrieval Classes
import { UserService } from "../service/userService";
import { EventEmitter } from "../service/eventEmitter";
import { DataParse } from "../service/dataParse";



function Home() {
  // Data Retrieval Setup
  // const [userData, setUserData] = useState(null);
  // EventEmitter.subscribe("getUserData", setUserData);
  // if (userData == null) {
  //   UserService.eventDispatch();
  // }
  // const dataParse = new DataParse(userData);

  // function logoutUser() {
  //   UserService.logoutUser();
  //   window.location.reload(false);
  // }
  

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
   <div class = {styles.page}>
     <nav class = {styles.navbar}>
        <ul class = {styles.navbarmenu}>
          <li><a href = "https://www.beatthestreetsca.org/">Back to Website</a></li>

          <li><a href = "#">Dashboard</a></li>

          <li><a href = "#">Quick Links</a></li>
        </ul>
        {/* <button type = {button} className = {styles.navbar__button} style = "color:white"> Profile</button>  */}

     </nav>

     <div class = {styles.gradient}>
        <div class = {styles.maincontent}>
          <br></br>
          <h2 style = 'color:white'> Welcome Back!</h2>
          <div className = {styles.maintab}>
            <div class= {styles.rectanglecompleted}>
              <div><h3>Completed</h3></div>
            </div>
            <div class={styles.rectangleassigned}>
              <div><h3>Assignments</h3></div>
            </div>
      </div>

      <section class={styles.homepagecopy2child}></section>
        <img class={styles.vectoricon} alt="" src="http://localhost:3000/vector.svg" />
         <div class={styles.framparent}>
            <div class= {styles.frame}>
               <img class={styles.image4icon} alt="" src="http://localhost:3000/image-4@2x.png" />
            </div>
            <div class= {styles.frame1}>
               <div class = {styles.frame2}>
                 <u class={styles.beatthestreets}>Beat the Streets, Inc.</u>
                 <u class={styles.youngadultemployment}
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
