import { useEffect, useState } from "react";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import FeedNone from "../components/FeedNone";
import useAPI from "../../../hooks/useAPI";
import PostItem from "../../../components/Post";
import NavBar from "../../../components/Footer/NavBar";
import { api } from "../../../api/baseURL";
import BottomModal from "../../../components/Modal/BottomModal";
import AlertModal from "../../../components/Modal/AlertModal";
import useAlertModal from "../../../hooks/useAlertModal";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil/atom";
import Loading from "../../../components/Loading/Loading";

export default function FeedFollow() {
  const { header } = useAPI();
  const { isAlertModalOpen, alertModalHandler } = useAlertModal();
  const [followerPostList, setFollowerPostList] = useState([]);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();

  const isLogin = localStorage.getItem("token");

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/myinfo", {
        headers: {
          Authorization: `Bearer ${isLogin}`,
        },
      });

      const userData = res.data.user;

      console.log("🌟유저 정보 가져오기 성공");
      setUser({ ...user, token: isLogin, ...userData });
    } catch (err) {
      console.error(err);
      console.log("🔥유저 정보 가져오기 실패");
    }
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/signin-select");
    }
    fetchUserData();
  }, [isLogin]);

  const fetchFollowerPost = async () => {
    try {
      const res = await api.get(`/post/feed`, {
        headers: header,
      });
      setFollowerPostList(res.data.posts);
      console.log("🌟팔로잉 게시글 불러오기 성공");
    } catch (err) {
      console.error(err);
      console.log("🔥팔로잉 게시글 불러오기 실패");
    }
  };

  useEffect(() => {
    fetchFollowerPost();
  }, [user]);

  if (!followerPostList.length) return <FeedNone />;
  else {
    return (
      <Layout>
        <MainHeader />
        <LayoutContent>
          {followerPostList.map((item) => (
            <PostItem
              key={item.id}
              fetchFun={fetchFollowerPost}
              post={item}
              isMoveToContentPage={true}
              onModalHandler={() => {
                setIsBottomModalOpen(!isBottomModalOpen);
              }}
            />
          ))}
        </LayoutContent>
        <NavBar />
        <BottomModal
          isModalOpen={isBottomModalOpen}
          onModalHandler={() => {
            setIsBottomModalOpen(!isBottomModalOpen);
          }}
          menu={[
            {
              label: "신고하기",
              onClickHandler: () => {
                alertModalHandler.openModal();
              },
            },
          ]}
        />
        <AlertModal
          isModalOpen={isAlertModalOpen}
          onModalHandler={alertModalHandler}
          alertTitle={"게시글을 신고할까요?"}
          leftBtnText={"취소"}
          rightBtnText={"삭제"}
        />
        <Loading />
      </Layout>
    );
  }
}
