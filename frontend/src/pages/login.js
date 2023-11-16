import React, { useState } from "react";

import { UserService } from "../service/userService";
// import { EventEmitter } from "../service/eventEmitter";

import "./login.css"

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    // e.preventDefault();
    UserService.loginUser(credentials);
    window.location.reload(false);
  };
  
  return (
    <div className="root">
      <div className="page-parent">
        <div className="instructions">
            <h3>Login</h3>
            <p>NOTE: TYPE RANDOM STUFF AND CLICK SUBMIT TO GET PAST THIS PAGE</p>
            <p>NOTE: MAKE SURE TO RUN THE BACKEND LOCALLY OR THIS WILL NOT WORK</p>
            <p>To Run The Backend: cd into backend, run "npm install", then run "node server.mjs"</p>
        </div>
        <div className="page-header-container">
          <div className="header-container">
            <div className="logo">
              IMAGE HERE
            </div>
            <div className="BTS-header">
              <div className="BTS-title">
                TITLE HERE
              </div>
              <div className="BTS-description">
                desc here
              </div>
            </div>
          </div>
        </div>
        <div className="login-form">
          <form onSubmit={handleLogin} >
            <h3>Sign in</h3>
            <div>Welcome back!</div>
            <div>
              <label for="username">Login ID</label><br/>
              <input
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setCredentials({
                    username: e.target.value,
                    password: credentials.password,
                  })
                }
              />
            </div>
            <div>
              <label for="password">Password</label><br/>
              <input
                id="password"
                type="text"
                placeholder="Password"
                onChange={(e) =>
                  setCredentials({
                    username: credentials.username,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <button className="submit-button" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
