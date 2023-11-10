import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  );
}

export default Home;
