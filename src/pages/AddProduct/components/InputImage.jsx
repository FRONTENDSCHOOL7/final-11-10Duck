import React from "react";
import { styled } from "styled-components";
import ImageButton from "./ImageButton";
import { COLOR } from "../../../utils";
import { FONT_SIZE } from "../../../utils";

export default function InputImage() {
  return (
    <InputImageContainerStyle>
      <LabelStyle>이미지 등록</LabelStyle>
      <ImageBoxStyle>
        <ImageButton />
      </ImageBoxStyle>
    </InputImageContainerStyle>
  );
}

const InputImageContainerStyle = styled.div`
  margin-top: 30px;
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
`;
