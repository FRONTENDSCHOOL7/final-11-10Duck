import React from "react";
import { styled } from "styled-components";
import ImageButton from "./ImageButton";

export default function InputImage() {
  return (
    <InputImageContainerStyle>
      <LabelStyle>이미지 등록</LabelStyle>
      <ImageButton />
    </InputImageContainerStyle>
  );
}

const InputImageContainerStyle = styled.div``;
const LabelStyle = styled.label``;
