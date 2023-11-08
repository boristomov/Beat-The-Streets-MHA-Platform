import React, { useState } from "react";
import { Link } from "react-router-dom";

import { UserService } from "../service/userService";
import { EventEmitter } from "../service/eventEmitter";


function Home() {
  const [userData, setUserData] = useState(null);
  EventEmitter.subscribe("getUserData", setUserData);
  UserService.eventDispatch();

  if (userData != null && userData.assessmentData[0]) {
    console.log(userData.assessmentData[0]["questions"][0]["user_response"]);
  }
  //console.log(userData.assessmentData[0]["user_response"]);

  return (
    <div>
      <p>
        HOME
      </p>
      <Link to="/analytics">see analytics page</Link>
      <p></p>
      <Link to="/assessments/take-assessment">take assessment page</Link>
      { userData != null && <p>Hi, { userData.username }</p>}
      { userData != null && userData.assessmentData[0] && <p>Response to first question: { String(userData.assessmentData[0]["questions"][0]["user_response"]) }</p>}
    </div>
  );
}

export default Home;
