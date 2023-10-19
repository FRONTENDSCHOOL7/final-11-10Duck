import React from "react";
import BasicHeader from "../../../components/Header/BasicHeader";
import CommentBar from "../../../components/Footer/CommentBar";
import PostItem from "../../../components/Post/index";
import Comment from "../components/Comment";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";

export default function Post() {
  return (
    <Layout>
      <BasicHeader />
      <LayoutContent>
        <PostItem />
        <Comment />
      </LayoutContent>
      <CommentBar />
    </Layout>
  );
}
