import React from "react";
import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function ChatBalloon(props) {
  const { message } = props;
  return (
    <ChatBallonStyle>
      <span>{message}</span>
    </ChatBallonStyle>
  );
}

const ChatBallonStyle = styled.div`
  margin-top: 0.5em;
  text-align: right;

  & > span {
    display: inline-block;
    padding: 12px;
    right: 16px;

    background-color: ${COLOR.fontOrangeColor};
    border-radius: 10px 0 10px 10px;
    color: ${COLOR.fontSecondaryColor};
    font-size: ${FONT_SIZE.large};
  }
`;
