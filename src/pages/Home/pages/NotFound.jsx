import { styled } from "styled-components";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import SearchIcon from "../../../assets/icon/icon-404.png";
import Button from "../../../components/Button";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function NotFound() {
  return (
    <Layout>
      <LayoutContent>
        <NotFoundStyle>
          <IconImg src={SearchIcon} alt="404 에러 아이콘" />
          <span className="msg">페이지를 찾을 수 없습니다. :{"("}</span>

          <Button
            buttonText={"이전 페이지"}
            size={"M"}
            onClickHandler={() => {}}
          />
        </NotFoundStyle>
      </LayoutContent>
    </Layout>
  );
}

const NotFoundStyle = styled.div`
  margin-top: 50%;

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
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
