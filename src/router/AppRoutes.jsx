import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}
