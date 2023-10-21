import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import ProfileImage from "../../../assets/basic-profile-img.png";
import { styled } from "styled-components";
import ImageButton from "../components/ImageButton";
import LayoutContent from "../../../components/Layout/LayoutContent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostUpload() {
  const [isButtonActive, setIsButtonAcitve] = useState(false);
  const [content, setContent] = useState({ text: "", image: "" });
  const navigate = useNavigate();

  /**
   * 게시물 등록하기 함수, 현재 이미지 없이 등록하는 것으로만 들어가있음
   */
  const uploadPost = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}post`,
        {
          post: {
            content: content.text,
            image: content.image,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmY4YmQ1YjJjYjIwNTY2MzdjNDZmNiIsImV4cCI6MTcwMjc5OTAzMSwiaWF0IjoxNjk3NjE1MDMxfQ.osT2yHu_EcI0sjl8wLqbGJ08zfnaL0aArmHcU_PnfCA"}`,
          },
        }
      );
      navigate("/post", { state: { post: res.data } });
    } catch (err) {
      console.error(err);
      // 시간 남으면 게시글 등록 실패시 모달창 띄워주기
    }
  };

  useEffect(() => {
    if (!!content.text.length) {
      setIsButtonAcitve(false);
    } else {
      setIsButtonAcitve(true);
    }
  }, [content]);

  return (
    <Layout>
      <UploadHeader
        buttonText={"업로드"}
        disabled={isButtonActive}
        onClickHandler={uploadPost}
      />
      <LayoutContent>
        <ContainerStyle>
          <ProfileImageStyle src={ProfileImage} alt="프로필 이미지" />
          <TextAreaContainerStyle
            placeholder="게시물 입력하기"
            onChange={(event) => {
              setContent({ ...content, text: event.target.value });
            }}
          ></TextAreaContainerStyle>
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
