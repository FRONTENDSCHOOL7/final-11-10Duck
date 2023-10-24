import React, { useEffect, useState } from "react";
import BasicHeader from "../../../components/Header/BasicHeader";
import CommentBar from "../../../components/Footer/CommentBar";
import PostItem from "../../../components/Post/index";
import Comment from "../components/Comment";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import axios from "axios";
import useAPI from "../../../hooks/useAPI";

export default function Post() {
  const [post, setPost] = useState();
  const { header } = useAPI();
  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}post/6536095db2cb205663850892`,
        {
          headers: header,
        }
      );
      setPost(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const uploadComment = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  if (!!post) {
    return (
      <Layout>
        <BasicHeader />
        <LayoutContent>
          <PostItem post={post} />
          <Comment />
        </LayoutContent>
        <CommentBar mode="post" />
      </Layout>
    );
  }

  return (
    <Layout>
      <BasicHeader />
      <LayoutContent></LayoutContent>
      <CommentBar mode="post" />
    </Layout>
  );
}
