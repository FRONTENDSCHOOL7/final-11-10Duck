import React from "react";
import { styled } from "styled-components";
import DeleteIcon from "../../../assets/icon/icon-delete.png";

export default function PreviewImage(props) {
  const { previewImage, deleteImageHandelr } = props;
  return (
    <Container>
      <PreviewImageStyle src={previewImage} alt="게시글 이미지" />
      <DeleteButtonStyle onClick={deleteImageHandelr}></DeleteButtonStyle>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: 16px;
`;

const PreviewImageStyle = styled.img`
  width: 304px;
  height: 228px;
  border-radius: 10px;
  object-fit: cover;
`;

const DeleteButtonStyle = styled.button`
  position: absolute;
  z-index: 100;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  background-image: url(${DeleteIcon});
  background-size: 22px 22px;
  background-repeat: no-repeat;
  top: 6px;
  right: 6px;
  cursor: pointer;
`;
