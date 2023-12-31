import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils";
import { FONT_SIZE } from "../../utils";

export default function Input(props) {
  const {
    labelText,
    type,
    alert,
    onChangeHandler,
    placeholder,
    placeholderColor,
    onBlurHandler,
    value,
    maxLength,
  } = props;
  return (
    <InputContainerStyle>
      <LabelStyle>{labelText}</LabelStyle>
      <InputStyle
        maxLength={maxLength}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        onBlur={onBlurHandler}
      />
      {alert && <AlertStyle>{alert}</AlertStyle>}
    </InputContainerStyle>
  );
}

const InputContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
const LabelStyle = styled.label`
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.medium};
`;
const InputStyle = styled.input`
  border: none;
  border-bottom: 1px solid ${COLOR.borderPrimaryColor};
  padding-top: 10px;
  padding-bottom: 9px;
  background-color: ${COLOR.bgPrimaryColor};
  &:focus {
    outline: none;
    border-bottom: 1px solid ${COLOR.borderOrangeColor};
    background-color: ${COLOR.bgPrimaryColor};
  }
  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;

const AlertStyle = styled.div`
  color: ${COLOR.fontRedColor};
  font-size: ${FONT_SIZE.medium};
  margin-top: 6px;
`;
