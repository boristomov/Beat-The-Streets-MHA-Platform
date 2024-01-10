import React, { useState } from "react";
import { UserService } from "../service/userService";
import { useEffect } from "react";
import styles from "./login.module.css";
import Particles from "../components/Particles";
import BTS_inc from "../assets/login/BTS_inc.svg"
import bubbles_bottom_left from "../assets/login/bubbles_bottom_left.svg"
import bubbles_top_right from "../assets/login/bubbles_top_right.svg"
// import buildings_login from "../assets/login/buildings_login.svg"
import facebook_login from "../assets/login/facebook_login.svg"
import google_login from "../assets/login/google_login.svg"
import linkedin_login from "../assets/login/linkedin_login.svg"
import login_back_button from "../assets/login/login_back_button.svg"
import login_middle_separator from "../assets/login/login_middle_separator.svg"
//import login_sign_in from "../assets/login/login_sign_in.svg"
import BTS_small_logo from "../assets/login/BTS_small_logo.png"
import request_support from "../assets/login/request_support.svg"
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';


const Login = () => {
  const [user, setUser] = useState({});

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  
  const handleLogin = async (e) => {
    if (e) {
      e.preventDefault();
    }
    UserService.loginUser(credentials);
  };



  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google login successful. Token response:", tokenResponse);

      // Decode the JWT ID Token
      var userDecodedToken = jwtDecode(tokenResponse.access_token);
      console.log("Decoded user object:", userDecodedToken);

      // setUser(userObject);
      // setCredentials({
      //   username: userObject.name,
      //   password: "none",
      // });

      // Perform login logic
      // await handleLogin()
    }
  });
  


  return (
    <div className={styles.locofy_login}>
      {/* <div id="signInDiv"></div> */}
      
      <div className={styles.header}></div>
      {/* <img className={styles.buildings_login} alt="" src={buildings_login}/> */}
      <div className={styles.sign_in_parent}>
        {/* BUBBLES */}
        <img className={styles.bubbles1} alt="" src={bubbles_top_right} />
        <img className={styles.bubbles2} alt="" src={bubbles_bottom_left} />
        {/* HEADER SIGN IN LABEL*/}
          <div className={styles.frame_child} >
            <h3 className={styles.sign_in}>Sign In</h3>
          </div>
        {/* MAIN CONTENT */}
        <div className={styles.background}>
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.content}>
              {/* LOGO */}
              <img className={styles.BTSlogo} alt="" src={BTS_small_logo} />
              {/* FORM */}
              <b className={styles.label}> Username </b>
              <input
                className={styles.input}
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
              <b className={styles.label}> Password </b>
              <input
                className={styles.input}
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
              <button className={styles.submit_button} type="submit">
                Sign In
              </button>
            </div>
          </form>
          <img className={styles.line} alt="" src={login_middle_separator} />
          <b className={styles.alt_text}> Or Sign Up with</b>
        </div>
      </div>
      {/* SING UP OPTIONS */}
      <div className={styles.icons}>
        <img className={styles.google_icon} alt="" src={google_login}  onClick={() => login()}>
        </img>
        <img className={styles.facebook_icon} alt="" src={facebook_login} />
        <img className={styles.linkedin_icon} alt="" src={linkedin_login} />
      </div>
      <img className={styles.technical_support_icon} alt="" src={request_support}/>
      <img className={styles.copyright_icon} alt="" src={BTS_inc} />
      <img className={styles.go_back_icon} alt="" src={login_back_button} />
      {/* <div id="particles-js">
        <Particles/>
      </div> */}
      
    </div>
  );    
};

export default Login;
