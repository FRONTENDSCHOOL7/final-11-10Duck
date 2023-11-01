import React from "react";
import { styled } from "styled-components";
import CloseIcon from "../../../../assets/icon/close.png";

export default function AddStory(props) {
  const { isAddStoryOpen, closeModal } = props;
  if (isAddStoryOpen) {
    return (
      <PageStyle>
        <HeaderStyle>
          <CloseBtnStyle onClick={closeModal}>
            <CloseIconStyle src={CloseIcon} alt="닫기 아이콘" />
          </CloseBtnStyle>
        </HeaderStyle>
      </PageStyle>
    );
  } else {
    return null;
  }
}

const PageStyle = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
`;

const HeaderStyle = styled.div`
  padding: 8px 12px;
`;

const CloseBtnStyle = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const CloseIconStyle = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
