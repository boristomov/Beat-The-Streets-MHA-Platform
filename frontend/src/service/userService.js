import { useState } from "react";

import { environment } from "../environment"

export class UserService {
  constructor() {
    this.isLoggedIn = this.checkLoggedIn();
  }

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
}

export function useUserService() {
  const [userService] = useState(new UserService());
  return userService;
}
