import React from "react";
import { styled } from "styled-components";

export default function PreviewImage(props) {
  const { previewImage } = props;
  return <PreviewImageStyle src={previewImage} alt="게시글 이미지" />;
}

const PreviewImageStyle = styled.img`
  width: 304px;
  height: 228px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 16px;
`;
