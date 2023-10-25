import { useEffect, useState } from "react";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import FeedNone from "../components/FeedNone";
import useAPI from "../../../hooks/useAPI";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import PostItem from "../../../components/Post";
import NavBar from "../../../components/Footer/NavBar";
import { api } from "../../../api/baseURL";
import BottomModal from "../../../components/Modal/BottomModal";

export default function FeedFollow() {
  const { header } = useAPI();
  const [followerPostList, setFollowerPostList] = useState([]);
  const [myPostList, setMyPostList] = useState([]);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const user = useRecoilValue(userState);

  const fetchMyPost = async () => {
    try {
      const res = await api.get(`/post/${user.accountname}/userpost`, {
        headers: header,
      });
      console.log("🌟내 게시글 불러오기 성공");
      setMyPostList(res.data.post);
    } catch (err) {
      console.error(err);
      console.log("🔥내 게시글 불러오기 실패");
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
    fetchFollowerPost();
    fetchMyPost();
  }, []);

  if (!followerPostList.length && !myPostList.length) return <FeedNone />;
  else {
    return (
      <Layout>
        <MainHeader />
        <LayoutContent>
          {myPostList.map((item) => (
            <PostItem
              post={item}
              isMoveToContentPage={true}
              onModalHandler={() => {
                setIsBottomModalOpen(!isBottomModalOpen);
              }}
            />
          ))}
        </LayoutContent>
        <NavBar />
        {/* 홈화면은 팔로워의 게시글이라서 무조건 일치하지 않기때문에 이와같이 구성 */}
        {isBottomModalOpen && (
          <BottomModal
            menu={[
              {
                label: "신고하기",
                onClickHandler: () => {},
              },
            ]}
          />
        )}
      </Layout>
    );
  }
}
