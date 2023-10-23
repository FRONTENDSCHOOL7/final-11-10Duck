import React from "react";
import { styled } from "styled-components";
import ArrowIcon from "../../assets/icon/icon-arrow-left.png";
import Button from "../Button";
import { COLOR } from "../../utils";

import useBackPage from "../../hooks/useBackPage";

export default function UploadHeader({ buttonText, disabled, onClickHandler }) {
  const { backPage } = useBackPage();
  return (
    <HeaderContainer>
      <IconImg src={ArrowIcon} alt="뒤로가기 아이콘" onClick={backPage} />
      <Button
        buttonText={buttonText}
        disabled={disabled}
        size={"MS"}
        onClickHandler={onClickHandler}
      />
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.bgBorderColor};
  background-color: ${COLOR.bgPrimaryColor};
  padding: 13px 16px;
  box-sizing: border-box;
`;
const IconImg = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-left: 0;
`;
