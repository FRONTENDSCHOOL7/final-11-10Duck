import React from "react";
import { styled } from "styled-components";
import ImageIcon from "../../../assets/img-button.png";

export default function ImageButton() {
  return (
    <ButtonContainerStyle>
      <label htmlFor="img-btn">
        <ButtonImageStyle src={ImageIcon} alt="이미지 업로드 버튼 아이콘" />
      </label>
      <ButtonStyle type="file" id="img-btn" />
    </ButtonContainerStyle>
  );
}
const ButtonContainerStyle = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 12px;
  margin-bottom: 12px;
`;

const ButtonImageStyle = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const ButtonStyle = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
