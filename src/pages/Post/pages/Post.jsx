import React, { useEffect, useState } from "react";
import BasicHeader from "../../../components/Header/BasicHeader";
import CommentBar from "../../../components/Footer/CommentBar";
import PostItem from "../../../components/Post/index";
import Comment from "../components/Comment";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import useAPI from "../../../hooks/useAPI";
import BottomModal from "../../../components/Modal/BottomModal";
import { api } from "../../../api/baseURL";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useCheckUser from "../../../hooks/useCheckUser";
import useModal from "../../../hooks/useModal";

export default function Post() {
  const [post, setPost] = useState();
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const [isbottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [modalMenuList, setModalMenuList] = useState([]);

  const { header } = useAPI();
  const { postId } = useParams();
  const location = useLocation();
  const { userFlag } = useCheckUser(location.state.authorId);
  const { isModalOpen, userModalMenuList, onModalHandler } = useModal();

  const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      const res = await api.get(`/post/${postId}`, {
        headers: header,
      });
      console.log("🌟게시글불러오기 성공");
      setPost(res.data.post);
    } catch (err) {
      console.log("🔥게시글 불러오기 실패");
      console.error(err);
    }
  };

  const fetchComment = async () => {
    try {
      const res = await api.get(`/post/${postId}/comments`, {
        headers: header,
      });

      console.log("🌟댓글불러오기 성공");
      setCommentList(res.data.comments);
    } catch (err) {
      console.log("🔥댓글불러오기 실패");
      console.error(err);
    }
  };

  const uploadComment = async () => {
    try {
      const res = await api.post(
        `/post/${postId}/comments`,
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
        <BasicHeader
          onClickMoreBtnHandler={onModalHandler}
          onClickBackBtnHandler={() => {
            navigate("/");
          }}
        />
        <LayoutContent>
          <PostItem
            post={post}
            onModalHandler={() => {
              if (userFlag) {
                setModalMenuList([
                  {
                    label: "삭제",
                    onClickHandler: () => {},
                  },
                  {
                    label: "수정",
                    onClickHandler: () => {},
                  },
                ]);
              } else {
                setModalMenuList([
                  {
                    label: "신고하기",
                    onClickHandler: () => {},
                  },
                ]);
              }

              setIsBottomModalOpen(!isbottomModalOpen);
            }}
          />
          {commentList.map((item) => (
            <Comment
              key={item.id}
              comment={item}
              onModalHandler={() => {
                if (userFlag) {
                  setModalMenuList([
                    {
                      label: "삭제",
                      onClickHandler: () => {},
                    },
                  ]);
                } else {
                  setModalMenuList([
                    {
                      label: "신고하기",
                      onClickHandler: () => {},
                    },
                  ]);
                }

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
        {isbottomModalOpen && <BottomModal menu={modalMenuList} />}
        {isModalOpen && <BottomModal menu={userModalMenuList} />}
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
