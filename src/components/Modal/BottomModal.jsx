import React, { useRef } from "react";
import { keyframes, styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../utils";

export default function BottomModal(props) {
  const { menu, isModalOpen, onModalHandler } = props;
  const modalRef = useRef();
  const menuList = menu.map((item) => (
    <ModalItemStyle onClick={item.onClickHandler}>{item.label}</ModalItemStyle>
  ));
  if (isModalOpen) {
    return (
      <ModalBackgroundStyle
        onClick={(e) => {
          if (modalRef.current !== e.target) {
            onModalHandler();
          }
        }}
      >
        <ModalStyle ref={modalRef}>{menuList}</ModalStyle>
      </ModalBackgroundStyle>
    );
  } else {
    return null;
  }
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

const ModalBackgroundStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalStyle = styled.ul`
  position: absolute;
  width: 100%;
  min-height: 110px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${COLOR.bgPrimaryColor};
  bottom: 0;
  z-index: 10;
  cursor: pointer;

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
