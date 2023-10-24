import { useEffect, useState } from "react";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import FeedNone from "../components/FeedNone";
import axios from "axios";
import useAPI from "../../../hooks/useAPI";

export default function FeedFollow() {
  const { header } = useAPI();
  const [followerPostList, setFollowerPostList] = useState([]);

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
  }, []);

  if (!followerPostList.length) return <FeedNone />;
  else {
    return (
      <Layout>
        <MainHeader />
        <LayoutContent></LayoutContent>
      </Layout>
    );
  }
}
