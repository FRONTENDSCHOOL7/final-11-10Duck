import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils";

export default function LayoutContent({ children, isWhite, paddingOff }) {
  return (
    <ContentStyle isWhite={isWhite} paddingOff={paddingOff}>
      {children}
    </ContentStyle>
  );
}

const ContentStyle = styled.main`
  flex-grow: 1;
  padding: 0 ${(props) => (!props.paddingOff ? `16px` : `0`)};
  background-color: ${(props) =>
    props.isWhite === undefined
      ? COLOR.bgPrimaryColor
      : props.isWhite
      ? COLOR.bgPrimaryColor
      : COLOR.bgSecondaryColor};
  position: relative;
  overflow: scroll;

  // scrollbar 숨기기
  &::-webkit-scrollbar {
    display: none;
  }
`;
