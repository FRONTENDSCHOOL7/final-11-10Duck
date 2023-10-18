import React from "react";
import Layout from "../../../components/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import CommentBar from "../../../components/Footer/CommentBar";

export default function Post() {
  return (
    <Layout>
      <BasicHeader />
      <CommentBar />
    </Layout>
  );
}
