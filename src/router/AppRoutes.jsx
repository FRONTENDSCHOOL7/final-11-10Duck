import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from '../pages/Post/pages/Post';
import PostUpload from '../pages/PostUpload/pages/PostUpload';
import AddProduct from '../pages/AddProduct/pages/AddProduct';
import Feed from '../pages/Home/pages/Feed';
import Signup from '../pages/Signup/pages/Signup';
import Signin from '../pages/Signup/pages/Signin';
import EditProfile from '../pages/Signup/pages/EditProfile';
import SigninSelect from '../pages/Signup/pages/SigninSelect';
import Profile from '../pages/Profile/pages/Profile';
import Search from '../pages/Home/pages/Search';
import Chat from '../pages/Chat/pages/ChatList';
import ChatRoom from '../pages/Chat/pages/ChatRoom';
import NotFound from '../pages/Home/pages/NotFound';
import Follow from '../pages/Profile/pages/Follow';
import EditProfileInfo from '../pages/Profile/pages/EditProfileInfo';
import Splash from '../pages/Splash/Splash';
import Home from '../pages/Home/pages/Home';
import LookAround from '../pages/LookAround/pages/LookAround';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/post/upload" element={<PostUpload />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup/edit-profile" element={<EditProfile />} />
            <Route path="/signin-select" element={<SigninSelect />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:accountName" element={<Profile />} />
            <Route path="/profile/:accountName/:followMode" element={<Follow />} />
            <Route path="/profile/edit" element={<EditProfileInfo />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/chatroom" element={<ChatRoom />} />
            <Route path="/lookaround" element={<LookAround />} />
            <Route path="/404" element={<NotFound />} />
        </Routes>
    );
}
