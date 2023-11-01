import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../utils";
import { FONT_SIZE } from "../utils";

export default function Button(props) {
  const { buttonText, disabled, size = "L", reversed, onClickHandler } = props;
  return (
    <ButtonStyle
      disabled={disabled}
      reversed={reversed}
      size={size}
      onClick={onClickHandler}
    >
      {buttonText}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  display: block;
  color: ${(props) =>
    props.reversed ? COLOR.fontPrimaryColor : COLOR.fontSecondaryColor};
  width: ${(props) =>
    props.size.toUpperCase() === "L"
      ? "322px"
      : props.size.toUpperCase() === "M"
      ? "120px"
      : props.size.toUpperCase() === "MS"
      ? "90px"
      : "56px"};
  height: ${(props) =>
    props.size.toUpperCase() === "L"
      ? "44px"
      : props.size.toUpperCase() === "M"
      ? "34px"
      : props.size.toUpperCase() === "MS"
      ? "32px"
      : "28px"};
  border: ${(props) => (props.reversed ? "1px solid #DBDBDB" : "none")};
  border-radius: 44px;

  background-color: ${(props) =>
    props.reversed
      ? COLOR.btnSecondaryColor
      : props.disabled
      ? COLOR.btnDisabledColor
      : COLOR.btnPrimaryColor};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-size: ${(props) =>
    props.size.toUpperCase() === "S" ? FONT_SIZE.medium : FONT_SIZE.large};

  font-family: "PyeongChang";
`;
