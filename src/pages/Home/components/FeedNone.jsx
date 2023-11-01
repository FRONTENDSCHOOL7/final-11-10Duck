import { styled } from "styled-components";
import MainHeader from "../../../components/Header/MainHeader";
import NavBar from "../../../components/Footer/NavBar";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import SearchIcon from "../../../assets/icon/icon-symbol-logo-gray.png";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { FONT_SIZE, COLOR } from "../../../utils";
import Vote from "./Vote";

export default function FeedNone() {
  const navigate = useNavigate();
  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <Vote />
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
      </LayoutContent>
      <NavBar />
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
