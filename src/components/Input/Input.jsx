import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils";
import { FONT_SIZE } from "../../utils";

export default function Input(props) {
  const { labelText, type, onChangeHandler } = props;
  return (
    <InputContainerStyle>
      <LabelStyle>{labelText}</LabelStyle>
      <InputStyle
        type={type}
        onChange={(event) => {
          onChangeHandler(event.target.value);
        }}
      />
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
  &:focus {
    outline: none;
    border-bottom: 1px solid ${COLOR.borderOrangeColor};
  }
`;