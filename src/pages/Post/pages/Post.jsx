import React, { useEffect, useState } from "react";
import BasicHeader from "../../../components/Header/BasicHeader";
import CommentBar from "../../../components/Footer/CommentBar";
import PostItem from "../../../components/Post/index";
import Comment from "../components/Comment";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import axios from "axios";
import useAPI from "../../../hooks/useAPI";
import BottomModal from "../../../components/Modal/BottomModal";

export default function Post() {
  const [post, setPost] = useState();
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const { header } = useAPI();
  const [isbottomModalOpen, setIsBottomModalOpen] = useState(false);

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
            content: comment,
          },
        },
        {
          headers: header,
        }
      );

      console.log("🌟댓글달기 성공");
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
            <Comment
              comment={item}
              onModalHandler={() => {
                setIsBottomModalOpen(!isbottomModalOpen);
              }}
            />
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
        {isbottomModalOpen && (
          <BottomModal
            menu={[
              {
                label: "신고하기",
                onClickHandler: () => {
                  // 해당 기능은 선택과제
                  // 유저가 일치하는 경우와 일치하지 않는 경우 구현 필요
                },
              },
            ]}
          />
        )}
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
