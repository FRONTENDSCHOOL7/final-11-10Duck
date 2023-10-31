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
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import useAlertModal from "../../../hooks/useAlertModal";
import AlertModal from "../../../components/Modal/AlertModal";

export default function Post() {
  const user = useRecoilValue(userState);

  const [post, setPost] = useState();
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const [isbottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [modalMenuList, setModalMenuList] = useState([]);
  const [alertModal, setAlertModal] = useState({
    alertTitle: "",
    leftBtnText: "취소",
    rightBtnText: "",
    onClickRightBtnHandler: () => {},
  });

  const { header } = useAPI();
  const { postId } = useParams();
  const location = useLocation();

  const { userFlag } = useCheckUser(
    location.state ? location.state.authorId : user._id
  );
  const {
    isModalOpen,
    isUserAlertModalOpen,
    userAlertModal,
    userModalMenuList,
    onModalHandler,
    userAlertModalHandler,
  } = useModal();
  const { isAlertModalOpen, alertModalHandler } = useAlertModal();

  const navigate = useNavigate();

  const onClickBottomModalMenu = (
    alertTitle,
    rightBtnText,
    onClickRightBtnHandler
  ) => {
    setAlertModal({
      ...alertModal,
      alertTitle,
      rightBtnText,
      onClickRightBtnHandler,
    });
    alertModalHandler.openModal();
    setIsBottomModalOpen(false);
  };

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

  /**
   * 게시글 삭제 함수
   */
  const deletePost = async () => {
    try {
      const res = await api.delete(`/post/${postId}`, {
        headers: header,
      });

      console.log(res);
      console.log("🌟게시글 삭제를 성공");
      navigate("/profile");
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 삭제를 실패");
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

  /**
   * 댓글 입력 함수
   */
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

  /**
   * 댓글 삭제 함수
   * @param {댓글 아이디} commentId
   */
  const deleteComment = async (commentId) => {
    try {
      const res = await api.delete(`/post/${postId}/comments/${commentId}`, {
        headers: header,
      });
      console.log(res);
      console.log("🌟게시글 삭제 성공");
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 삭제 실패");
    } finally {
      fetchComment();
      alertModalHandler.closeModal();
    }
  };

  /**
   * 댓글 신고하는 함수
   * @param {댓글 아이디} commentId
   */
  const reportComment = async (commentId) => {
    try {
      const res = await api.post(
        `/post/${postId}/comments/${commentId}/report`,
        {
          report: {
            comment: commentId,
          },
        },
        {
          headers: header,
        }
      );

      console.log(res);
      console.log("🌟 댓글 신고 성공");
    } catch (err) {
      console.error(err);
      console.log("🔥 댓글 신고 실패");
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
            navigate("/feed");
          }}
        />
        <LayoutContent>
          <PostItem
            post={post}
            fetchFun={fetchPost}
            onModalHandler={() => {
              if (userFlag) {
                setModalMenuList([
                  {
                    label: "삭제",
                    onClickHandler: () => {
                      onClickBottomModalMenu(
                        "게시글을 삭제할까요?",
                        "삭제",
                        () => {
                          deletePost();
                        }
                      );
                    },
                  },
                  {
                    label: "수정",
                    onClickHandler: () => {
                      onClickBottomModalMenu(
                        "게시글을 수정할까요?",
                        "수정",
                        () => {}
                      );
                    },
                  },
                ]);
              } else {
                setModalMenuList([
                  {
                    label: "신고하기",
                    onClickHandler: () => {
                      onClickBottomModalMenu(
                        "게시글을 신고할까요?",
                        "신고",
                        () => {}
                      );
                    },
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
                if (item.author._id === user._id) {
                  setModalMenuList([
                    {
                      label: "삭제",
                      onClickHandler: () => {
                        onClickBottomModalMenu(
                          "댓글을 삭제할까요?",
                          "삭제",
                          () => {
                            deleteComment(item.id);
                          }
                        );
                      },
                    },
                  ]);
                } else {
                  setModalMenuList([
                    {
                      label: "신고하기",
                      onClickHandler: () => {
                        onClickBottomModalMenu(
                          "게시글을 신고할까요?",
                          "신고",
                          () => {
                            reportComment(item.id);
                          }
                        );
                      },
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
        <BottomModal
          isModalOpen={isbottomModalOpen}
          menu={modalMenuList}
          onModalHandler={() => {
            setIsBottomModalOpen(!isbottomModalOpen);
          }}
        />
        <BottomModal
          isModalOpen={isModalOpen}
          menu={userModalMenuList}
          onModalHandler={onModalHandler}
        />
        <AlertModal
          isModalOpen={isAlertModalOpen}
          alertTitle={alertModal.alertTitle}
          leftBtnText={alertModal.leftBtnText}
          rightBtnText={alertModal.rightBtnText}
          onModalHandler={alertModalHandler}
          onClickRightBtnHandler={alertModal.onClickRightBtnHandler}
        />
        <AlertModal
          isModalOpen={isUserAlertModalOpen}
          alertTitle={userAlertModal.alertTitle}
          leftBtnText={userAlertModal.leftBtnText}
          rightBtnText={userAlertModal.rightBtnText}
          onModalHandler={userAlertModalHandler}
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
