import React, { useState } from "react";

import { UserService } from "../service/userService";

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
//<img className={styles.frame_icon} alt="" src={buildings_login} />
//<b className={styles.or}>or</b>
const Login = () => {
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
    <div className={styles.locofy_login}>
      <div className={styles.header}>

      </div>
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
        <img className={styles.google_icon} alt="" src={google_login} />
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

{/*       
        <div className={styles.frame40}>
          <b className={styles.sign_up_with}>Sign up with</b>
        </div>
        <div className={styles.frame60}>
          <b className={styles.username}>Username</b>
        </div>
        <div className={styles.frame70}>
          <b className={styles.username}>Password</b>
        </div> */}
        
        {/* <img className={styles.linkedin_icon} alt="" src={linkedin_login} />
        <div className={styles.frame80}>
          <img className={styles.facebook_icon} alt="" src={facebook_login} />
        </div> */}
        {/* <form onSubmit={handleLogin}>
          <div className={styles.frame90}>
            <div className={styles.frame_item}>
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
          </div>
          <div className={styles.frame100}>
            <div className={styles.frame_item}>
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
          </div>
          <div className={styles.frame10}>
            <button className={styles.submit_button} type="submit">
              Sign in
            </button>
          </div>
        </form> */}
        {/* <div className={styles.frame110}>
          <div className={styles.rectangle_div} />
        </div>
        <div className={styles.frame120}>
          <div className={styles.google_icon}>
            <img alt="" src={google_login} />
          </div>
        </div>
        <img className={styles.frame_icon90} alt="" src={login_middle_separator} /> */}
        {/* <div className={styles.frame140}>
          <img className={styles.image_40_icon} alt="" src={BTS_small_logo} />
        </div> */}
      
      
      
};

export default Login;
