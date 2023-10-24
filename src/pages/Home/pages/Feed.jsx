import { useEffect, useState } from "react";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import FeedNone from "../components/FeedNone";
import axios from "axios";
import useAPI from "../../../hooks/useAPI";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import PostItem from "../../../components/Post";

export default function FeedFollow() {
  const { header } = useAPI();
  const [followerPostList, setFollowerPostList] = useState([]);
  const [myPostList, setMyPostList] = useState([]);
  const user = useRecoilValue(userState);

  const fetchMyPost = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}post/${user.accountname}/userpost`,
        {
          headers: header,
        }
      );
      console.log("🌟내 게시글 불러오기 성공");
      setMyPostList(res.data.post);
    } catch (err) {
      console.error(err);
      console.log("🔥내 게시글 불러오기 실패");
    }
  };

  const fetchFollowerPost = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}post/feed`, {
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
            <PostItem post={item} />
          ))}
        </LayoutContent>
      </Layout>
    );
  }
}
