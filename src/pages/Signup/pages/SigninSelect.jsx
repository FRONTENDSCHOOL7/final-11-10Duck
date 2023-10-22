import styled from "styled-components";
import Layout from "../../../components/Layout/Layout";
import LogoIcon from "../../../assets/symbol-logo-W.png";
import KakaoIcon from "../../../assets/message-circle.png";
import GoogleIcon from "../../../assets/google.png";
import FacebookIcon from "../../../assets/facebook.png";
import { COLOR, FONT_SIZE } from "../../../utils";
import ImgButton from "../components/ImgButton";
import { Link } from "react-router-dom";

export default function SigninSelect() {
  return (
    <Layout>
      <SelectPage>
        <LogoImg src={LogoIcon}></LogoImg>
        <SelectSignin>
          <ImgButtonContent>
            <ImgButton
              borderColor="#F2C94C"
              img={KakaoIcon}
              text="카카오 계정으로 로그인"
            />
            <ImgButton
              borderColor="#767676"
              img={GoogleIcon}
              text="구글 계정으로 로그인"
            />
            <ImgButton
              borderColor="#2D9CDB"
              img={FacebookIcon}
              text="페이스북 계정으로 로그인"
            />
            <LinkButton>
              <LinkStyle to="/signin">이메일로 로그인</LinkStyle>
              <Divider>|</Divider>
              <LinkStyle to="/signup">회원가입</LinkStyle>
            </LinkButton>
          </ImgButtonContent>
        </SelectSignin>
      </SelectPage>
    </Layout>
  );
}

const SelectPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.bgOrangeColor};
  position: relative;
`;

const LogoImg = styled.img`
  display: block;
  width: 144px;
  height: 144px;
  margin: 0 auto;
  margin-top: 150px;
`;

const SelectSignin = styled.div`
  width: 100%;
  height: 342px;
  background-color: ${COLOR.bgPrimaryColor};
  position: absolute;
  bottom: 0px;
  border-radius: 10px 10px 0 0;
`;

const ImgButtonContent = styled.div`
  margin-top: 50px;
  & > Button {
    margin: 0 auto;
    margin-bottom: 15px;
    background-color: ${COLOR.btnSecondaryColor};
  }
`;

const LinkButton = styled.div`
  text-align: center;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.small};
`;

const Divider = styled.span`
  margin: 0 10px;
  color: #c4c4c4;
  font-size: ${FONT_SIZE.small};
`;
