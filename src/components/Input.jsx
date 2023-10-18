import React from "react";
import styled from "styled-components";

export default function Input() {
  return (
    <>
      <StyledInput
        type="text"
        placeholder="Main Input"
        className="main-input"
        main
      />
      <StyledInput
        type="text"
        placeholder="Search Input"
        className="search-input"
        search
      />
      <StyledInput
        type="text"
        placeholder="Chat Input"
        className="chat-input"
      />
    </>
  );
}

const StyledInput = styled.input`
  padding: 5px 2px 5px 2px;
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  outline: none;
  width: 322px;
  background-color: ${(props) => (props.search ? "#f2f2f2" : "initial")};
  &.search-input {
    padding: 5px 10px 5px 10px;
    border-radius: 2rem;
    border: 0;
  }
  &.chat-input {
    border: 0;
  }
  &:focus {
    border: 1px solid #f26e22;
    border-width: ${(props) => (props.main ? " 0 0 1px" : "1px")};
  }
`;
