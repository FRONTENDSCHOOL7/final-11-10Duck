import React, { useState } from "react";
import { styled } from "styled-components";
import ImageButton from "./ImageButton";
import { COLOR } from "../../../utils";
import { FONT_SIZE } from "../../../utils";

export default function InputImage(props) {
  const { onImageUploadHandler } = props;
  const [previewImage, setPreviewImage] = useState("");

  return (
    <InputImageContainerStyle>
      <LabelStyle>이미지 등록</LabelStyle>
      <ImageBoxStyle>
        {previewImage && (
          <ProductImageStyle src={previewImage} alt="게시글 이미지" />
        )}
        <ImageButton
          onImageUploadHandler={onImageUploadHandler}
          onChangeHandler={setPreviewImage}
        />
      </ImageBoxStyle>
    </InputImageContainerStyle>
  );
}

const InputImageContainerStyle = styled.div`
  margin-top: 30px;
  overflow: hidden;
`;

const LabelStyle = styled.span`
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.medium};
`;

const ImageBoxStyle = styled.div`
  position: relative;
  width: 322px;
  height: 204px;
  border-radius: 10px;
  background-color: ${COLOR.bgSecondaryColor};
  margin-top: 18px;
  margin-bottom: 30px;
  overflow: hidden;
`;

const ProductImageStyle = styled.img`
  width: 322px;
  height: 204px;
  object-fit: cover;
`;
