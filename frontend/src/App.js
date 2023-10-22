import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useUserService } from "./service/userService"
import Home from "./pages/home";
import Login from "./pages/login" 

function App() {
  const userService = useUserService();
  if (!userService.isLoggedIn) {
    return <Analytics userService={userService}/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userService={userService}/>}></Route>
        <Route path="/home" element={<Home userService={userService}/>}></Route>
        <Route path="/assessments/take-assessment" element={<Questions userService={userService}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
