import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { UserService } from "./service/userService";
import { EventEmitter } from "./service/eventEmitter";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Analytics from "./pages/analytics";
import Questions from "./pages/questions";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  


  const [loggedIn, setLoggedIn] = useState(false);
  EventEmitter.subscribe("getLoggedIn", setLoggedIn);
  if (UserService.checkLoggedIn() && loggedIn === false) {
    UserService.eventDispatch();
  }
  
  if (!loggedIn) {

    return <GoogleOAuthProvider clientId="1093724845964-d6424avb3llqao12ek91umnn6m7cin6g.apps.googleusercontent.com">
              <Login/>
            </GoogleOAuthProvider>;
  }

  return (
    
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route
          path="/home"
          element={<Home/>}
        ></Route>
        <Route
          path="/questions"
          element={<Questions/>}
        ></Route>
        <Route
          path="/analytics"
          element={<Analytics/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
