import { styled } from "styled-components";
import MainHeader from "../../../components/Header/MainHeader";
import NavBar from "../../../components/Footer/NavBar";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import SearchIcon from "../../../assets/icon/icon-symbol-logo-gray.png";
import Button from "../../../components/Button";

export default function FeedNone() {
  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <FeedPage>
          <IconImg src={SearchIcon} alt="로고 아이콘" />
          <span className="msg">유저를 검색해 팔로우 해보세요!</span>

          {/* onClick 구현 필요 */}
          <Button
            buttonText={"검색하기"}
            disabled={false}
            size={"M"}
            reversed={false}
            onClick={() => {}}
          />
        </FeedPage>
      </LayoutContent>
      <NavBar />
    </Layout>
  );
}

const FeedPage = styled.div`
  margin-top: 50%;

  & > .msg {
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
  /* cursor: pointer; */
  margin: 0 auto;
`;
