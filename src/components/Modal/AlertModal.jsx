import React from "react";
import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../utils";

export default function AlertModal(props) {
  const {
    isModalOpen,
    onModalHandler,
    alertTitle,
    leftBtnText,
    rightBtnText,
    onClickRightBtnHandler,
  } = props;
  if (isModalOpen) {
    return (
      <AlertModalStyle>
        <div className="alertText">{alertTitle}</div>
        <div className="buttons">
          <button onClick={onModalHandler.closeModal}>{leftBtnText}</button>
          <button onClick={onClickRightBtnHandler}>{rightBtnText}</button>
        </div>
      </AlertModalStyle>
    );
  }

  return null;
}

const AlertModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 252px;
  background: ${COLOR.bgPrimaryColor};
  font-size: ${FONT_SIZE.xlarge};
  text-align: center;
  color: ${COLOR.fontDarkColor};
  border-radius: 10px;
  overflow: hidden;

  & > .alertText {
    padding: 22px;
  }

  & > .buttons {
    width: 100%;
    text-align: center;
    display: flex;
  }

  & > .buttons > button {
    width: 50%;
    height: 46px;
    border: none;
    padding: 0;
    border-top: 0.5px solid #dbdbdb;
    font-size: ${FONT_SIZE.large};
    background: ${COLOR.bgPrimaryColor};
    cursor: pointer;
  }

  & > .buttons > button:first-child {
    color: ${COLOR.fontDarkColor};
    border-right: 0.5px solid #dbdbdb;
  }

  & > .buttons > button:last-child {
    color: ${COLOR.fontOrangeColor};
  }
`;
