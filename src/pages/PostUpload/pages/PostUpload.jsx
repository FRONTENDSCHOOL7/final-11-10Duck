import React, { useRef, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import { styled } from "styled-components";
import ImageButton from "../components/ImageButton";
import LayoutContent from "../../../components/Layout/LayoutContent";
import { useNavigate } from "react-router-dom";
import PreviewImage from "../components/PreviewImage";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import { changeImageToURL } from "../../../utils/function";
import { api } from "../../../api/baseURL";
import useAPI from "../../../hooks/useAPI";

export default function PostUpload() {
  const [content, setContent] = useState({ text: "", image: "" });
  const [previewImage, setPreviewImage] = useState("");

  const { header } = useAPI();

  const user = useRecoilValue(userState);

  const textareaRef = useRef();

  /**
   * textarea 텍스트 높이에 맞게 높이 자동조절 해주는 함수
   */
  const handleResizeHeight = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const navigate = useNavigate();

  const isButtonActive = Object.entries(content).every((item) => !!item);

  const deleteImage = () => {
    setPreviewImage("");
    setContent({ ...content, image: "" });
  };

  const onImageUploadHandler = (value) => {
    setContent({ ...content, image: value });
  };

  /**
   * 게시물 등록하기 함수, 현재 이미지 없이 등록하는 것으로만 들어가있음
   */
  const uploadPost = async () => {
    try {
      const imageUrl = await changeImageToURL(content.image);
      const res = await api.post(
        "/post",
        {
          post: {
            content: content.text,
            image: imageUrl,
          },
        },
        {
          headers: header,
        }
      );
      console.log("🌟게시글 올리기 성공");
      const postId = res.data.post.id;
      navigate(`/post/${postId}`);
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 올리기 실패");
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
          <ProfileImageStyle src={user.image} alt="프로필 이미지" />
          <ContentContainrStyle>
            <TextAreaContainerStyle
              ref={textareaRef}
              placeholder="게시물 입력하기"
              onChange={(event) => {
                handleResizeHeight();
                setContent({ ...content, text: event.target.value });
              }}
            ></TextAreaContainerStyle>
            {previewImage && (
              <PreviewImage
                previewImage={previewImage}
                deleteImageHandelr={deleteImage}
              />
            )}
          </ContentContainrStyle>
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

const ContentContainrStyle = styled.div`
  flex-grow: 1;
`;

const TextAreaContainerStyle = styled.textarea`
  width: 100%;
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
  border-radius: 100%;
`;
