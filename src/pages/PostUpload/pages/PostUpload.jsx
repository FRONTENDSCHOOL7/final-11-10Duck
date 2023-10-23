import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import ProfileImage from "../../../assets/basic-profile-img.png";
import { styled } from "styled-components";
import ImageButton from "../components/ImageButton";
import LayoutContent from "../../../components/Layout/LayoutContent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PreviewImage from "../components/PreviewImage";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import { changeImageToURL } from "../../../utils/function";

export default function PostUpload() {
  const [content, setContent] = useState({ text: "", image: "" });
  const [previewImage, setPreviewImage] = useState("");

  const user = useRecoilValue(userState);

  const navigate = useNavigate();

  const isButtonActive = Object.entries(content).every((item) => !!item);

  const onImageUploadHandler = (value) => {
    setContent({ ...content, image: value });
  };

  /**
   * 게시물 등록하기 함수, 현재 이미지 없이 등록하는 것으로만 들어가있음
   */
  const uploadPost = async () => {
    try {
      const imageUrl = await changeImageToURL(content.image);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}post`,
        {
          post: {
            content: content.text,
            image: imageUrl,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log("게시글 올리기 성공");
      navigate("/post", { state: { post: res.data } });
    } catch (err) {
      console.error(err);
      // 시간 남으면 게시글 등록 실패시 모달창 띄워주기
    }
  };

  return (
    <Layout>
      <UploadHeader
        buttonText={"업로드"}
        disabled={!isButtonActive}
        onClickHandler={uploadPost}
      />
      <LayoutContent>
        <ContainerStyle>
          <ProfileImageStyle src={ProfileImage} alt="프로필 이미지" />
          <div>
            <TextAreaContainerStyle
              placeholder="게시물 입력하기"
              onChange={(event) => {
                setContent({ ...content, text: event.target.value });
              }}
            ></TextAreaContainerStyle>
            {previewImage && <PreviewImage previewImage={previewImage} />}
          </div>
        </ContainerStyle>

        <ImageButton
          onChangeHandler={setPreviewImage}
          onImageUploadHandler={onImageUploadHandler}
        />
      </LayoutContent>
    </Layout>
  );
}

const ContainerStyle = styled.div`
  display: flex;
  margin-top: 20px;
`;
const TextAreaContainerStyle = styled.textarea`
  /* flex-grow: 1; */
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
