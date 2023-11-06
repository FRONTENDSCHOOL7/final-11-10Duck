import { useEffect, useState } from "react";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
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
import Vote from "../components/Vote";
import Story from "../components/Story/Story";
import AddStory from "../components/Story/AddStory";
import StoryButton from "../components/Story/StoryButton";
import ShowStory from "../components/Story/ShowStory";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { styled } from "styled-components";
import Button from "../../../components/Button";
import SearchIcon from "../../../assets/icon/icon-symbol-logo-gray.png";
import { COLOR, FONT_SIZE } from "../../../utils";

export default function FeedFollow() {
  const { header } = useAPI();
  const { isAlertModalOpen, alertModalHandler } = useAlertModal();
  const [followerPostList, setFollowerPostList] = useState([]);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [isAddStoryOpen, setIsAddStoryOpen] = useState(false);
  const [isShowStoryOpen, setIsShowStoryOpen] = useState(false);
  const [storyList, setStoryList] = useState([]);
  const [currentStory, setCurrentStory] = useState();

  const navigate = useNavigate();

  const isLogin = localStorage.getItem("token");

  const fetchStory = async () => {
    try {
      let tempStoryList = [];
      const is24hour = new Date();
      const querySnapshot = await getDocs(collection(db, "story"));
      querySnapshot.forEach((doc) => {
        tempStoryList.push(doc.data());
      });

      const filterStoryList = tempStoryList.filter((item) => {
        return Math.floor(item.date.toDate().getDay() - is24hour.getDay()) <= 1;
      });

      setStoryList(filterStoryList);
    } catch (err) {
      console.error(err);
    }
  };

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
    fetchStory();
  }, [isAddStoryOpen]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/signin-select");
    }
    fetchUserData();
  }, [isLogin]);

  useEffect(() => {
    fetchFollowerPost();
  }, [user]);

  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <Story>
          <StoryButton
            hasButton={true}
            onClickHandler={() => {
              setIsAddStoryOpen(true);
            }}
          />
          {storyList.map((item) => (
            <StoryButton
              story={item}
              onClickHandler={() => {
                setIsShowStoryOpen(true);
                setCurrentStory(item);
                setTimeout(() => setIsShowStoryOpen(false), 2500);
              }}
            />
          ))}
        </Story>
        <Vote />
        {!!followerPostList.length ? (
          followerPostList.map((item) => (
            <PostItem
              key={item.id}
              fetchFun={fetchFollowerPost}
              post={item}
              isMoveToContentPage={true}
              onModalHandler={() => {
                setIsBottomModalOpen(!isBottomModalOpen);
              }}
            />
          ))
        ) : (
          <FeedPage>
            <IconImg src={SearchIcon} alt="로고 아이콘" />
            <span className="msg">유저를 검색해 팔로우 해보세요!</span>

            <Button
              buttonText={"검색하기"}
              size={"M"}
              onClickHandler={() => {
                navigate("/search");
              }}
            />
          </FeedPage>
        )}
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
      <AddStory
        isAddStoryOpen={isAddStoryOpen}
        closeModal={() => {
          setIsAddStoryOpen(false);
        }}
      />
      <ShowStory isShowStoryOpen={isShowStoryOpen} story={currentStory} />
    </Layout>
  );
}

const FeedPage = styled.div`
  margin-top: 30%;

  & > .msg {
    color: ${COLOR.fontPrimaryColor};
    font-size: ${FONT_SIZE.large};
    display: block;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
  }
  & > Button {
    margin: 0 auto;
  }
`;

const IconImg = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
