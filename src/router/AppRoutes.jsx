import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "../pages/Post/pages/Post";
import PostUpload from "../pages/PostUpload/pages/PostUpload";
import AddProduct from "../pages/AddProduct/pages/AddProduct";
import Feed from "../pages/Home/pages/Feed";
import Signup from "../pages/Signup/pages/Signup";
import Signin from "../pages/Signup/pages/Signin";
import EditProfile from "../pages/Profile/pages/EditProfile";
import SigninSelect from "../pages/Signup/pages/SigninSelect";
import Profile from "../pages/Profile/pages/Profile";
import Search from "../pages/Home/pages/Search";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/post" element={<Post />} />
      <Route path="/post/upload" element={<PostUpload />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup/edit-profile" element={<EditProfile />} />
      <Route path="/signin-select" element={<SigninSelect />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
