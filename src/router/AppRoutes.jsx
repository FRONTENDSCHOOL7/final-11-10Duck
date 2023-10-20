import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "../pages/Post/pages/Post";
import PostUpload from "../pages/PostUpload/pages/PostUpload";
import AddProduct from "../pages/AddProduct/pages/AddProduct";
import Feed from "../pages/Home/pages/Feed";
import Signup from "../pages/Signup/pages/Signup";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/post" element={<Post />} />
      <Route path="/post/upload" element={<PostUpload />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
