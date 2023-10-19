import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Home/pages/Feed";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
    </Routes>
  );
}
