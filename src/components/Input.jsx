import React from "react";
import styled from "styled-components";
import { COLOR } from "../utils";

export default function Input2(props) {
  const { main, search } = props;

  return (
    <StyledInput
      type="text"
      placeholder="Chat Input"
      main={main}
      search={search}
    />
  );
}

const StyledInput = styled.input`
  outline: none;
  width: 322px;
  padding: 5px 2px 5px 2px;
  border: 1px solid ${COLOR.borderPrimaryColor};
  border-width: 0;
  background-color: ${COLOR.bgPrimaryColor};
  border-radius: 0;
  &:focus {
    border: 1px solid ${COLOR.borderSecondaryColor};
    border-width: 1px;
  }

  ${(props) => props.main && `border-width: 0 0 1px;`}
  ${(props) =>
    props.search &&
    `padding: 5px 10px 5px 10px;
    background-color: ${COLOR.bgSecondaryColor};
    border-radius: 2rem;`}
`;
