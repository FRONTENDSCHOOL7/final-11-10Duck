import React from "react";
import { styled } from "styled-components";
import ImageIcon from "../../../assets/upload-file.png";
import { COLOR } from "../../../utils";

export default function ImageButton() {
  return (
    <ButtonStyle>
      <ButtonImageStyle src={ImageIcon} alt="이미지 업로드 버튼 아이콘" />
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button``;

const ButtonImageStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
