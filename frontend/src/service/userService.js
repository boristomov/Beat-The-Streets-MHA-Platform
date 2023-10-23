import { useState } from "react";

import { environment } from "../environment"

class UserService {
  checkLoggedIn() {
    const token = this.getToken();
    if (token && true) { // TODO: check if token is valid
      return true;
    } else {
      if (token) {
        sessionStorage.removeItem("token");
      }
      return false;
    }
  }

  getToken() {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  }

  async loginUser(credentials) {
    const userToken = await fetch(`${environment.url}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());

    sessionStorage.setItem("token", JSON.stringify(userToken));
    this.isLoggedIn = this.checkLoggedIn();
  }

  async getUserData() {
    const token = { token: this.getToken() };
    const data = await fetch(`${environment.url}/get_user_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(token),
    }).then((data) => data.json());
    return data
  }

  async submitAssessmentData(data) {
    const token = this.getToken();
    const newData = { token: token, data: data };
    await fetch(`${environment.url}/submit_assessment_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  }

}

export function useUserService() {
  const [userService] = useState(new UserService());
  return userService;
}
