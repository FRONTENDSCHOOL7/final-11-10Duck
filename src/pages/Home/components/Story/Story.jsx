import React from "react";
import { styled } from "styled-components";

export default function Story(props) {
  const { children } = props;
  return <ContainerStyle>{children}</ContainerStyle>;
}

const ContainerStyle = styled.section`
  padding-top: 12px;
`;
