import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../../utils";

export default function ImageBalloon(props) {
  const { src } = props;
  console.log("💡", src);

  return (
    <ImageBalloonStyle>{!!src ? <></> : <img src={src} />}</ImageBalloonStyle>
  );
}

const ImageBalloonStyle = styled.div`
  margin-top: 0.5em;
  text-align: right;
  & > img {
    display: block;
    padding: 12px;
    right: 16px;
    background-color: ${COLOR.fontOrangeColor};
    border-radius: 10px 0 10px 10px;
  }
`;
