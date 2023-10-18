import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/pages/Home";
import Post from "../pages/Post/pages/Post";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}
