import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/pages/Home";
import AddProduct from "../pages/AddProduct/pages/AddProduct";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}
