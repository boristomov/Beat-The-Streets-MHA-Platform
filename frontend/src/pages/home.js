import React from "react";
import { Link } from "react-router-dom";


function Home({ userService }) {
  return (
    <div>
      <p>
        HOME
      </p>
      <Link to="/assessments/take-assessment">take assessment</Link>
      <p>Hi, { userService.getUserData().username }</p>
    </div>
  );
}

export default Home;
