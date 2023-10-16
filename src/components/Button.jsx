import React from "react";
import { styled } from "styled-components";

export default function Button() {
  return <CustomButton>버튼</CustomButton>;
}

const CustomButton = styled.button`
  color: blue;
`;
