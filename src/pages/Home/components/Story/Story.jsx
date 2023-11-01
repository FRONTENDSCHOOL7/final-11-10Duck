import React from "react";
import StoryButton from "./StoryButton";
import { styled } from "styled-components";

export default function Story() {
  return (
    <ContainerStyle>
      <StoryButton />
    </ContainerStyle>
  );
}

const ContainerStyle = styled.section`
  padding-top: 12px;
`;
