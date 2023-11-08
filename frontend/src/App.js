import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useUserService } from "./service/userService";
import Home from "./pages/home";
import Login from "./pages/login";
import Analytics from "./pages/analytics";
import Questions from "./pages/questions";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const userService = useUserService();
  // if (userService.checkLoggedIn() && loggedIn === false) {
  //   setLoggedIn(true);
  // }
  // if (!loggedIn) {
  //   return <Login userService={userService} />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home userService={userService} />}></Route>
        <Route
          path="/home"
          element={<Home userService={userService} />}
        ></Route> */}
        {/* <Route
          path="/assessments/take-assessment"
          element={<Questions userService={userService} />}
        ></Route> */}
        {/* <Route
          path="/"
          element={<Questions userService={userService} />}
        ></Route> */}
        <Route
          path="/"
          element={<Analytics userService={userService} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
