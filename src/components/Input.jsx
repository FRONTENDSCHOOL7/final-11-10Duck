import React from "react";
import styled from "styled-components";
import { COLOR } from "../utils";

export default function Input() {
  return (
    <>
      <StyledInput type="text" placeholder="Main Input" main />
      <StyledInput type="text" placeholder="Search Input" search />
      <StyledInput type="text" placeholder="Chat Input" />
    </>
  );
}

const StyledInput = styled.input`
  outline: none;
  width: 322px;
  padding: ${(props) =>
    props.search ? "5px 10px 5px 10px" : "5px 2px 5px 2px"};
  border: 1px solid ${COLOR.borderPrimaryColor};
  border-width: ${(props) => (props.main ? "0 0 1px" : "0")};
  background-color: ${(props) =>
    props.search ? COLOR.bgSecondaryColor : COLOR.bgPrimaryColor};
  border-radius: ${(props) => (props.search ? "2rem" : "0")};
  &:focus {
    border: 1px solid ${COLOR.borderSecondaryColor};
    border-width: ${(props) => (props.main ? " 0 0 1px" : "1px")};
  }
`;
