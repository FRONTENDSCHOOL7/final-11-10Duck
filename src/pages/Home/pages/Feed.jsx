import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import PostItem from "../../../components/Post";
import FeedNone from "../components/FeedNone";

export default function FeedFollow(props) {
  // const { profileImg, userName, userId, postImg, postContent, heartCount, commentCount } = props;
  const { user, follow = 1 } = props;

  // follow에 대한 정보를 어떻게 넘길지... 수정 필요

  if (follow === 0) return <FeedNone />;
  else if (follow > 0)
    return (
      <Layout>
        <MainHeader />
        <LayoutContent>
          <PostItem />
        </LayoutContent>
      </Layout>
    );
}
