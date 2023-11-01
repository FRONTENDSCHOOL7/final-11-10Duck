import React from "react";
import Layout from "../../components/Layout/Layout";
import LayoutContent from "../../components/Layout/LayoutContent";
import MainLogo from "../../assets/logo/PurpleDuck.png";
import { styled } from "styled-components";
import { COLOR } from "../../utils";

export default function Splash() {
  return (
    <Layout>
      <LayoutContent>
        <LogoContainerStyle>
          <MainLogoStyle src={MainLogo} alt="메인 로고 이미지" />
          <TitleStyle>씁덕학개론</TitleStyle>
        </LogoContainerStyle>
      </LayoutContent>
    </Layout>
  );
}

const LogoContainerStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainLogoStyle = styled.img`
  width: 144px;
  height: 144px;
  object-fit: cover;
`;

const TitleStyle = styled.div`
  margin-top: 4px;
  font-family: "PyeongChangPeace-Bold";
  text-align: center;
  color: ${COLOR.fontOrangeColor};
  font-size: 24px;
`;
