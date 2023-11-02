import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../../utils";

export default function ImageBalloon(props) {
  const { src } = props;

  return (
    <ImageBalloonStyle>{!src ? <></> : <img src={src} />}</ImageBalloonStyle>
  );
}

const ImageBalloonStyle = styled.div`
  margin-top: 0.5em;

  & > img {
    box-sizing: border-box;
    width: 100%;
    object-fit: cover;
    display: inline-block;
    padding: 12px;
    right: 16px;
    background-color: ${COLOR.fontOrangeColor};
    border-radius: 10px 0 10px 10px;
  }
`;
