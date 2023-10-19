import React from "react";
import Layout from "../../../components/Layout";
import Content from "../../../components/Content";
import UploadHeader from "../../../components/Header/UploadHeader";
import ProfileImage from "../../../assets/basic-profile-img.png";
import { styled } from "styled-components";
import ImageButton from "../components/ImageButton";

export default function PostUpload() {
  return (
    <Layout>
      <UploadHeader />
      <Content>
        <ContainerStyle>
          <ProfileImageStyle src={ProfileImage} alt="프로필 이미지" />
          <TextAreaContainerStyle placeholder="게시물 입력하기"></TextAreaContainerStyle>
        </ContainerStyle>
        <ImageButton />
      </Content>
    </Layout>
  );
}

const ContainerStyle = styled.div`
  display: flex;
  height: 100%;
`;
const TextAreaContainerStyle = styled.textarea`
  flex-grow: 1;
  border: none;
  &:focus {
    outline: none;
  }
`;

const ProfileImageStyle = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  margin-right: 12px;
`;
