import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct/pages/AddProduct";
import Feed from "../pages/Home/pages/Feed";


export default function AppRoutes() {
  return (
    <Routes>
       <Route path="/" element={<Feed />} />
      <Route path="/add-product" element={<AddProduct />} />  
    </Routes>
  );
}
