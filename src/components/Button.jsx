import React from "react";
import { styled } from "styled-components";

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
  color: ${(props) => (props.reversed ? "#767676" : "#FFFFFF")};
  width: 100%;
  max-width: ${(props) =>
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
  border: none;
  border-radius: 44px;

  background-color: ${(props) =>
    props.reversed ? "#FFFFFF" : props.disabled ? "#FFC7A7" : "#f26e22"};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-size: ${(props) => (props.size.toUpperCase() === "S" ? "12px" : "14px")};
`;
