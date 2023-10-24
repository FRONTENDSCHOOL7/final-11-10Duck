import React from "react";
import { keyframes, styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../utils";

export default function BottomModal(props) {
  const { menu } = props;
  const menuList = menu.map((item) => (
    <ModalItemStyle>{item.label}</ModalItemStyle>
  ));
  return <ModalStyle>{menuList}</ModalStyle>;
}

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(20px);
}
to {
    opacity: 1;
    transform: none;
}`;

const ModalStyle = styled.ul`
  position: absolute;
  width: 100%;
  min-height: 110px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${COLOR.bgPrimaryColor};
  bottom: 0;
  z-index: 10;

  &::before {
    content: "";
    display: block;
    position: relative;
    width: 50px;
    height: 4px;
    flex-shrink: 0;
    background: #dbdbdb;
    border-radius: 5px;
    margin: 16px auto;
  }

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ModalItemStyle = styled.li`
  list-style: none;
  font-size: ${FONT_SIZE.medium};
  padding: 14px 26px;
`;
