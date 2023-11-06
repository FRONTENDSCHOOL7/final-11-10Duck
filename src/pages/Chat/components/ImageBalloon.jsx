import React from "react";
import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function ImageBalloon(props) {
  const { src } = props;
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();

  return (
    <ImageBalloonStyle>
      <TimeStamp>
        {String(hour).padStart(2, "0") + "." + String(min).padStart(2, "0")}
      </TimeStamp>
      <img src={src} />
    </ImageBalloonStyle>
  );
}

const ImageBalloonStyle = styled.div`
  margin-top: 0.5em;
  text-align: right;

  & > img {
    box-sizing: border-box;
    width: 80%;
    object-fit: cover;
    display: inline-block;
    right: 16px;
    background-color: ${COLOR.fontOrangeColor};
    border-radius: 10px 10px;
  }
`;

const TimeStamp = styled.div`
  font-size: ${FONT_SIZE.small};
  color: ${COLOR.fontPrimaryColor};
  display: inline-block;
  padding-right: 6px;
`;
