import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/pages/Home";
import Feed from "../pages/Home/pages/Feed";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/signin-select" element={<Home />} />
    </Routes>
  );
}
