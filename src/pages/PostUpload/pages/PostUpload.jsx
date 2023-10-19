import React from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import ProfileImage from "../../../assets/basic-profile-img.png";
import { styled } from "styled-components";
import ImageButton from "../components/ImageButton";
import LayoutContent from "../../../components/Layout/LayoutContent";

export default function PostUpload() {
  return (
    <Layout>
      <UploadHeader />
      <LayoutContent>
        <ContainerStyle>
          <ProfileImageStyle src={ProfileImage} alt="프로필 이미지" />
          <TextAreaContainerStyle placeholder="게시물 입력하기"></TextAreaContainerStyle>
        </ContainerStyle>
        <ImageButton />
      </LayoutContent>
    </Layout>
  );
}

const ContainerStyle = styled.div`
  display: flex;
  margin-top: 20px;
  height: 80%;
`;
const TextAreaContainerStyle = styled.textarea`
  flex-grow: 1;
  border: none;
  resize: none;
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
