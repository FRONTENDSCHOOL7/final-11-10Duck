import React from "react";
import Layout from "../../components/Layout/Layout";
import LayoutContent from "../../components/Layout/LayoutContent";
import MainLogo from "../../assets/full-logo.png";
import { styled } from "styled-components";

export default function Splash() {
  return (
    <Layout>
      <LayoutContent>
        <LogoContainerStyle>
          <MainLogoStyle src={MainLogo} alt="메인 로고 이미지" />
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
`;

const MainLogoStyle = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
