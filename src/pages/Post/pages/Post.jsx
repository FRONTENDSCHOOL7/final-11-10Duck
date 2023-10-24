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
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const { header } = useAPI();

  const postId = "6536095db2cb205663850892";
  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}post/${postId}`,
        {
          headers: header,
        }
      );
      console.log("🌟게시글불러오기 성공");
      setPost(res.data);
    } catch (err) {
      console.log("🔥게시글 불러오기 실패");
      console.error(err);
    }
  };

  const fetchComment = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}post/${postId}/comments`,
        {
          headers: header,
        }
      );

      console.log("🌟댓글불러오기 성공");
      setCommentList(res.data.comments);
    } catch (err) {
      console.log("🔥댓글불러오기 실패");
      console.error(err);
    }
  };

  const uploadComment = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}post/${postId}/comments`,
        {
          comment: {
            content: "test",
          },
        },
        {
          headers: header,
        }
      );

      console.log("🌟댓글달기 성공");
      console.log(res);
    } catch (err) {
      console.log("🔥댓글달기 실패");
      console.error(err);
    } finally {
      setComment("");
      fetchComment();
    }
  };

  const onChangeHandler = (content) => {
    setComment(content);
  };

  useEffect(() => {
    fetchPost();
    fetchComment();
  }, []);

  if (!!post) {
    return (
      <Layout>
        <BasicHeader />
        <LayoutContent>
          <PostItem post={post} />
          {commentList.map((item) => (
            <Comment />
          ))}
        </LayoutContent>
        <CommentBar
          mode="post"
          content={comment}
          onSubmitHandler={uploadComment}
          onChangeHandler={(e) => {
            onChangeHandler(e.target.value);
          }}
        />
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
