import React, { useState } from "react";

import { UserService } from "../service/userService";

import styles from "./login.module.css";

import BTS_inc from "../assets/login/BTS_inc.svg"
import bubbles_bottom_left from "../assets/login/bubbles_bottom_left.svg"
import bubbles_top_right from "../assets/login/bubbles_top_right.svg"
//import buildings_login from "../assets/login/buildings_login.svg"
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
      <div className={styles.sign_in_parent}>
        <img className={styles.frame_icon130} alt="" src={bubbles_top_right} />
        <img className={styles.frame_icon140} alt="" src={bubbles_bottom_left} />
        <div className={styles.frame00} />
        <div className={styles.frame20}>
          <div className={styles.frame_child} />
        </div>
        <div className={styles.frame30}>
          <h3 className={styles.sign_in}>Sign in</h3>
        </div>
        <div className={styles.frame40}>
          <b className={styles.sign_up_with}>Sign up with</b>
        </div>
        <div className={styles.frame60}>
          <b className={styles.username}>Username</b>
        </div>
        <div className={styles.frame70}>
          <b className={styles.username}>Password</b>
        </div>
        <img className={styles.linkedin_icon} alt="" src={linkedin_login} />
        <div className={styles.frame80}>
          <img className={styles.facebook_icon} alt="" src={facebook_login} />
        </div>
        <form onSubmit={handleLogin}>
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
        </form>
        <div className={styles.frame110}>
          <div className={styles.rectangle_div} />
        </div>
        <div className={styles.frame120}>
          <div className={styles.google_icon}>
            <img alt="" src={google_login} />
          </div>
        </div>
        <img className={styles.frame_icon90} alt="" src={login_middle_separator} />
        <div className={styles.frame140}>
          <img className={styles.image_40_icon} alt="" src={BTS_small_logo} />
        </div>
      </div>
      <div className={styles.frame160}>
        <img className={styles.copyright_icon} alt="" src={BTS_inc} />
      </div>
      <div className={styles.frame170}>
        <img className={styles.technical_support_icon} alt="" src={request_support}
        />
      </div>
      <div className={styles.frame180}>
        <div className={styles.union_parent}>
          <img className={styles.go_back_icon} alt="" src={login_back_button} />
        </div>
      </div>
    </div>
  );
};

export default Login;
