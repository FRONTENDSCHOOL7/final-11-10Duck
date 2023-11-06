import React from "react";
import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function ChatBalloon(props) {
  const { message } = props;
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();

  return (
    <ChatBallonStyle>
      <TimeStamp>
        {String(hour).padStart(2, "0") + "." + String(min).padStart(2, "0")}
      </TimeStamp>
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

const TimeStamp = styled.div`
  font-size: ${FONT_SIZE.small};
  color: ${COLOR.fontPrimaryColor};
  display: inline-block;
  padding-right: 6px;
`;
