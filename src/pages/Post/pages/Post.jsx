import React from "react";
import Layout from "../../../components/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import CommentBar from "../../../components/Footer/CommentBar";
import PostItem from "../../../components/Post/index";
import Comment from "../components/Comment";

export default function Post() {
  return (
    <Layout>
      <BasicHeader />
      <PostItem />
      <Comment />
      <CommentBar />
    </Layout>
  );
}
